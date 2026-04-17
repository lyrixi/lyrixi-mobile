import axios from 'axios'
import getCache from './getCache'
import setCache from './setCache'
import formatResponse from './formatResponse'
import formatError from './formatError'
import serializeParams from './serializeParams'

async function post(url, params, config) {
  // Priority reading of cache
  if (config?.cacheKey) {
    let cacheResponse = await getCache(url, config?.cacheKey)
    if (cacheResponse !== undefined) return cacheResponse
  }

  const contentType = config?.headers?.['content-type'] || config?.headers?.['Content-Type']

  let newParams = params
  if (
    contentType?.indexOf('x-www-form-urlencoded') !== -1 &&
    toString.call(params) !== '[object Object]'
  ) {
    newParams = serializeParams(params)
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, newParams, config)
      .then((response) => {
        let newResponse = formatResponse(response)
        config?.cacheKey && setCache(url, config?.cacheKey, newResponse)
        resolve(newResponse)
      })
      .catch((error) => {
        reject(formatError(error))
      })
  })
}

export default post
