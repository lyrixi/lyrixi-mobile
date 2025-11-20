import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react'
import scrollToTop from './utils/scrollToTop'
import InfiniteScroll from './../InfiniteScroll'
import Loading from './components/Loading'
import List from './List'
import VirtualList from './VirtualList'
import RetryButton from './components/RetryButton'

// 内库使用-start
import Device from './../../../utils/Device'
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import Result from './../../Result'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { Device, LocaleUtil, DOMUtil, Result, Button } from 'lyrixi-mobile'
测试使用-end */

const Main = forwardRef(
  (
    {
      // Value & Display Value
      value,
      loadData,
      /*
      loadData: (params: { previousResult, action: 'load'|'reload'|'topRefresh'|'bottomRefresh'|'retry' }) => Promise<{
        status: 'empty(暂无数据)'|'error(加载出错)'|'moreError(更多数据加载出错)'|'noMore(没有更多数据)'|'loading(有更多数据)',
        message?: string(错误信息),
        list: Array<any>(列表数据)
      }>
      */
      formatItem,

      // Status
      errorRetry = true, // 是否显示重试按钮
      emptyRetry, // 是否显示刷新按钮
      initialLoad = true,
      multiple,
      allowClear,
      checkable,
      disableTopRefresh = false,
      disableBottomRefresh = false,
      virtual,
      /*
      {
        getItemHeight: () => Number
      }
      */

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
      onLoad
    },
    ref
  ) => {
    // 滚动节流定时器
    const scrollThrottleRef = useRef(null)

    // 容器
    const mainRef = useRef(null)

    // 请求结果
    /*
    {
      status: 'empty'|'error'|'noMore'|'loading', // 'empty' 无数据, 'error' 异常, 'noMore' 没有更多数据, 'loading' 有更多数据
      message?: string,       // 对应status的提示
      list: Array<any>,       // 修改页面渲染列表
    }
    */
    const [result, setResult] = useState(null)
    // 结果状态: empty | error | moreError | noMore | loading
    const [resultStatus, setResultStatus] = useState('')
    // 加载显示: load | reload | topRefresh | bottomRefresh
    const [loadAction, setLoadAction] = useState('')

    // Expose
    useImperativeHandle(ref, () => {
      return {
        mainDOM: mainRef?.current?.rootDOM,
        getMainDOM: mainRef?.current?.getRootDOM,
        // IndexBar
        getAnchors: mainRef?.current?.getAnchors,
        scrollToAnchor: mainRef?.current?.scrollToAnchor,
        // 重新加载
        reload: (action) => {
          if (action === 'load') {
            init()
          } else {
            loadPage(action || 'reload')
          }
        },
        // 获取结果
        getResult: () => {
          return result
        }
      }
    })

    // 渲染完成执行onLoad
    useEffect(() => {
      if (!result) return

      onLoad && onLoad({ result: result, action: loadAction })

      setLoadAction('')
      // eslint-disable-next-line
    }, [result])

    // 默认加载
    useEffect(() => {
      if (!initialLoad) return

      init()
      // eslint-disable-next-line
    }, [])

    // 初始化
    function init() {
      loadPage('load')
    }

    // 统一加载方法: 根据 page 判断刷新/底部加载
    async function loadPage(action) {
      if (typeof loadData !== 'function') return

      if (action === 'bottomRefresh') {
        // 页面级提示时, 滚动到底部都不允许加载
        if (result.status === 'error') {
          return true
        }
        // 底部加载完成时, 滚动到底部不再加载
        if (result?.status === 'noMore') {
          return true
        }
        // 底部加载错误重新加载
        if (result?.status === 'moreError') {
          setResultStatus('loading')
        }
      }

      // 初次加载/重新加载/重试/触顶刷新/点击重试, 滚动到顶部
      if (['load', 'reload', 'topRefresh', 'retry'].includes(action)) {
        scrollToTop(mainRef.current?.rootDOM)
      }

      // 请求数据
      setLoadAction(action)
      let newResult = await loadData({ previousResult: result, action: action })

      // 返回数据异常，不更新结果
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

    const ListNode = virtual?.getItemHeight ? VirtualList : List

    return (
      <ListNode
        ref={mainRef}
        style={style}
        virtual={virtual}
        className={DOMUtil.classNames('lyrixi-list-main', className)}
        // Request
        onTopRefresh={disableTopRefresh ? null : () => loadPage('topRefresh')}
        onBottomRefresh={disableBottomRefresh ? null : () => loadPage('bottomRefresh')}
        // Main: common
        allowClear={allowClear}
        multiple={multiple}
        value={value}
        onChange={onChange}
        onScroll={(e) => {
          // Callback
          onScroll && onScroll(e)

          // ios滚动过程中不允许点击tab，否则可能会局部白屏
          document.documentElement.classList.add(`lyrixi-${Device.os}-scrolling`)

          if (scrollThrottleRef.current) {
            window.clearTimeout(scrollThrottleRef.current)
          }
          scrollThrottleRef.current = setTimeout(() => {
            document.documentElement.classList.remove(`lyrixi-${Device.os}-scrolling`)
            // 滚动处理完成
          }, 500)
        }}
        // List config
        itemRender={itemRender}
        itemLayout={itemLayout}
        checkable={checkable}
        // Render
        prependRender={prependRender}
        list={
          // 格式化Item显示数据, 但仍然需要保留原始数据item
          typeof formatItem === 'function'
            ? result?.list?.map((item) => {
                return { ...formatItem(item), item }
              })
            : result?.list
        }
        appendRender={appendRender}
      >
        {/* 底部错误提示 */}
        {!disableBottomRefresh && ['noMore', 'loading', 'moreError'].includes(resultStatus) ? (
          <InfiniteScroll status={resultStatus} content={result?.message} />
        ) : null}
        {/* 页面级错误提示 */}
        {['empty', 'error'].includes(resultStatus) && (
          <Result
            className="lyrixi-list-main-result"
            status={resultStatus === 'error' ? '500' : 'empty'}
            title={result?.message}
          >
            <RetryButton
              status={resultStatus}
              errorRetry={errorRetry}
              emptyRetry={emptyRetry}
              onClick={() => loadPage('retry')}
            />
          </Result>
        )}
        {/* 页面加载遮罩 */}
        <Loading type={loadAction} loadingRender={loadingRender} />
      </ListNode>
    )
  }
)

export default Main
