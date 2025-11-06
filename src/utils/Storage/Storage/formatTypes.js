import localforage from 'localforage'

// 字符串到常量的映射
const DRIVER_MAPPING = {
  indexedDB: localforage.INDEXEDDB,
  localStorage: localforage.LOCALSTORAGE,
  webSQL: localforage.WEBSQL
}

/**
 * 格式化驱动类型，将字符串转换为 localforage 常量
 * @param {Array} types - 驱动类型数组，可以是字符串或常量
 * @returns {Array} 转换后的驱动常量数组
 */
const formatTypes = (types) => {
  if (!Array.isArray(types) || types.length === 0) {
    // 如果没有提供类型或数组为空，返回所有三个常量
    return [DRIVER_MAPPING.indexedDB, DRIVER_MAPPING.localStorage, DRIVER_MAPPING.webSQL]
  }

  const driver = []
  for (let type of types) {
    if (typeof type === 'string' && DRIVER_MAPPING[type]) {
      driver.push(DRIVER_MAPPING[type])
    }
  }

  if (driver.length === 0) {
    return [DRIVER_MAPPING.indexedDB, DRIVER_MAPPING.localStorage, DRIVER_MAPPING.webSQL]
  }

  return driver
}

export default formatTypes
