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

const IndexBar = forwardRef(
  (
    {
      // Value & Display Value
      anchors,

      // Elements
      scrollerElement,

      // Style
      className,
      style,

      // 自定义滚动到指定位置(虚拟滚动条会找不到位置)
      scrollToAnchor: externalScrollToAnchor
    },
    ref
  ) => {
    // 滚动节流定时器
    const scrollThrottleRef = useRef(null)
    // Nodes
    const sidebarRef = useRef(null)
    const tooltipRef = useRef(null)

    // Touches
    let touchesRef = useRef({
      startX: 0
    })

    useImperativeHandle(ref, () => {
      return {
        element: sidebarRef.current,
        tooltipElement: tooltipRef.current,
        getElement: () => sidebarRef.current,
        getTooltipElement: () => tooltipRef.current,
        scrollToAnchor: goAnchor
      }
    })

    // 监听滚动事件(有滚动容器scrollerElement时才监听)
    useEffect(() => {
      scrollerElement && scrollerElement.addEventListener('scroll', handleScroll, false)
      return () => {
        scrollerElement && scrollerElement.removeEventListener('scroll', handleScroll, false)
      }
      // eslint-disable-next-line
    }, [scrollerElement])

    // 滚动事件(有滚动容器scrollerElement时才监听)
    function handleScroll() {
      if (scrollThrottleRef.current) return
      scrollThrottleRef.current = setTimeout(() => {
        let currentAnchor = getAnchorByScroller(scrollerElement)
        currentAnchor &&
          activeAnchor(currentAnchor, {
            sidebarElement: sidebarRef.current
          })
        scrollThrottleRef.current = null
      }, 300)
    }

    // 触摸时滚动至anchor
    function goAnchor(currentAnchor) {
      if (!currentAnchor) return

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
    function handleTouchStart(e) {
      e.stopPropagation()
      // 解决拖动时影响document弹性
      e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault, false)

      // 激活indexbar
      sidebarRef.current.classList.add('lyrixi-active')

      // 滚动到指定位置
      touchesRef.current.startX = e.touches[0].clientX
      let currentAnchor = getAnchorByPoint({
        x: touchesRef.current.startX,
        y: e.touches[0].clientY
      })

      goAnchor(currentAnchor)
    }
    function handleTouchMove(e) {
      e.stopPropagation()

      // 滚动到指定位置
      let currentAnchor = getAnchorByPoint({
        x: touchesRef.current.startX,
        y: e.touches[0].clientY
      })

      goAnchor(currentAnchor)
    }
    function handleTouchEnd(e) {
      e.stopPropagation()
      // 解除对move时的弹性对当前div的锁定
      e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault, false)

      sidebarRef.current.classList.remove('lyrixi-active')
    }

    const Node = (
      <Fragment>
        <div
          style={style}
          className={DOMUtil.classNames('lyrixi-indexbar', className)}
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
