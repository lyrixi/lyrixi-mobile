// 第三方库导入
import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'

import type { ListAsyncRef, LoadResult } from './../../ListAsync/types'
import type { RawItem } from './../../List/List/types'
import type { ListPaginationProps, ListPaginationRef } from './types'

// 内库使用-start
import Storage from './../../../utils/Storage'
import ListAsync from './../../ListAsync'
// 内库使用-end

/* 测试使用-start
import { Storage, ListAsync } from 'lyrixi-mobile'
测试使用-end */

import queryData from './queryData'

// 简便的列表组件, 只需要传入url和formatPayload即可
const ListPagination = forwardRef<ListPaginationRef, ListPaginationProps>(
  (
    {
      cacheName,
      // Value & Display Value
      value,
      url,
      headers,
      payload,
      pagination = { rows: 20 },
      formatPayload,
      formatResult,
      formatViewList,
      formatViewItem,

      // Status
      errorRetry,
      emptyRetry,
      multiple,
      allowClear,
      checkable,
      disableTopRefresh,
      disableBottomRefresh,
      virtual,

      // Style
      style,
      className,
      itemStyle,
      itemClassName,
      itemLayout,
      checkboxVariant,
      checkboxPosition,
      loadingModalStyle,
      loadingModalClassName,
      loadingMaskStyle,
      loadingMaskClassName,
      loadingPortal,

      // Elements
      itemRender,
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

    const mainRef = useRef<ListAsyncRef | null>(null)

    const pageRef = useRef(1)


    useEffect(() => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false
        mainRef.current?.reload('load')
        return
      }
      mainRef.current?.reload()
      // eslint-disable-next-line
    }, [url, JSON.stringify(payload)])


    // Expose
    useImperativeHandle(ref, () => {
      return {
        ...(mainRef.current as ListAsyncRef),
        updateCache: (extraCache: Record<string, unknown> = {}) => {
          if (!cacheName) return
          let lastResult = mainRef.current?.getResult() as (LoadResult & Record<string, unknown>) | null
          if (!lastResult) return
          if (lastResult?.status === 'error') return
          let scrollTop = mainRef.current?.element?.scrollTop
          lastResult.scrollTop = scrollTop
          for (let key in extraCache) {
            lastResult[key] = extraCache[key]
          }
          Storage.setCache(cacheName, lastResult, { persist: 'session' })
        },
        clearCache: () => {
          return Storage.clearCache(cacheName!)
        },
        getCache: () => {
          return Storage.getCache(cacheName!)
        }
      }
    })


    return (
      <ListAsync
        ref={mainRef}
        value={value}
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        loadData={async ({ previousResult, action }) => {
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName)
            if (cacheResult) {
              return cacheResult as LoadResult
            }
          }

          const result = await queryData(url || '', headers, payload, {
            rows: typeof pagination?.rows === 'number' ? pagination?.rows : undefined,
            pageRef,
            previousResult,
            action,
            formatPayload,
            formatResult
          })

          let newList: RawItem[] | null = null
          if (result.status !== 'error') {
            const prevList = (previousResult?.list || []) as RawItem[]
            newList =
              action === 'bottomRefresh'
                ? prevList.concat((result.list || []) as RawItem[])
                : (result.list || []) as RawItem[]
          }

          return {
            ...result,
            list: newList || undefined
          } as LoadResult
        }}
        initialLoad={false}
        errorRetry={errorRetry}
        emptyRetry={emptyRetry}
        multiple={multiple}
        allowClear={allowClear}
        checkable={checkable}
        disableTopRefresh={disableTopRefresh}
        disableBottomRefresh={disableBottomRefresh}
        virtual={virtual}
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        itemLayout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        style={style}
        className={className}
        loadingModalStyle={loadingModalStyle}
        loadingModalClassName={loadingModalClassName}
        loadingMaskStyle={loadingMaskStyle}
        loadingMaskClassName={loadingMaskClassName}
        loadingPortal={loadingPortal}
        itemRender={itemRender}
        loadingRender={loadingRender}
        prependRender={prependRender}
        appendRender={appendRender}
        onChange={onChange}
        onScroll={onScroll}
        onScrollEnd={onScrollEnd}
        onLoad={({ result, action }) => {
          if (action === 'load' && cacheName) {
            let cacheResult = Storage.getCache(cacheName) as { scrollTop?: number } | null
            if (mainRef.current?.element) {
              mainRef.current.element.scrollTop = cacheResult?.scrollTop || 0
            }
          }
          onLoad?.({ result, action })
        }}
      />
    )
  }
)

export default ListPagination

export type { ListPaginationProps, ListPaginationRef } from './types'
