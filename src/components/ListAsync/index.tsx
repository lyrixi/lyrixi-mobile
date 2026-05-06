import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react'
import scrollToTop from './utils/scrollToTop'
import Loading from './components/Loading'
import EntityList, { MainRef as EntityListRef, MainProps as EntityListProps } from './List'
import VirtualList, { VirtualListRef, VirtualListProps, VirtualOptions } from './VirtualList'
import RetryButton from './components/RetryButton'


import type { ListAsyncProps, ListAsyncRef, LoadAction, LoadResult } from './types'
import type { RawItem, ViewItem } from './../List/List/types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Result from './../Result'
import List from './../List'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Result, List } from 'lyrixi-mobile'
测试使用-end */

const Main = forwardRef<ListAsyncRef, ListAsyncProps>(
  (
    {
      value,
      loadData,
      formatViewList,
      formatViewItem,
      initialLoad = true,
      errorRetry = true,
      emptyRetry,
      multiple,
      allowClear,
      checkable,
      disableTopRefresh = false,
      disableBottomRefresh = false,
      virtual,
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
      itemRender,
      loadingRender,
      prependRender,
      appendRender,
      onChange,
      onScroll,
      onScrollEnd,
      onLoad
    },
    ref
  ) => {
    const mainRef = useRef<EntityListRef | VirtualListRef | null>(null)


    const [result, setResult] = useState<LoadResult | null>(null)

    const [resultStatus, setResultStatus] = useState<string>('')

    const [loadAction, setLoadAction] = useState<LoadAction>('')


    useEffect(() => {
      if (!result) return
      onLoad?.({ result, action: loadAction })
      setLoadAction('')
      // eslint-disable-next-line
    }, [result])


    useEffect(() => {
      if (!initialLoad) return
      init()
      // eslint-disable-next-line
    }, [])


    // Expose
    useImperativeHandle(ref, () => {
      const vRef = mainRef.current as VirtualListRef | null
      return {
        element: mainRef.current?.element ?? null,
        getElement: () => mainRef.current?.element ?? null,
        getAnchors: vRef?.getAnchors ? () => vRef.getAnchors() : undefined,
        scrollToAnchor: vRef?.scrollToAnchor ? (anchor: string) => vRef.scrollToAnchor(anchor) : undefined,
        reload: (action?: string) => {
          if (action === 'load') {
            init()
          } else {
            loadPage(action || 'reload')
          }
        },
        getResult: () => result
      } as ListAsyncRef
    })


    function init() {
      loadPage('load')
    }


    async function loadPage(action: string) {
      if (typeof loadData !== 'function') return

      if (action === 'bottomRefresh') {
        if (result?.status === 'error') {
          return true
        }
        if (result?.status === 'noMore') {
          return true
        }
        if (result?.status === 'moreError') {
          setResultStatus('loading')
        }
      }

      if (['load', 'reload', 'topRefresh', 'retry'].includes(action)) {
        scrollToTop(mainRef.current?.element ?? null)
      }

      setLoadAction(action as LoadAction)
      let newResult = await loadData({ previousResult: result, action: action })

      if (!['empty', 'error', 'noMore', 'loading'].includes(newResult?.status)) {
        console.error(
          `loadData return data must contains status: ['empty','error','noMore','loading']`,
          newResult
        )
        return false
      }
      setResult(newResult)
      setResultStatus(newResult?.status)
      return true
    }


    const useVirtual = !!(virtual?.getItemHeight)


    const sharedProps = {
      value,
      list: result?.list,
      formatViewList:
        typeof formatViewList === 'function'
          ? (rawList: ViewItem[]) => formatViewList(rawList, { result })
          : undefined,
      formatViewItem:
        typeof formatViewItem === 'function'
          ? (rawItem: ViewItem, options: { index: number }) =>
              formatViewItem(rawItem, { result, index: options.index })
          : undefined,
      multiple,
      allowClear,
      checkable,
      className: DOMUtil.classNames('lyrixi-list-main', className),
      style,
      itemStyle,
      itemClassName,
      itemLayout,
      checkboxVariant,
      checkboxPosition,
      itemRender,
      prependRender,
      appendRender,
      onChange,
      onScroll,
      onScrollEnd,
      onTopRefresh: disableTopRefresh ? undefined : (() => loadPage('topRefresh')),
      onBottomRefresh: disableBottomRefresh ? undefined : (() => loadPage('bottomRefresh'))
    }


    return useVirtual ? (
      <VirtualList
        ref={mainRef as React.Ref<VirtualListRef>}
        {...(sharedProps as VirtualListProps)}
        virtual={virtual}
      >
        {!disableBottomRefresh && ['noMore', 'loading', 'moreError'].includes(resultStatus) ? (
          <List.InfiniteScroll status={resultStatus} content={result?.message} />
        ) : null}
        {['empty', 'error'].includes(resultStatus) && (
          <Result
            className="lyrixi-list-main-result"
            status={resultStatus === 'error' ? '500' : 'empty'}
            title={result?.message}
            description={undefined}
            style={undefined}
            imageRender={undefined}
            imageUrl={undefined}
          >
            <RetryButton
              status={resultStatus}
              errorRetry={errorRetry}
              emptyRetry={emptyRetry}
              onClick={() => loadPage('retry')}
            />
          </Result>
        )}
        <Loading
          type={loadAction}
          loadingRender={loadingRender}
          loadingModalStyle={loadingModalStyle}
          loadingModalClassName={loadingModalClassName}
          loadingMaskStyle={loadingMaskStyle}
          loadingMaskClassName={loadingMaskClassName}
          loadingPortal={loadingPortal}
        />
      </VirtualList>
    ) : (
      <EntityList
        ref={mainRef as React.Ref<EntityListRef>}
        {...(sharedProps as EntityListProps)}
        safeArea={false}
      >
        {!disableBottomRefresh && ['noMore', 'loading', 'moreError'].includes(resultStatus) ? (
          <List.InfiniteScroll status={resultStatus} content={result?.message} />
        ) : null}
        {['empty', 'error'].includes(resultStatus) && (
          <Result
            className="lyrixi-list-main-result"
            status={resultStatus === 'error' ? '500' : 'empty'}
            title={result?.message}
            description={undefined}
            style={undefined}
            imageRender={undefined}
            imageUrl={undefined}
          >
            <RetryButton
              status={resultStatus}
              errorRetry={errorRetry}
              emptyRetry={emptyRetry}
              onClick={() => loadPage('retry')}
            />
          </Result>
        )}
        <Loading
          type={loadAction}
          loadingRender={loadingRender}
          loadingModalStyle={loadingModalStyle}
          loadingModalClassName={loadingModalClassName}
          loadingMaskStyle={loadingMaskStyle}
          loadingMaskClassName={loadingMaskClassName}
          loadingPortal={loadingPortal}
        />
      </EntityList>
    )
  }
)
export type { ListAsyncProps, ListAsyncRef, LoadAction, LoadResult } from './types'

export default Main
