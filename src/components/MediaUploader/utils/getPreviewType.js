// 内库使用-start
import Device from './../../../utils/Device'
// 内库使用-end

/* 测试使用-start
import { Device } from 'lyrixi-mobile'
测试使用-end */

function getPreviewType(mediaType) {
  // Not video
  if (
    mediaType !== 'video' &&
    Device.device === 'mobile' &&
    (Device.platform === 'wechat' ||
      Device.platform === 'wecom' ||
      Device.platform === 'alipay' ||
      Device.platform === 'dingtalk' ||
      Device.platform === 'lark' ||
      Device.platform === 'wechatMiniProgram' ||
      Device.platform === 'wecomMiniProgram' ||
      Device.platform === 'alipayMiniProgram')
  ) {
    return 'nativeMedia'
  }
  // Video
  if (mediaType === 'video') {
    return 'nativeFile'
  }

  // Video or image
  return 'browser'
}

export default getPreviewType
