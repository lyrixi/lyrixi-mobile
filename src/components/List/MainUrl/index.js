// 第三方库导入
import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
import { Storage } from 'lyrixi-mobile'

// 项目内部模块导入
import Main from './../Main'
import queryData from './api/queryData'
import mainLoadingRender from './mainLoadingRender'

// 简便的列表组件, 只需要传入url和params即可
const MainUrl = forwardRef(
  (
    {
      // Value & Display Value
      url,
      params, // 查询参数: { rows: 20(必传) }
      formatItem,
      cacheName,

      // Style
      className,
      style,

      // Events
      onLoad
    },
    ref
  ) => {
    const mainRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        ...mainRef.current,
        // 更新缓存, 支持存额外数据, 建议存查询参数updateCache({ queryParams: {} })
        updateCache: (extraCache = {}) => {
          if (!cacheName) return
          let lastResult = mainRef.current?.getResult()
          // 报错不存数据
          if (lastResult?.status === 'error') return
          // 存滚动条位置
          let scrollTop = mainRef.current?.rootDOM?.scrollTop
          lastResult.scrollTop = scrollTop
          // 存查询参数
          for (let key in extraCache) {
            if (Object.prototype.hasOwnProperty.call(extraCache, key)) {
              lastResult[key] = extraCache[key]
            }
          }

          // 设置缓存
          Storage.setCache(cacheName, lastResult, { persist: 'session' })
        },
        clearCache: () => {
          return Storage.clearCache(cacheName)
        },
        getCache: () => {
          return Storage.getCache(cacheName)
        }
      }
    })

    // 参数发生变化需要刷新列表
    useEffect(() => {
      mainRef.current?.reload()
      // eslint-disable-next-line
    }, [url, JSON.stringify(params)])

    return (
      <Main
        ref={mainRef}
        // Status
        initialLoad={false}
        // Style
        style={style}
        className={className}
        // Data
        loadData={async ({ previousResult, action }) => {
          // 初始化时, 有缓存时优先读取缓存
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName)
            if (cacheResult) {
              return cacheResult
            }
          }

          // 在线查询数据
          const result = await queryData(url, params, {
            previousResult,
            action,
            onLoad
          })
          let newList = null
          if (result.status !== 'error') {
            newList =
              action === 'bottomRefresh' ? previousResult.list.concat(result.list) : result.list
          }

          return {
            status: result.status,
            message: result.message,
            list: newList
          }
        }}
        // Elements
        loadingRender={mainLoadingRender}
        formatItem={formatItem}
        // Events
        onLoad={({ action }) => {
          // 初始化时, 有缓存时优先读取缓存, 并滚动到缓存位置
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName)
            mainRef.current.rootDOM.scrollTop = cacheResult.scrollTop
          }
        }}
      />
    )
  }
)

export default MainUrl
