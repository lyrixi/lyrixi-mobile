// 内库使用-start
import Device from './../../../utils/Device'
import Storage from './../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { Device, Storage } from 'lyrixi-mobile'
测试使用-end */

function getSuitType() {
  let urlSuitType = Device.getUrlParameter('suitType')
  let suitType = urlSuitType || Storage.getLocalStorage('suitType') || ''
  if (suitType) {
    Storage.setLocalStorage('suitType', suitType)
  }
  return suitType
}

export default getSuitType
