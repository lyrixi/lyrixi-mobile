import React, { forwardRef, useEffect, useRef, useState } from 'react'

// 内部组件导出
import Mark from './components/Mark'
import validateList from './utils/validateList'
import uploadList from './utils/uploadList'

// 内部组件
import Interval from './utils/Interval'
import CompatibleToggle from './CompatibleToggle'
import WechatMiniprogram from './WechatMiniprogram'
import Browser from './Browser'
import Lyrixi from './Lyrixi'
import Wechat from './Wechat'
import Dingtalk from './Dingtalk'

// 内库使用-start
import Device from './../../utils/Device'
import Bridge from './../../utils/Bridge'
import Toast from './../Toast'
import LocaleUtil from './../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Device, Bridge, Toast } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function Main(
  {
    // Value & Display Value
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]
    count = 5,
    type, // video.录相 | 其它.为拍照 | browser | wechatMiniprogram(强制拍照类型)
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    maxWidth,
    uploadDir = 'default',
    chooseExtraParams, // 仅对客户端有效

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,
    previewAllowChoose,
    previewAllowClear,
    compatible = true, // 允许模式切换（小程序/浏览器）
    timeout,

    // Style
    className,
    uploadPosition,

    // Element
    upload, // 上传按钮覆盖的dom
    uploading,
    previewPortal,
    /*
    格式化上传结果
    入参:
    {platform: 'browser', uploadItem: item, result: result}
    返回格式:
    {
      fileThumbnail: 缩略图,
      fileUrl: 高清图,
      filePath: 入库路径
    }
    */
    formatUploadedItem,
    getWatermark,
    getUploadUrl,
    getUploadPayload,

    // Events
    onBeforeChoose,
    // onChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview,
    onPreviewOpen,
    onPreviewClose
  },
  ref
) {
  // 鸿蒙小程序微信8.0后报错: chooselmage: permission denied， 解决方法: 此版本鸿蒙微信有bug，强制同步上传(同步上传会用小程序和浏览器上传)
  if (Device?.os === 'harmony' && Bridge.platform === 'wechatMiniprogram') {
    // eslint-disable-next-line
    async = false
  }

  // 间隔追踪器状态
  const [forceType, setForceType] = useState(type)

  // 5秒间隔自动切成浏览器定位
  const intervalRef = useRef(new Interval(5000))

  useEffect(() => {
    if (['browser', 'wechatMiniprogram'].includes(type)) {
      setForceType(type)
    }
    // eslint-disable-next-line
  }, [type])

  // 小程序跳转onNavigateTo两次间隔小于5秒，则使用浏览器拍照
  const handleNavigateTo = () => {
    let isTimeout = intervalRef.current.isTimeout()
    if (isTimeout === false) {
      Toast.show({
        duration: 1000,
        content: LocaleUtil.locale('检测到您的机型不支持小程序拍照，已强制为您切换成浏览器拍照'),
        onVisibleChange: (visible) => {
          if (visible === false) {
            setForceType('browser')
          }
        }
      })
      return false
    }
    return true
  }

  // 公共属性对象，所有平台组件共享
  const commonProps = {
    // Value & Display Value
    list,
    count,
    type,
    ellipsis,
    sourceType,
    sizeType,
    isSaveToAlbum,
    maxWidth,
    uploadDir,
    chooseExtraParams,
    // Status
    async,
    reUpload,
    allowClear,
    allowChoose,
    previewAllowChoose,
    previewAllowClear,
    // Style
    className,
    uploadPosition,
    // Element
    upload,
    uploading,
    previewPortal,
    formatUploadedItem,
    getWatermark,
    getUploadUrl,
    getUploadPayload,
    // Events
    onBeforeChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview,
    onPreviewOpen,
    onPreviewClose
  }

  // 优先调用客户端能力
  if (Bridge.platform === 'lyrixi') {
    return <Lyrixi ref={ref} {...commonProps} />
  }

  // file框模式上传 或 强制使用Browser模式（间隔检测）
  if (forceType === 'browser' || Device.device === 'pc') {
    return (
      <div className="image-container">
        {/* 小程序拍照兼容方式切换, 小程序经常呼不起来 */}
        {Bridge.platform === 'wechatMiniprogram' ? (
          <CompatibleToggle
            compatible={compatible}
            forceType={forceType || 'browser'}
            onForceTypeChange={setForceType}
          />
        ) : null}
        <Browser ref={ref} {...commonProps} />
      </div>
    )
  }

  // 钉钉上传
  if (Bridge.platform === 'dingtalk') {
    // 鸿蒙钉钉有bug，上传方法不会带token，导致无法上传
    if (Device?.os === 'harmony') {
      return <Browser ref={ref} {...commonProps} />
    }
    return <Dingtalk ref={ref} {...commonProps} />
  }

  // 最新的小程序
  if (Bridge.platform === 'wechatMiniprogram' && !async) {
    return (
      <div className="image-container">
        <CompatibleToggle
          compatible={compatible}
          forceType={forceType || 'wechatMiniprogram'}
          onForceTypeChange={setForceType}
        />
        <WechatMiniprogram ref={ref} {...commonProps} onNavigateTo={handleNavigateTo} />
      </div>
    )
  }

  if (
    Bridge.platform === 'wechat' ||
    Bridge.platform === 'wecom' ||
    Bridge.platform === 'wechatMiniprogram' ||
    Bridge.platform === 'wecomMiniprogram'
  ) {
    return <Wechat ref={ref} {...commonProps} />
  }
  return <Browser ref={ref} {...commonProps} />
}

export default forwardRef(Main)
export { Mark, validateList, uploadList }
