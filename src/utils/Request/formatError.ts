import type { RequestAxiosLikeError } from './Request.format.types'

function formatError(response: RequestAxiosLikeError): RequestAxiosLikeError {
  let result: RequestAxiosLikeError = response
  if (response.config && response.response) {
    result = response.response
  }
  return result
}

export default formatError
