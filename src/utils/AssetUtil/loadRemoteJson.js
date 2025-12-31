import axios from 'axios'

/**
 * 动态加载远程 JSON 文件
 * @param {String} url - 远程 JSON 文件的 URL
 * @param {Object} options - 配置选项
 * @param {Object} options.config - axios 配置（可选）
 * @param {Function} options.onError - 错误回调（可选）
 * @param {Function} options.onSuccess - 成功回调（可选）
 * @returns {Promise<{status: 'success|error', data: any, message: string}>}
 */
async function loadRemoteJson(url, { config, onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    // 参数校验
    if (!url || typeof url !== 'string') {
      let error = {
        status: 'error',
        data: null,
        message: 'URL is required and must be a string'
      }
      resolve(error)
      onError?.(error)
      return
    }

    // 使用 axios 请求远程 JSON
    axios
      .get(url, {
        ...config,
        // 确保返回 JSON 格式
        responseType: 'json'
      })
      .then((response) => {
        // 获取响应数据
        let data = response.data

        // 如果数据是字符串，尝试解析为 JSON
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data)
          } catch (parseError) {
            let error = {
              status: 'error',
              data: null,
              message: `Failed to parse JSON: ${parseError.message}`
            }
            resolve(error)
            onError?.(error)
            return
          }
        }

        let result = {
          status: 'success',
          data: data,
          message: 'Remote JSON file loaded successfully'
        }
        resolve(result)
        onSuccess?.(result)
      })
      .catch((error) => {
        // 处理各种错误情况
        let errorMessage = 'Failed to load JSON'

        if (error.response) {
          // 服务器响应了错误状态码
          errorMessage = `Failed to load JSON: ${error.response.status} ${error.response.statusText}`
        } else if (error.request) {
          // 请求已发送但没有收到响应
          errorMessage = 'Failed to load JSON: No response from server'
        } else {
          // 请求配置出错
          errorMessage = `Failed to load JSON: ${error.message || 'Network error'}`
        }

        let errorResult = {
          status: 'error',
          data: null,
          message: errorMessage
        }
        resolve(errorResult)
        onError?.(errorResult)
      })
  })
}

export default loadRemoteJson
