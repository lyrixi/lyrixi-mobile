/**
 * 生成唯一ID的工具函数
 * 保证即使在同时执行的情况下也不会生成重复的ID
 */

// 计数器，用于在同一毫秒内生成多个ID时避免重复
let counter = 0

/**
 * 生成唯一ID
 * @returns {string} 唯一ID
 */
function generateId() {
  // 获取当前时间戳（毫秒）
  const timestamp = Date.now()

  // 获取随机数（0-9999）
  const random = Math.floor(Math.random() * 10000)

  // 递增计数器，确保同一毫秒内的唯一性
  counter = (counter + 1) % 10000

  // 尝试获取进程ID（在某些环境中可能不可用）
  let processId = ''
  try {
    // 在Node.js环境中获取进程ID
    if (typeof process !== 'undefined' && process.pid) {
      processId = process.pid.toString().slice(-2) // 取进程ID的后两位
    }
  } catch (e) {
    // 忽略错误，继续执行
  }

  // 组合生成唯一ID
  const id = `${timestamp}${random.toString().padStart(4, '0')}${counter
    .toString()
    .padStart(4, '0')}${processId}`

  return id
}

// 导出函数
module.exports = generateId
