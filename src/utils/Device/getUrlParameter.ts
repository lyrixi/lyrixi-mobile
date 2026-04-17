/**
 * 获取地址栏参数
 * @param {String} argName - 参数名，如果不传则返回所有参数对象或查询字符串
 * @param {String} argSearch - 自定义查询字符串，如果不传则使用 window.location.href
 * @returns {String|Object} 参数值、所有参数对象或查询字符串
 */
function getUrlParameter(argName, argSearch) {
  let url = window.location.href
  if (argSearch) url = argSearch
  let params = {}
  // 如果url中包含?说明有参数
  if (url?.indexOf?.('?') !== -1) {
    if (!argName) return '?' + url.split('?')[1]
    // 获取所有参数options: 如?a=1&b=2转为['a=1','b=2']
    let options = url.split('?')[1]?.split('&')
    if (options?.length) {
      for (let i = 0; i < options.length; i++) {
        // 获取单项option: 如'a=1'转为['a', '1']
        let option = options[i].split('=')
        if (option.length === 2) {
          if (argName) {
            if (argName === option[0]) return option[1]
          } else {
            params[option[0]] = option[1]
          }
        }
      }
    }
  }
  if (Object.keys(params).length) return params
  return ''
}

export default getUrlParameter

