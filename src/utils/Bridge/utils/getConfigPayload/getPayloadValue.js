// 内库使用-start
import Device from './../../../../utils/Device'
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { Device, Storage } from 'lyrixi-mobile'
测试使用-end */

function getPayloadValue(payloadKey) {
  let urlPayloadValue = Device.getUrlParameter(payloadKey)
  let payloadValue =
    urlPayloadValue ||
    Storage.getLocalStorage(payloadKey) ||
    Storage.getSessionStorage(payloadKey) ||
    ''
  if (payloadValue) {
    Storage.setLocalStorage(payloadKey, payloadValue)
  }
  return payloadValue
}

export default getPayloadValue
