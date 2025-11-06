// 内库使用-start
import Device from './../../../utils/Device'
import Storage from './../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { Device, Storage } from 'lyrixi-mobile'
测试使用-end */

function getLowAppId() {
  let urlAppId = Device.getUrlParameter('lowerappId') || ''
  let appId = urlAppId || Storage.getLocalStorage('lowerappId') || ''
  // 兼容下游直接跳转 从url上携带参数   读取后set进cookie
  if (appId) {
    // 储存在session中  退出时 清除信息
    Storage.setLocalStorage('lowerappId', appId)
  }
  return appId
}

export default getLowAppId
