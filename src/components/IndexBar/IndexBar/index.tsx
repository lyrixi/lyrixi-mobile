import React, { Fragment, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import getAnchorByPoint from './getAnchorByPoint'
import getAnchorByScroller from './getAnchorByScroller'
import activeAnchor from './activeAnchor'
import scrollToAnchor from './scrollToAnchor'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import type { IndexBarProps, IndexBarRef } from './types'

const IndexBar = forwardRef<IndexBarRef, IndexBarProps>(
  (
    {
      // Value & Display Value
      anchors,

      // Elements
      getScrollerElement,

      // Style
      className,
      style,

      // 自定义滚动到指定位置(虚拟滚动条会找不到位置)
      scrollToAnchor: externalScrollToAnchor
    },
    ref
  ) => {
    // 滚动防抖定时器
    const scrollDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Nodes
    const sidebarRef = useRef<HTMLDivElement>(null)

    const tooltipRef = useRef<HTMLDivElement>(null)


    // Touches
    const touchesRef = useRef({
      startX: 0
    })


    // 监听滚动事件(有滚动容器时才监听，用 getElement 以便初始化后 ref 挂载也能拿到)
    useEffect(() => {
      const scrollerElement = getScrollerElement()
      if (!scrollerElement) return
      scrollerElement.removeEventListener('scroll', handleScroll, false)
      scrollerElement.addEventListener('scroll', handleScroll, false)
      return () => {
        scrollerElement && scrollerElement.removeEventListener('scroll', handleScroll, false)
      }
      // eslint-disable-next-line
    }, [])


    useImperativeHandle(ref, () => {
      return {
        element: sidebarRef.current,
        tooltipElement: tooltipRef.current,
        getElement: () => sidebarRef.current,
        getTooltipElement: () => tooltipRef.current,
        scrollToAnchor: goAnchor
      }
    })


    // 滚动事件(有滚动容器时才监听)
    function handleScroll(e: Event): void {
      if (scrollDebounceRef.current) return
      scrollDebounceRef.current = setTimeout(() => {
        // 定时器里e.currentTarget为null
        const currentAnchor = getAnchorByScroller(e.target as Element)
        currentAnchor &&
          activeAnchor(currentAnchor, {
            sidebarElement: sidebarRef.current
          })
        scrollDebounceRef.current = null
      }, 300)
    }


    // 触摸时滚动至anchor
    function goAnchor(currentAnchor: string): void {
      if (!currentAnchor) return

      const scrollerElement = getScrollerElement()
      // 自定义滚动到指定位置
      if (externalScrollToAnchor) {
        externalScrollToAnchor(currentAnchor, {
          scrollerElement
        })
      }
      // 滚动到指定位置
      else if (scrollerElement) {
        scrollToAnchor(currentAnchor, {
          scrollerElement
        })
      }

      // 选中锚点按钮
      activeAnchor(currentAnchor, {
        sidebarElement: sidebarRef.current,
        tooltipElement: tooltipRef.current
      })
    }


    // Sidebar touch move to position Anchor
    function handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void {
      e.stopPropagation()
      // 解决拖动时影响document弹性
      e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault as EventListener, false)

      // 激活indexbar
      sidebarRef.current?.classList.add('lyrixi-active')

      // 滚动到指定位置
      touchesRef.current.startX = e.touches[0].clientX
      const currentAnchor = getAnchorByPoint({
        x: touchesRef.current.startX,
        y: e.touches[0].clientY
      })

      goAnchor(currentAnchor)
    }


    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
      e.stopPropagation()

      // 滚动到指定位置
      const currentAnchor = getAnchorByPoint({
        x: touchesRef.current.startX,
        y: e.touches[0].clientY
      })

      goAnchor(currentAnchor)
    }


    function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>): void {
      e.stopPropagation()
      // 解除对move时的弹性对当前div的锁定
      e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault as EventListener, false)

      sidebarRef.current?.classList.remove('lyrixi-active')
    }


    const Node = (
      <Fragment>
        <div
          style={style}
          className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-indexbar', className, !anchors?.length ? 'lyrixi-hide' : '')}
          ref={sidebarRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {(anchors || []).map((anchor, i) => {
            return (
              <div
                className="lyrixi-indexbar-button"
                data-indexbar-anchor-button={anchor}
                key={`btn${i}`}
              >
                <div className="lyrixi-indexbar-button-name">{anchor}</div>
              </div>
            )
          })}
        </div>
        <div ref={tooltipRef} className="lyrixi-indexbar-tooltip"></div>
      </Fragment>
    )

    return Node
  }
)

export default IndexBar

export type { IndexBarProps, IndexBarRef } from './types'
