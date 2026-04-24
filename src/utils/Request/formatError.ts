type AxiosLikeError = { config?: unknown; response?: Record<string, unknown>; [key: string]: unknown }

function formatError(response: AxiosLikeError): AxiosLikeError {
  let result: AxiosLikeError = response
  if (response.config && response.response) {
    result = response.response
  }
  return result
}

export default formatError
