import Device from 'library/v2/utils/Device'

// 微信ios平台不支持localId显示图片，需要转成base64后显示
function getPreview(localId) {
  return new Promise((resove) => {
    // 安卓可直接显示，无需要转换
    if (Device.os !== 'ios') {
      resove(localId)
      return
    }

    // localId转base64
    // eslint-disable-next-line
    top.wx.getLocalImgData({
      localId: localId,
      sizeType: 'compressed',
      isScheme: 1,
      success: function (res) {
        resove(res.localData)
      },
      fail: function () {
        resove(localId)
      }
    })
  })
}

export default getPreview
