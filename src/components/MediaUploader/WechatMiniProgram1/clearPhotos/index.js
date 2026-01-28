// 内库使用-start
import Toast from './../../../Toast'
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Toast, Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// Save photos at delete
function clearPhotos(id, { url }) {
  return new Promise((resolve) => {
    console.log('清除照片:', url, id)
    Request.post(url, {
      fileCheckKey: id,
      imageParamList: []
    })
      .then((result) => {
        console.log('照片清除成功:', result)
        if (result.code === '1') {
          resolve(true)
        } else {
          Toast.show({ content: result.message })
          resolve(false)
        }
      })
      .catch((error) => {
        Toast.show({
          content: LocaleUtil.locale('照片删除异常', 'lyrixi_c6def5fa7c7e41ced1921c9e09ce97bb')
        })
        resolve(false)
      })
  })
}

export default clearPhotos
