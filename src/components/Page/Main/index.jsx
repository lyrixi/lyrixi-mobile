import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import TopContainer from './TopContainer'
import isBottom from './utils/isBottom'
import topRefreshOk from './utils/topRefreshOk.js'

// 内库使用-start
import Device from './../../../utils/Device'
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { Device, DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
测试使用-start */

// 下拉刷新容器
const Main = forwardRef(
  (
    {
      // Status
      threshold = 50,
      safeArea,
      touchStopPropagation = true,

      // Style
      className,
      style,

      // Element
      children,

      // Events
      onTopRefresh,
      onBottomRefresh,
      onScroll,
      onScrollEnd
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const isLoadingRef = useRef(null)
    const topContainerRef = useRef(null)
    // 滚动节流定时器
    const scrollThrottleRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    /* ----------------------
    Events
    ---------------------- */
    // Touch信息
    let touchesRef = useRef({
      isTop: true,
      startY: 0,
      currentY: 0,
      diffY: 0
    })

    function handleTouchStart(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return

      // 如果不在顶部，则不触发
      if (e.currentTarget.scrollTop <= 0) touchesRef.current.isTop = true
      else touchesRef.current.isTop = false

      topContainerRef.current.style.webkitTransitionDuration = '0ms'

      touchesRef.current.startY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = 0
    }
    // 标识头部正在拖动
    function handleTouchMove(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      touchesRef.current.currentY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = touchesRef.current.currentY - touchesRef.current.startY

      // 向下滚动
      if (touchesRef.current.diffY < 20) {
        return
      }

      // 拉动高度
      if (touchesRef.current.diffY > 100) touchesRef.current.diffY = 100
      topContainerRef.current.style.height = touchesRef.current.diffY + 'px'
      let topIcon = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-icon')
      let topText = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-text')
      if (touchesRef.current.diffY >= threshold) {
        if (topIcon) topIcon.classList.add('lyrixi-page-main-pull-push-icon-down')
        if (topText) topText.innerHTML = LocaleUtil.locale('释放立即刷新', 'lyrixi.release.refresh')
      } else {
        if (topIcon) topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('下拉可以刷新', 'lyrixi.pull.down.refresh')
      }
    }
    async function handleTouchEnd(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      topContainerRef.current.style.webkitTransitionDuration = '150ms'

      // 拉动幅度过小则收起
      if (touchesRef.current.diffY <= threshold) {
        topContainerRef.current.style.height = '0'
      }
      // 反之展示
      else {
        let topIcon = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-icon')
        let topText = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-text')
        topContainerRef.current.style.height = threshold + 'px'
        if (topIcon) topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        if (topIcon) topIcon.classList.add('lyrixi-page-main-pull-push-icon-loading')
        if (topText) topText.innerHTML = `${LocaleUtil.locale('加载中', 'lyrixi.refreshing')}...`

        // Trigger Events
        if (onTopRefresh) {
          isLoadingRef.current = true
          let isOk = await onTopRefresh()
          // 头部显示
          await topRefreshOk(topContainerRef.current, isOk)
          isLoadingRef.current = false
        }
      }
    }

    async function handleScroll(e) {
      if (onScroll) onScroll(e)

      // ios滚动过程中不允许点击tab，否则可能会局部白屏
      document.documentElement.classList.add(`lyrixi-${Device.os}-scrolling`)
      if (scrollThrottleRef.current) {
        window.clearTimeout(scrollThrottleRef.current)
      }
      scrollThrottleRef.current = setTimeout(() => {
        // 因为现在onScrollEnd原生事件兼容性非常不好，暂时使用此方法模拟
        onScrollEnd && onScrollEnd(e)
        document.documentElement.classList.remove(`lyrixi-${Device.os}-scrolling`)
        // 滚动处理完成
      }, 500)

      // 滚动到底部加载更多
      if (!onBottomRefresh || isLoadingRef.current) return
      if (isBottom(rootRef.current)) {
        isLoadingRef.current = true
        await onBottomRefresh()
        isLoadingRef.current = false
      }
    }

    return (
      <main
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-main', className)}
        // Events
        onTouchStart={onTopRefresh ? handleTouchStart : undefined}
        onTouchMove={onTopRefresh ? handleTouchMove : undefined}
        onTouchEnd={onTopRefresh ? handleTouchEnd : undefined}
        onScroll={onScroll || onBottomRefresh ? handleScroll : undefined}
      >
        {/* Element: Top Container */}
        <TopContainer ref={topContainerRef} />

        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </main>
    )
  }
)

export default Main
