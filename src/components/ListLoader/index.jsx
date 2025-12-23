// 第三方库导入
import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'

// 内库使用-start
import Storage from './../../utils/Storage'
import List from './../List'
// 内库使用-end

/* 测试使用-start
import { Storage, List } from 'lyrixi-mobile'
测试使用-end */

// 项目内部模块导入

import queryData from './api/queryData'
import mainLoadingRender from './mainLoadingRender'

// 简便的列表组件, 只需要传入url和params即可
const ListLoader = forwardRef(
  (
    {
      cacheName,
      // Value & Display Value
      url,
      headers,
      params, // 查询参数: { rows: 20(必传) }
      formatResult,
      formatViewList,
      formatViewItem,

      // Status
      errorRetry,
      emptyRetry,
      // initialLoad,
      multiple,
      allowClear,
      checkable,
      disableTopRefresh,
      disableBottomRefresh,
      virtual,

      // Style
      className,
      style,

      // Elements
      itemRender,
      itemLayout,
      loadingRender,
      prependRender,
      appendRender,

      // Events
      onChange,
      onScroll,
      onScrollEnd,
      onLoad
    },
    ref
  ) => {
    const isFirstLoad = useRef(true)
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
          let scrollTop = mainRef.current?.element?.scrollTop
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
      if (isFirstLoad.current) {
        isFirstLoad.current = false
        mainRef.current?.reload('load')
        return
      }
      mainRef.current?.reload()
      // eslint-disable-next-line
    }, [url, JSON.stringify(params)])

    return (
      <List.Main
        ref={mainRef}
        // Value & Display Value
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        loadData={async ({ previousResult, action }) => {
          // 初始化时, 有缓存时优先读取缓存
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName)
            if (cacheResult) {
              return cacheResult
            }
          }

          // 在线查询数据
          const result = await queryData(url, headers, params, {
            previousResult,
            action,
            formatResult
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
        // Status
        initialLoad={false}
        errorRetry={errorRetry}
        emptyRetry={emptyRetry}
        multiple={multiple}
        allowClear={allowClear}
        checkable={checkable}
        disableTopRefresh={disableTopRefresh}
        disableBottomRefresh={disableBottomRefresh}
        virtual={virtual}
        // Style
        style={style}
        className={className}
        // Elements
        itemRender={itemRender}
        itemLayout={itemLayout}
        loadingRender={loadingRender || mainLoadingRender}
        prependRender={prependRender}
        appendRender={appendRender}
        // Events
        onChange={onChange}
        onScroll={onScroll}
        onScrollEnd={onScrollEnd}
        onLoad={({ result, action }) => {
          // 初始化时, 有缓存时优先读取缓存, 并滚动到缓存位置
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName)
            console.log(mainRef)
            mainRef.current.element.scrollTop = cacheResult?.scrollTop || 0
          }

          onLoad && onLoad({ result: result, action: action })
        }}
      />
    )
  }
)

export default ListLoader
