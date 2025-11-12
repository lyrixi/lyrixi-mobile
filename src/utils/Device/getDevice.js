/**
 * 获取设备类型
 * @param {String} ua - userAgent 字符串（小写）
 * @returns {String} 设备类型：'mobile' | 'pc'
 */
function getDevice(ua) {
  if (ua.match(/applewebkit.*mobile.*/)) {
    return 'mobile'
  }
  return 'pc'
}

export default getDevice

