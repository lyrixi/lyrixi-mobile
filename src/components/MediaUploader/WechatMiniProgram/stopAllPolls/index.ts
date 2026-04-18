// Get photos by polling interval
function stopAllPolls(currentId) {
  if (!window.wechatMiniProgramPolls) window.wechatMiniProgramPolls = {}
  window.wechatMiniProgramPolls[currentId] = true

  for (let id in window.wechatMiniProgramPolls) {
    if (window.wechatMiniProgramPolls.hasOwnProperty(id)) {
      window.clearTimeout(window[id])
    }
  }
}

export default stopAllPolls
