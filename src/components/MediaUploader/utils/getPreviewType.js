// 内库使用-start
import Device from './../../../utils/Device'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Device, Bridge } from 'lyrixi-mobile'
测试使用-end */

function getPreviewType(type) {
  // Not video
  if (
    type !== 'video' &&
    Device.device === 'mobile' &&
    (Bridge.platform === 'lyrixi' ||
      Bridge.platform === 'wechat' ||
      Bridge.platform === 'wecom' ||
      Bridge.platform === 'alipay' ||
      Bridge.platform === 'dingtalk' ||
      Bridge.platform === 'lark' ||
      Bridge.platform === 'wechatMiniprogram' ||
      Bridge.platform === 'wecomMiniprogram' ||
      Bridge.platform === 'alipayMiniprogram')
  ) {
    return 'nativeImage'
  }
  // Video
  if (Bridge.platform === 'lyrixi' && type === 'video') {
    return 'nativeFile'
  }

  // Video or image
  return 'browser'
}

export default getPreviewType
