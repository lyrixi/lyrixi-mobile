import axios from 'axios'
import getCache from './getCache'
import setCache from './setCache'
import formatResponse from './formatResponse'
import formatError from './formatError'

async function get(url, params, config) {
  // Priority reading of cache
  if (config?.cacheKey) {
    let cacheResponse = await getCache(url, config?.cacheKey)
    if (cacheResponse !== undefined) return cacheResponse
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        ...config
      })
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

export default get
