import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import fileChoose from './../utils/fileChoose'
import choose from './../utils/choose'
import uploadItem from './../../Media/utils/uploadItem'
import showLoading from './../../Media/utils/showLoading'
import hideLoading from './../../Media/utils/hideLoading'
import List from './../List'
import Choose from './../Choose'
import PreviewModal from './../PreviewModal'
import copyFileUrl from './copyFileUrl'

// 内库使用-start
import Bridge from './../../../utils/Bridge'
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
// 内库使用-end

/* 测试使用-start
import { Bridge, DOMUtil, LocaleUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

// 文件上传
function Attach(
  {
    // Value & Display Value
    list = [],
    /*
  [
    {
      fileUrl: "全路径(必传)",
      filePath: "入库路径(必传)",
      fileName: "文件名(必传)",
      fileSize: "文件大小(字节)",
      status: "choose|uploading|error|success",
    },
  ]
  */
    maxCount,
    sourceType,

    // Status
    disabled,
    allowChoose = false,
    allowClear = false,
    async = false,
    reUpload = true,

    // Validate
    maxSize,

    // Style
    style,
    className,
    uploadPosition = 'end', // start | end

    // Element
    uploadRender, // 上传按钮覆盖的dom
    uploadingRender,
    itemRender,

    // Preview Server
    previewPortal,
    previewServerUrl,
    previewServerSourceType,

    // Events
    onBeforeChoose,
    onChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview
  },
  ref
) {
  const rootRef = useRef(null)

  const onChangeRef = useRef()
  onChangeRef.current = onChange

  // Judge wether to display choose button
  let chooseVisible = allowChoose
  if (typeof maxCount === 'number' && (list || []).length >= maxCount) {
    chooseVisible = false
  }

  // 预览类型: browser|native
  const previewTypeRef = useRef(null)
  const [previewVisible, setPreviewVisible] = useState(null)

  // Refresh state
  const [updateStatus, setUpdateStatus] = useState(0)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      updateStatus: () => {
        setUpdateStatus(updateStatus + 1)
      },
      chooseFile: _choose,
      choose: _choose,
      uploadList: uploadList,
      showLoading: _showLoading,
      hideLoading: _hideLoading
    }
  })

  // 显隐Loading
  function _showLoading(options) {
    showLoading(rootRef.current, options)
  }

  function _hideLoading(options) {
    hideLoading(rootRef.current, options)
  }

  // Expose manual choose
  async function _choose(e) {
    if (!chooseVisible) {
      Toast.show({
        content: LocaleUtil.locale(
          '此控件无上传功能, 请勿调用拍照',
          'lyrixi_c4b36524143372bf6821ce50ab843844'
        )
      })
      return false
    }
    let uploadElement = rootRef.current?.querySelector?.('.lyrixi-attach-choose')
    if (!uploadElement) {
      Toast.show({
        content: LocaleUtil.locale(
          '未找到上传按钮, 调用上传失败',
          'lyrixi_9e65d8453742238201afa78f9f37ff8c'
        )
      })
      return false
    }

    let chooseCallBack = e?.nativeEvent?.target ? handleFileChange : handleChoose
    let chooseOk = await chooseCallBack(e)
    return chooseOk
  }

  // 上传
  async function uploadList(newList, { action } = {}) {
    if (!newList) {
      // eslint-disable-next-line
      newList = [...list]
    }
    if (!newList) return

    let hasUploaded = false
    // 开始上传
    _showLoading({ content: LocaleUtil.locale('上传中', 'lyrixi_fc09a73e52b76f697cff129b4dddecd1') })
    for (let [index, item] of newList.entries()) {
      // 只上传未上传的文件
      if (item.status === 'choose') {
        newList[index] = await uploadItem(item, { onUpload })
        hasUploaded = true
      }
    }
    _hideLoading()

    // 不支持重新上传，则过滤上传失败的文件
    if (!reUpload) {
      if (Array.isArray(newList) && newList.length) {
        let failCount = 0
        // eslint-disable-next-line
        newList = newList.filter((photo) => {
          if (
            photo.status === 'error' ||
            photo.status === 'choose' ||
            photo.status === 'uploading'
          ) {
            failCount++
            return false
          }
          return true
        })
        // 上传失败
        if (failCount) {
          Toast.show({
            content: `${LocaleUtil.locale(
              '网络异常，上传失败',
              'lyrixi_18904cde640c2efd37bc6ed3e9dedc77'
            )}${failCount}`
          })
        }
      }
    }

    if (hasUploaded) {
      onChangeRef.current && onChangeRef.current(newList, { action: action || 'upload' })
    }

    return newList
  }

  // 重新上传
  async function handleReUpload(item, index) {
    let newList = [...list]
    // 开始上传
    _showLoading({ index })
    newList[index] = await uploadItem(item, { onUpload })
    _hideLoading(newList[index].status === 'error' ? { failIndexes: [index] } : undefined)

    onChangeRef.current && onChangeRef.current(newList, { action: 'reUpload' })
  }

  // 选择文件
  async function handleFileChange(e) {
    _showLoading()
    let chooseResult = await fileChoose({
      file: e.nativeEvent.target,
      async,
      maxSize,
      maxCount,
      sourceType,
      list,
      uploadPosition,
      uploadList,
      onFileChange,
      onChange: onChangeRef.current
    })
    _hideLoading()
    return chooseResult
  }

  // 选择文件
  async function handleChoose(e) {
    _showLoading()
    let chooseResult = await choose({
      async,
      maxSize,
      maxCount,
      sourceType,
      list,
      uploadPosition,
      uploadList,
      onChoose,
      onChange: onChangeRef.current
    })
    _hideLoading()
    return chooseResult
  }

  // 点击预览
  async function handlePreview(item, index) {
    // 自定义预览
    if (typeof onPreview === 'function') {
      let goOn = await onPreview(item, index)
      if (goOn === false) return
      previewTypeRef.current = goOn
    }

    // 本地能力预览照片
    if (previewTypeRef.current === 'nativeMedia') {
      Bridge.previewMedia({
        sources: list,
        index: index
      })
    }
    // 视频使用previewFile预览
    else if (previewTypeRef.current === 'nativeFile') {
      Bridge.previewFile(item)
    }
    // 浏览器预览
    else if (previewTypeRef.current === 'browser') {
      previewTypeRef.current = 'browser'
      setPreviewVisible(Number(index))
    }
    // 复制到剪贴板
    else {
      copyFileUrl(item.fileUrl)
    }
  }

  // 上传node
  function getChooseNode() {
    if (!chooseVisible || typeof onChange !== 'function') {
      return null
    }

    return (
      <Choose
        // Value & Display Value
        sourceType={sourceType}
        // Status
        disabled={disabled}
        // Element
        uploadRender={uploadRender}
        uploadingRender={uploadingRender}
        // Events
        onChoose={onChoose ? handleChoose : null}
        onFileChange={onFileChange ? handleFileChange : null}
        // File框不支持onBeforeChoose
        onBeforeChoose={
          typeof onBeforeChoose === 'function'
            ? async (e) => {
              _showLoading()
              let isOk = await onBeforeChoose(e)
              _hideLoading()
              return isOk
            }
            : null
        }
      />
    )
  }

  return (
    <div ref={rootRef} style={style} className={DOMUtil.classNames('lyrixi-attach', className)}>
      {/* 头部上传按钮 */}
      {uploadPosition === 'start' && (onChoose || onFileChange) && getChooseNode()}

      {/* 列表 */}
      <List
        // Value & Display Value
        list={list}
        // Status
        allowClear={allowClear}
        // Element
        uploadingRender={uploadingRender}
        itemRender={itemRender}
        // Events
        onChange={onChangeRef.current}
        onReUpload={handleReUpload}
        onPreview={handlePreview}
      />

      {/* 底部上传按钮 */}
      {uploadPosition === 'end' && (onChoose || onFileChange) && getChooseNode()}

      {/* 预览 */}
      {previewTypeRef.current === 'browser' && (
        <PreviewModal
          // Value & Display Value
          fileName={list[previewVisible]?.fileName}
          previewServerUrl={previewServerUrl}
          fileUrl={list[previewVisible]?.fileUrl}
          previewServerSourceType={previewServerSourceType}
          // Status
          open={typeof previewVisible === 'number'}
          // Elements
          portal={previewPortal}
          // Events
          onClose={() => {
            setPreviewVisible(null)
          }}
        />
      )}
    </div>
  )
}

export default forwardRef(Attach)
