// 缓存key生成方法
function getLocationCacheKey(type) {
  return `__lyrixi_Location_Cache__${type || ''}`
}

export default getLocationCacheKey
