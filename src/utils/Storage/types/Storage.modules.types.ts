import StorageCore from '../Storage'
import clearCache from '../useCacheState/clearCache'
import getCache from '../useCacheState/getCache'
import setCache from '../useCacheState/setCache'
import useCacheState from '../useCacheState'

export type StorageComponents = typeof StorageCore & {
  useCacheState: typeof useCacheState
  clearCache: typeof clearCache
  setCache: typeof setCache
  getCache: typeof getCache
}
