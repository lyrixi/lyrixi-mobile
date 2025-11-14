// 内库使用-start
import Device from './../../../utils/Device'
// 内库使用-end

/* 测试使用-start
import { Device } from 'lyrixi-mobile'
测试使用-end */

// 订货和外勤原生不支持localId显示图片，需要转成base64后显示
function getThumbnail(localId) {
  // 安卓可直接显示，无需要转换
  if (Device.os !== 'ios') {
    return localId
  }

  // localId转base64
  // eslint-disable-next-line
  top.wx.getLocalImgData({
    localId: localId,
    sizeType: 'compressed',
    isScheme: 1,
    success: function (res) {
      return res.localData
    },
    fail: function () {
      return ''
    }
  })
}

export default getThumbnail
