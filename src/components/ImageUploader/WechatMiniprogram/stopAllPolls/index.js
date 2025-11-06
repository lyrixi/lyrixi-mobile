// Get photos by polling interval
function stopAllPolls(currentId) {
  if (!window.wechatMiniprogramPolls) window.wechatMiniprogramPolls = {}
  window.wechatMiniprogramPolls[currentId] = true

  for (let id in window.wechatMiniprogramPolls) {
    if (window.wechatMiniprogramPolls.hasOwnProperty(id)) {
      window.clearTimeout(window[id])
    }
  }
}

export default stopAllPolls
