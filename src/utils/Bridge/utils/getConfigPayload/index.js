import getPayloadValue from './getPayloadValue'

function getPayload() {
  let payload = {
    appId: getPayloadValue('appId'),
    url: window.location.href.split('#')[0]
  }
  // 获取下游appId
  let lowerAppId = getPayloadValue('lowerAppId')
  if (lowerAppId) {
    payload.lowerAppId = lowerAppId
  }
  // 获取suiteType
  let suiteType = getPayloadValue('suiteType')
  if (suiteType) {
    payload.suiteType = suiteType
  }
  return payload
}

export default getPayload
