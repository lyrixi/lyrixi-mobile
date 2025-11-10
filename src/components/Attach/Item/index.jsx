import React, { useRef } from 'react'
import Uploading from './../Uploading'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import AssetUtil from './../../../utils/AssetUtil'
import Bridge from './../../../utils/Bridge'
import Toast from './../../Toast'
import Message from './../../Message'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Clipboard, AssetUtil, Bridge, Toast, Message } from 'lyrixi-mobile'
测试使用-end */

// Item
const Item = ({
  item,
  index,
  uploading,
  // Events
  onPreview,
  onDelete,
  onReUpload
}) => {
  // 预览类型: browser|native
  const previewTypeRef = useRef(Bridge?.platform === 'browser' ? 'browser' : null)

  // 点击预览
  async function handlePreview(item, index) {
    // 自定义预览
    if (typeof onPreview === 'function') {
      let goOn = await onPreview(item, index)
      if (goOn === false) return
      previewTypeRef.current = goOn
    }

    // 失败的文件用localFileUrl预览
    if (item.status === 'error') {
      Toast.show({
        content: LocaleUtil.locale('图片未上传成功, 无法预览', 'lyrixi_upload_preview_error')
      })
      return
    }

    // 预览地址
    let previewUrl = decodeURIComponent(decodeURIComponent(item.fileUrl))
    if (!previewUrl || typeof previewUrl !== 'string') {
      Toast.show({
        content: LocaleUtil.locale('预览地址不合法', 'lyrixi_preview_src_error')
      })
      return
    }

    // 只有客户端和企微支持预览文件
    if (previewTypeRef.current === 'nativeFile') {
      Bridge.previewFile({ url: previewUrl, name: item?.fileName, size: item.fileSize })
    }
    // 平台预览需要复制到剪贴板
    else {
      Clipboard.copy(previewUrl, {
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
              `文件链接复制到剪贴板失败, 请长按复制<br/>${previewUrl}`,
              'lyrixi_clipboard_fail_confirm',
              [previewUrl]
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

  // 获取附件类型图标
  function getIcon(src) {
    let suffix = typeof src === 'string' ? AssetUtil.getFileExtension(src) : null
    if (!suffix) return 'unknown'
    if (suffix.indexOf('?') !== -1) {
      suffix = suffix.substring(0, suffix.indexOf('?'))
    }
    if ('RM,RMVB,MP4,3GP,AVI,MKV,WMV,MPG,VOB,FLV'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'video'
    }
    if ('WAVE,MPEG,MP3,MPEG-4,MIDI,WMA,VQF,AMR,APE,FLAC,AAC'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'audio'
    }
    if ('JPG,JPEG,WEBP,GIF,PNG,TIF,BMP'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'pic'
    }
    if ('RAR,ZIP'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'pack'
    }
    if ('DOC,DOCX'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'word'
    }
    if ('XSL,EXCEL'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'excel'
    }
    if ('PPT'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'ppt'
    }
    if ('PDF'.indexOf(suffix.toUpperCase()) !== -1) {
      return 'pdf'
    }
    return 'unknown'
  }

  return (
    <div
      key={index}
      data-index={index}
      // 状态status: choose|uploading|error|success
      className={DOMUtil.classNames('lyrixi-attach-item', item.className, `lyrixi-${item.status}`)}
      onClick={(e) => {
        e.stopPropagation()

        handlePreview(item, index)
      }}
    >
      {/* 文件图标 */}
      <i
        className={DOMUtil.classNames(
          'lyrixi-icon',
          'lyrixi-attach-item-type',
          getIcon(item.fileUrl)
        )}
      ></i>
      {/* 文件名称 */}
      <div className="lyrixi-attach-item-main">
        <div className="lyrixi-attach-item-title">{item.fileName || item.fileUrl}</div>
        {/* 自定义dom */}
        {item.children}
        {/* 重新上传 */}
        {onReUpload && (
          <div
            className="lyrixi-attach-item-right-icon lyrixi-attach-reload"
            onClick={(e) => {
              e.stopPropagation()

              onReUpload(item, index)
            }}
          ></div>
        )}

        {/* 删除按钮 */}
        {onDelete && (
          <div
            className="lyrixi-attach-item-right-icon lyrixi-attach-delete"
            onClick={(e) => {
              e.stopPropagation()

              onDelete(item, index)
            }}
          ></div>
        )}

        {/* 转圈 */}
        <Uploading uploading={uploading} item={item} className="lyrixi-attach-item-right-icon" />
      </div>
    </div>
  )
}

export default Item
