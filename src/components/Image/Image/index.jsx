import React, { useImperativeHandle, forwardRef, useState, useRef } from 'react'
import fileChoose from './../utils/fileChoose'
import choose from './../utils/choose'
import uploadItem from './../utils/uploadItem'
import showLoading from './../utils/showLoading'
import hideLoading from './../utils/hideLoading'
import List from './../List'
import Choose from './../Choose'
import PreviewModal from './../PreviewModal'

// 内库使用-start
import Bridge from './../../../utils/Bridge'
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Bridge, LocaleUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

// 照片视频预览
const Image = forwardRef(
  (
    {
      // Style
      allowChoose = false,
      allowClear = false,
      uploadPosition = 'end', // start | end
      upload, // 上传按钮覆盖的dom
      uploading,

      // Preview Config: { allowChoose, allowClear }
      preview,

      // Config
      async = false,
      reUpload = true,
      count,
      ellipsis,
      type, // video.录相 | 其它.为拍照
      sourceType = ['album', 'camera'],
      sizeType = ['compressed'], // ['original', 'compressed']
      maxWidth,
      list = [],
      /*
      [
        {
          fileThumbnail: "全路径(必传)",
          fileUrl: "全路径(必传)",
          filePath: "目录/年月/照片名.jpg(必传)",
          status: "choose|uploading|fail|success",
          "fileLocalUrl": "本地预览路径, 用于离线场景(非必传)",
          children: node,
        },
      ]
      */

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
  ) => {
    const rootRef = useRef(null)

    // 因为在click事件内改变数据的可能性, 所以更新句柄, 防止synchronization模式读取创建时的状态
    const onFileChangeRef = useRef()
    onFileChangeRef.current = onFileChange

    const onChangeRef = useRef()
    onChangeRef.current = onChange

    // Judge wether to display choose button
    let chooseVisible = allowChoose
    if (typeof count === 'number' && (list || []).length >= count) {
      chooseVisible = false
    }

    // 预览类型: browser|native
    const previewTypeRef = useRef(Bridge?.platform === 'browser' ? 'browser' : null)
    const [previewVisible, setPreviewVisible] = useState(null)

    // Refresh state
    const [updateStatus, setUpdateStatus] = useState(0)

    // Expose
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
        showLoading: _showLoading,
        hideLoading: _hideLoading,
        setPreviewVisible: setPreviewVisible
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
            '此照片控件无拍照功能, 请勿调用拍照',
            'lyrixi_image_choose_no_feature'
          )
        })
        return false
      }
      let chooseDOM = rootRef.current?.querySelector?.('[data-type="upload"]')
      if (!chooseDOM) {
        Toast.show({
          content: LocaleUtil.locale(
            '未找到拍照按钮, 调用拍照失败',
            'lyrixi_image_choose_no_upload_button'
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
      // eslint-disable-next-line
      if (!newList) newList = [...list]
      if (!newList) return

      let hasUploaded = false
      // 开始上传
      _showLoading({ content: LocaleUtil.locale('上传中', 'lyrixi_uploading') })
      for (let [index, item] of newList.entries()) {
        // 只上传未上传或上传失败的照片
        if (item.status === 'choose' || item.status === 'error') {
          newList[index] = await uploadItem(item, { onUpload })
          hasUploaded = true
        }
      }
      _hideLoading()

      // 不支持重新上传，则过滤上传失败的照片
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
                `网络异常，上传失败${failCount}张`,
                'lyrixi_upload_error_count',
                [failCount]
              )}`
            })
          }
        }
      }

      if (hasUploaded) {
        onChangeRef.current && onChangeRef.current(newList, { action: action || 'upload' })
      }

      return newList
    }

    // 选择照片
    async function handleFileChange(e) {
      _showLoading()
      let chooseResult = await fileChoose({
        file: e.nativeEvent.target,
        async,
        sizeType,
        maxWidth,
        count,
        list,
        uploadPosition,
        uploadList,
        onFileChange: onFileChangeRef.current,
        onChange: onChangeRef.current
      })
      _hideLoading()
      return chooseResult
    }

    // 选择照片
    async function handleChoose(e) {
      _showLoading()
      let chooseResult = await choose({
        async,
        sizeType,
        maxWidth,
        count,
        list,
        uploadPosition,
        uploadList,
        onChoose,
        onChange: onChangeRef.current
      })
      _hideLoading()
      return chooseResult
    }

    // 重新上传
    async function handleReUpload(item, index) {
      if (typeof onChange !== 'function') {
        console.warn('lyrixi Image: onChange is not a function')
        return
      }
      let newList = [...list]
      // 开始上传
      _showLoading({
        content: LocaleUtil.locale('上传中', 'lyrixi_uploading'),
        index: index
      })
      newList[index] = await uploadItem(item, { onUpload })
      _hideLoading(newList[index].status === 'error' ? { failIndexes: [index] } : undefined)

      onChangeRef.current && onChangeRef.current(newList, { action: 'reUpload' })
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
        Bridge.previewImage({
          urls: list.map((item) => item?.fileLocalUrl || item.fileUrl),
          current: list[index]?.fileLocalUrl || list[index].fileUrl,
          index: index
        })
      }
      // 视频使用previewFile预览
      else if (previewTypeRef.current === 'nativeFile') {
        Bridge.previewFile({ url: item.fileLocalUrl || item.fileUrl })
      }
      // 浏览器预览
      else {
        previewTypeRef.current = 'browser'
        setPreviewVisible(Number(index))
      }
    }

    // 上传node
    function getChooseNode(props) {
      if (!chooseVisible || typeof onChange !== 'function') {
        return null
      }

      return (
        <Choose
          type={type}
          // file框属性
          sourceType={sourceType}
          // 上传DOM
          upload={upload}
          // 上传中DOM
          uploading={uploading}
          // Choose events
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
          {...props}
        />
      )
    }

    // Render
    return (
      <div ref={rootRef} {...props} className={DOMUtil.classNames('lyrixi-image', className)}>
        {/* 图片上传: 上传按钮 */}
        {uploadPosition === 'start' && getChooseNode()}

        {/* 图片列表 */}
        <List
          type={type}
          list={list}
          uploading={uploading}
          ellipsis={ellipsis}
          allowClear={allowClear}
          // Events
          onChange={onChangeRef.current}
          onReUpload={handleReUpload}
          onPreview={handlePreview}
        />

        {/* 图片上传: 上传按钮 */}
        {uploadPosition === 'end' && getChooseNode()}

        {/* 预览 */}
        {previewTypeRef.current === 'browser' && (
          <PreviewModal
            open={typeof previewVisible === 'number'}
            type={type}
            list={list} // 需要预览的资源列表{fileUrl: '图片或视频的地址', type: 'video|image, 默认image', fileThumbnail: '封面地址'}
            current={previewVisible}
            // Config
            count={count}
            sourceType={sourceType}
            sizeType={sizeType}
            maxWidth={maxWidth}
            // Events
            onBeforeChoose={onBeforeChoose}
            onChoose={onChoose}
            onFileChange={onFileChange}
            onUpload={onUpload}
            onChange={onChange}
            {...preview}
            onOpen={() => {
              preview?.onOpen?.()
            }}
            onClose={() => {
              preview?.onClose?.()
              setPreviewVisible(null)
            }}
          />
        )}
      </div>
    )
  }
)

export default Image
