import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import getAnchorByPoint from './getAnchorByPoint'
import getAnchorByViewport from './getAnchorByViewport'
import activeButton from './activeButton'
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
      scrollerDOM,

      // Style
      className,
      style,

      // 自定义滚动到指定位置(虚拟滚动条会找不到位置)
      scrollToAnchor: externalScrollToAnchor
    },
    ref
  ) => {
    // Nodes
    const sidebarRef = useRef(null)
    const tooltipRef = useRef(null)

    // Touches
    let touchesRef = useRef({
      startX: 0
    })

    useImperativeHandle(ref, () => {
      return {
        rootDOM: sidebarRef.current,
        tooltipDOM: tooltipRef.current,
        getRootDOM: () => sidebarRef.current,
        getTooltipDOM: () => sidebarRef.current,
        activeAnchor: (currentAnchor) => {
          if (!currentAnchor && scrollerDOM) {
            // eslint-disable-next-line
            currentAnchor = getAnchorByViewport(scrollerDOM)
          }
          if (!currentAnchor) {
            console.error('IndexBar: no anchor found in scrollerDOM')
            return
          }
          activeButton({
            anchor: currentAnchor,
            sidebarDOM: sidebarRef.current,
            tooltipDOM: tooltipRef.current
          })
        },
        scrollToAnchor: goAnchor
      }
    })

    // 触摸时滚动至anchor
    function goAnchor(currentAnchor) {
      if (!currentAnchor) return

      // 滚动到指定位置
      if (scrollerDOM) {
        scrollToAnchor({
          scrollerDOM,
          anchor: currentAnchor
        })
      }
      // 自定义滚动到指定位置
      else {
        externalScrollToAnchor && externalScrollToAnchor(currentAnchor)
      }

      // 选中锚点按钮
      activeButton({
        anchor: currentAnchor,
        sidebarDOM: sidebarRef.current,
        tooltipDOM: tooltipRef.current
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

    const DOM = (
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
    return DOM
  }
)

export default IndexBar
