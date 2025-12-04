import React, { forwardRef, useEffect, useRef, useState } from 'react'

// 内部组件导出
import uploadList from './utils/uploadList'

// 内部组件
import Interval from './utils/Interval'
import CompatibleToggle from './CompatibleToggle'
import WechatMiniProgram from './WechatMiniProgram1'
import Browser from './Browser'
import Wechat from './Wechat'
import Dingtalk from './Dingtalk'

// 内库使用-start
import Device from './../../utils/Device'
import Toast from './../Toast'
import LocaleUtil from './../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Device, Toast } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function MediaUploader(
  {
    // Value & Display Value
    type,
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|error|success', children: node}]
    maxUploadCount,
    maxChooseCount,
    platform, // 强制上传平台: browser | wechatMiniProgram | wechat | wecom | wecomMiniProgram | dingtalk
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    maxWidth,
    // 小程序专用
    wechatMiniProgramNavigate, // 小程序页面地址

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,
    previewAllowChoose,
    previewAllowClear,
    compatible = true, // 兼容模式, 允许模式切换（小程序/浏览器）
    timeout,

    // Style
    style,
    className,
    uploadPosition,
    previewSafeArea,
    previewNavBarStyle,
    previewNavBarClassName,
    previewModalStyle,
    previewModalClassName,
    previewMaskStyle,
    previewMaskClassName,

    // Element
    uploadRender, // 上传按钮覆盖的dom
    uploadingRender,
    itemRender,
    previewPortal,
    previewCancelPosition,
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
    formatPayload,
    formatResult,

    // Events
    onBeforeChoose,
    onUpload,
    onChange,
    onPreview
  },
  ref
) {
  // 鸿蒙小程序微信8.0后报错: chooselmage: permission denied， 解决方法: 此版本鸿蒙微信有bug，强制同步上传(同步上传会用小程序和浏览器上传)
  if (Device?.os === 'harmony' && platform === 'wechatMiniProgram') {
    // eslint-disable-next-line
    async = false
  }

  // 间隔追踪器状态
  const [compatiblePlatform, setCompatiblePlatform] = useState(platform)

  // 5秒间隔自动切成浏览器定位
  const intervalRef = useRef(new Interval(5000))

  useEffect(() => {
    if (['browser', 'wechatMiniProgram'].includes(platform)) {
      setCompatiblePlatform(platform)
    }
    // eslint-disable-next-line
  }, [platform])

  // 小程序跳转onNavigateTo两次间隔小于5秒，则使用浏览器拍照
  const handleNavigateTo = () => {
    let isTimeout = intervalRef.current.isTimeout()
    if (isTimeout === false) {
      Toast.show({
        duration: 1000,
        content: LocaleUtil.locale('检测到您的机型不支持小程序拍照，已强制为您切换成浏览器拍照'),
        onVisibleChange: (visible) => {
          if (visible === false) {
            setCompatiblePlatform('browser')
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
    type,
    list,
    maxUploadCount,
    maxChooseCount,
    ellipsis,
    sourceType,
    sizeType,
    isSaveToAlbum,
    maxWidth,

    // Status
    async,
    reUpload,
    allowClear,
    allowChoose,
    previewAllowChoose,
    previewAllowClear,
    // Style
    style,
    className,
    uploadPosition,
    previewSafeArea,
    previewNavBarStyle,
    previewNavBarClassName,
    previewModalStyle,
    previewModalClassName,
    previewMaskStyle,
    previewMaskClassName,
    // Element
    uploadRender,
    uploadingRender,
    itemRender,
    previewPortal,
    previewCancelPosition,
    formatUploadedItem,
    getWatermark,
    getUploadUrl,
    formatPayload,
    formatResult,
    // Events
    onBeforeChoose,
    onUpload,
    onChange,
    onPreview
  }

  // file框模式上传 或 强制使用Browser模式（间隔检测）
  if (compatiblePlatform === 'browser' || Device.device === 'pc') {
    return (
      <div className="lyrixi-media-compatible">
        {/* 小程序拍照兼容方式切换, 小程序经常呼不起来 */}
        {platform === 'wechatMiniProgram' ? (
          <CompatibleToggle
            compatible={compatible}
            compatiblePlatform={compatiblePlatform || 'browser'}
            onCompatiblePlatformChange={setCompatiblePlatform}
          />
        ) : null}
        <Browser ref={ref} {...commonProps} />
      </div>
    )
  }

  // 钉钉上传
  if (platform === 'dingtalk') {
    // 鸿蒙钉钉有bug，上传方法不会带token，导致无法上传
    if (Device?.os === 'harmony') {
      return <Browser ref={ref} {...commonProps} />
    }
    return <Dingtalk ref={ref} {...commonProps} />
  }

  // 最新的小程序
  if (platform === 'wechatMiniProgram' && !async) {
    return (
      <div className="lyrixi-media-compatible">
        <CompatibleToggle
          compatible={compatible}
          compatiblePlatform={compatiblePlatform || 'wechatMiniProgram'}
          onCompatiblePlatformChange={setCompatiblePlatform}
        />
        <WechatMiniProgram
          ref={ref}
          wechatMiniProgramNavigate={wechatMiniProgramNavigate}
          {...commonProps}
          onNavigateTo={handleNavigateTo}
        />
      </div>
    )
  }

  if (
    platform === 'wechat' ||
    platform === 'wecom' ||
    platform === 'wechatMiniProgram' ||
    platform === 'wecomMiniProgram'
  ) {
    return <Wechat ref={ref} {...commonProps} />
  }
  return <Browser ref={ref} {...commonProps} />
}

MediaUploader.uploadList = uploadList

export default forwardRef(MediaUploader)
