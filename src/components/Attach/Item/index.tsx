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
  // Value & Display Value
  item,
  index,

  // Element
  uploadingRender,
  itemRender,

  // Events
  onDelete,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
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
        content: LocaleUtil.locale(
          '图片未上传成功, 无法预览',
          'lyrixi_48ec308c5a5abf2b6dc08111a4aa08bb'
        )
      })
      return
    }

    // 预览地址
    let previewUrl = decodeURIComponent(decodeURIComponent(item.fileUrl))
    if (!previewUrl || typeof previewUrl !== 'string') {
      Toast.show({
        content: LocaleUtil.locale('预览地址不合法', 'lyrixi_abbd8dd2fbc71bf8315e71e5e80d041a')
      })
      return
    }

    // 只有客户端和企微支持预览文件
    if (previewTypeRef.current === 'nativeFile') {
      Bridge.previewFile(item)
    }
    // 平台预览需要复制到剪贴板
    else {
      Clipboard.copy(previewUrl, {
        onSuccess: () => {
          Toast.show({
            content: LocaleUtil.locale(
              '文件链接已复制到剪贴板，请粘贴到系统浏览器上下载',
              'lyrixi_6326307026a1ebefc8b307e7ef1c58b5'
            )
          })
        },
        onError: () => {
          Message.open({
            content: LocaleUtil.locale(
              `文件链接复制到剪贴板失败, 请长按复制<br/>${previewUrl}`,
              'lyrixi_a7da286a734546b215b7633f1c49ed98',

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
      return 'image'
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
          `lyrixi-${getIcon(item.fileUrl)}`
        )}
      ></i>
      {/* 文件名称 */}
      <div className="lyrixi-attach-item-main">
        <div className="lyrixi-attach-item-title">{item.fileName || item.fileUrl}</div>
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
        <Uploading
          uploadingType="item"
          uploadingRender={uploadingRender}
          className="lyrixi-attach-item-right-icon"
        />
      </div>

      {/* 自定义渲染 */}
      {itemRender && itemRender(item)}
    </div>
  )
}

export default Item
