// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 上传localId
function uploadLocalId(localId) {
  return new Promise((resolve) => {
    Bridge.uploadImage({
      localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
      onSuccess: function (res) {
        resolve(res) // 返回图片的服务器端ID
        console.log(`微信上传照片成功${localId}:` + JSON.stringify(res))
      },
      onError: function (err) {
        resolve(err.errMsg)
        console.error(`微信上传照片失败${localId}:` + JSON.stringify(err))
      }
    })
  })
}

export default uploadLocalId
