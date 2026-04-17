import StorageCore from './Storage'
import useCacheState from './useCacheState'
import clearCache from './useCacheState/clearCache'
import setCache from './useCacheState/setCache'
import getCache from './useCacheState/getCache'

type StorageWithCache = typeof StorageCore & {
  useCacheState: typeof useCacheState
  clearCache: typeof clearCache
  setCache: typeof setCache
  getCache: typeof getCache
}

const Storage = StorageCore as StorageWithCache
Storage.useCacheState = useCacheState
Storage.clearCache = clearCache
Storage.setCache = setCache
Storage.getCache = getCache

export default Storage
