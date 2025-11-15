import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import getAccept from './../utils/getAccept'
import fileChoose from './fileChoose'
import choose from './choose'
import Choose from './../Choose'
import List from './../List'
import PreviewModal from './../PreviewModal'

// 内库使用-start
import Clipboard from './../../../utils/Clipboard'
import Bridge from './../../../utils/Bridge'
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Message from './../../Message'
import Loading from './../../Loading'
import Toast from './../../Toast'
// 内库使用-end

/* 测试使用-start
import { Clipboard, Bridge, DOMUtil, LocaleUtil, Message, Loading, Toast } from 'lyrixi-mobile'
测试使用-end */

// 文件上传
function Attach(
  {
    // Style
    disabled,
    allowChoose = false,
    allowClear = false,
    uploadPosition,
    upload,
    uploading,
    fileProps,

    // Preview Config: { allowChoose, allowClear }
    preview,

    // Config
    async = false,
    reUpload = true,
    count,
    extension,
    maxSize, // bytes
    list = [], // [{fileName: '附件名称', fileUrl: '全路径', filePath: '目录/年月/文件名.jpg', status: 'choose|uploading|error|success'}]

    // Events
    onBeforeChoose,
    onChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview,

    // 其它属性
    className,
    ...props
  },
  ref
) {
  const rootRef = useRef(null)

  const onChangeRef = useRef()
  onChangeRef.current = onChange

  // Judge wether to display choose button
  let chooseVisible = allowChoose
  if (typeof count === 'number' && (list || []).length >= count) {
    chooseVisible = false
  }

  // 预览类型: browser|native
  const previewTypeRef = useRef(null)
  const [previewVisible, setPreviewVisible] = useState(null)

  // Refresh state
  const [updateStatus, setUpdateStatus] = useState(0)

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      updateStatus: () => {
        setUpdateStatus(updateStatus + 1)
      },
      chooseFile: _choose,
      choose: _choose,
      uploadList: uploadList,
      showLoading: showLoading,
      hideLoading: hideLoading
    }
  })

  // Expose manual choose
  async function _choose(e) {
    if (!chooseVisible) {
      Toast.show({
        content: LocaleUtil.locale('此控件无上传功能, 请勿调用拍照', 'lyrixi_no_upload_feature')
      })
      return false
    }
    let uploadDOM = rootRef.current?.querySelector?.('.lyrixi-attach-choose')
    if (!uploadDOM) {
      Toast.show({
        content: LocaleUtil.locale('未找到上传按钮, 调用上传失败', 'lyrixi_no_upload_button')
      })
      return false
    }

    let chooseCallBack = e?.nativeEvent?.target ? handleFileChange : handleChoose
    let chooseOk = await chooseCallBack(e)
    return chooseOk
  }

  // 显隐Loading
  function showLoading({ content, index } = {}) {
    let rootDOM = rootRef.current || null
    if (!rootDOM) return
    // 根节点遮罩
    rootDOM.classList.add('lyrixi-uploading')
    // 新增按钮遮罩
    let uploadDOM = rootDOM.querySelector('.lyrixi-attach-choose')
    if (uploadDOM) uploadDOM.classList.add('lyrixi-uploading')
    // 当前项遮罩
    let itemDOM =
      typeof index === 'number' ? rootDOM.querySelector(`[data-index="${index}"]`) : null
    if (itemDOM) {
      itemDOM.classList.remove('lyrixi-error')
      itemDOM.classList.add('lyrixi-uploading')
    }

    Loading.show(content ? { content } : { className: 'lyrixi-hide' })
  }

  function hideLoading({ failIndexes } = {}) {
    let rootDOM = rootRef.current || null
    if (!rootDOM) return
    // 根节点遮罩
    rootDOM.classList.remove('lyrixi-uploading')
    // 新增按钮遮罩
    let uploadDOM = rootDOM.querySelector('.lyrixi-attach-choose')
    if (uploadDOM) uploadDOM.classList.remove('lyrixi-uploading')
    // 当前项遮罩
    let itemsDOM = rootDOM.querySelectorAll(`[data-index]`)
    if (itemsDOM) {
      for (let itemDOM of itemsDOM) {
        let itemIndex = Number(itemDOM.getAttribute('data-index'))
        itemDOM.classList.remove('lyrixi-uploading')
        // 更新失败状态
        if (Array.isArray(failIndexes) && failIndexes.includes(itemIndex)) {
          itemDOM.classList.add('lyrixi-error')
        }
      }
    }

    Loading.hide()
  }

  // 上传文件
  async function uploadItem(item) {
    if (typeof onUpload !== 'function') {
      Toast.show({
        content: `没有onUpload入参, 无法上传`
      })
    }

    // 已经上传成功, 无需要再次上传
    if (item?.fileUrl?.startsWith?.('http')) {
      item.status = 'success'
      return item
    }

    // 开始上传
    let result = await onUpload(item)

    // 上传失败
    if (typeof result === 'string') {
      Toast.show({
        content: result
      })
      item.status = 'error'
      return item
    }

    // 更新状态
    return { ...item, status: 'success', ...result }
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
    showLoading({ content: LocaleUtil.locale('上传中', 'lyrixi_uploading') })
    for (let [index, item] of newList.entries()) {
      // 只上传未上传的文件
      if (item.status === 'choose') {
        newList[index] = await uploadItem(item, index)
        hasUploaded = true
      }
    }
    hideLoading()

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
              'lyrixi_upload_network_error'
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
    showLoading({ index })
    newList[index] = await uploadItem(item, index)
    hideLoading(newList[index].status === 'error' ? { failIndexes: [index] } : undefined)

    onChangeRef.current && onChangeRef.current(newList, { action: 'reUpload' })
  }

  // 选择文件
  async function handleFileChange(e) {
    showLoading()
    let chooseResult = await fileChoose({
      file: e.nativeEvent.target,
      async,
      maxSize,
      count,
      extension,
      list,
      uploadPosition,
      uploadList,
      onFileChange,
      onChange: onChangeRef.current
    })
    hideLoading()
    return chooseResult
  }

  // 选择文件
  async function handleChoose(e) {
    showLoading()
    let chooseResult = await choose({
      async,
      maxSize,
      count,
      extension,
      list,
      uploadPosition,
      uploadList,
      onChoose,
      onChange: onChangeRef.current
    })
    hideLoading()
    return chooseResult
  }

  // 删除
  function handleDelete(item, index) {
    let newList = list.filter((current, currentIndex) => {
      return currentIndex !== index
    })
    onChangeRef.current && onChangeRef.current(newList, { action: 'delete' })
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
    if (previewTypeRef.current === 'nativeImage') {
      Bridge.previewMedia({
        sources: list,
        index: index
      })
    }
    // 视频使用previewFile预览
    else if (previewTypeRef.current === 'nativeFile') {
      Bridge.previewFile({ url: item.localFileUrl || item.fileUrl })
    }
    // 浏览器预览
    else if (previewTypeRef.current === 'browser') {
      previewTypeRef.current = 'browser'
      setPreviewVisible(Number(index))
    }
    // 复制到剪贴板
    else {
      Clipboard.copy(item.fileUrl, {
        onSuccess: () => {
          Toast.show({
            content: LocaleUtil.locale(
              '文件链接已复制到剪贴板，请粘贴到系统浏览器上下载',
              'lyrixi_clipboard_success'
            )
          })
        },
        onError: () => {
          Message.open({
            content: LocaleUtil.locale(
              `文件链接复制到剪贴板失败, 请长按复制<br/>${item.fileUrl}`,
              'lyrixi_clipboard_fail_confirm',
              [item.fileUrl]
            ),
            buttons: [
              {
                name: '确定',
                className: 'lyrixi-primary',
                onClick: () => true
              }
            ]
          })
        }
      })
    }
  }

  // 上传node
  function getChooseNode(props) {
    return (
      <Choose
        disabled={disabled}
        // file框属性
        fileProps={{
          accept: getAccept(extension),
          ...fileProps
        }}
        // 上传DOM
        upload={upload}
        // 上传中DOM
        uploading={uploading}
        // Choose events
        onChoose={onChoose && chooseVisible ? handleChoose : null}
        onBeforeChoose={
          typeof onBeforeChoose === 'function'
            ? async (e) => {
                showLoading()
                let isOk = await onBeforeChoose(e)
                hideLoading()
                return isOk
              }
            : null
        }
        onFileChange={onFileChange && chooseVisible ? handleFileChange : null}
        {...props}
      />
    )
  }

  return (
    <div ref={rootRef} {...props} className={DOMUtil.classNames('lyrixi-attach', className)}>
      {/* 头部上传按钮 */}
      {uploadPosition === 'start' && (onChoose || onFileChange) && getChooseNode()}

      {/* 列表 */}
      <List
        list={(list || []).map((item) => {
          return {
            ...item,
            fileUrl: item.localFileUrl || item.fileUrl
          }
        })}
        uploading={uploading}
        // Events
        onDelete={allowClear ? handleDelete : null}
        onReUpload={handleReUpload}
        onPreview={handlePreview}
      />

      {/* 底部上传按钮 */}
      {uploadPosition === 'end' && (onChoose || onFileChange) && getChooseNode()}

      {/* 预览 */}
      {previewTypeRef.current === 'browser' && (
        <PreviewModal
          open={typeof previewVisible === 'number'}
          fileName={list[previewVisible]?.fileName}
          viewerUrl={preview?.viewerUrl}
          fileUrl={list[previewVisible]?.fileUrl}
          types={preview?.types}
          onClose={() => {
            setPreviewVisible(null)
          }}
        />
      )}
    </div>
  )
}

export default forwardRef(Attach)
