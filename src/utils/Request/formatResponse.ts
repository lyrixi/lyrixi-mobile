type AxiosLikeResponse = { config?: unknown; data?: unknown; [key: string]: unknown }

function formatResponse(response: AxiosLikeResponse): unknown {
  let result: unknown = response
  if (response.config && response.data !== undefined) {
    result = response.data
  }
  if (typeof result === 'string') {
    try {
      return JSON.parse(result)
    } catch (error) {
      console.log('result转换JSON失败' + error)
      return result
    }
  }
  return result
}

export default formatResponse
