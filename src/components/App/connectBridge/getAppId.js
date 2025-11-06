// 内库使用-start
import Device from './../../../utils/Device'
import Storage from './../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { Device, Storage } from 'lyrixi-mobile'
测试使用-end */

function getAppId() {
  let urlAppId = Device.getUrlParameter('appId')
  let appId = urlAppId || Storage.getLocalStorage('appId') || ''
  if (appId) {
    Storage.setLocalStorage('appId', appId)
  }
  return appId
}

export default getAppId
