import React, {
  Fragment,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useState
} from 'react'
import getAnchorsByScroller from './getAnchorsByScroller'
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
      // 非实体操作
      anchors: externalAnchors,
      onTouchAnchor,
      // 实体操作
      scrollerDOM,
      children,
      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    let [anchors, setAnchors] = useState(null)

    // Nodes
    const scrollerRef = useRef(null)
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
          activeButton({
            anchor: currentAnchor,
            sidebarDOM: sidebarRef.current,
            tooltipDOM: tooltipRef.current
          })
        },
        update: updateAnchors,
        scrollToAnchor: goAnchor
      }
    })

    useEffect(() => {
      // 获取滚动容器
      scrollerRef.current = scrollerDOM || sidebarRef.current?.previousElementSibling
      if (!scrollerRef.current) return

      // 滚动事件
      scrollerRef.current.addEventListener('scroll', handleScroll, false)

      // 更新锚记
      updateAnchors()

      return () => {
        scrollerRef.current &&
          scrollerRef.current.removeEventListener('scroll', handleScroll, false)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      // 更新锚记
      updateAnchors()
      // eslint-disable-next-line
    }, [children])

    useEffect(() => {
      // 更新锚记
      if (Array.isArray(externalAnchors) && externalAnchors.length) {
        setAnchors(externalAnchors)
      } else {
        setAnchors([])
      }
      // eslint-disable-next-line
    }, [externalAnchors])

    // 获取所有锚点
    function updateAnchors() {
      // 自定义anchors
      if (Array.isArray(externalAnchors) && externalAnchors.length) {
        setAnchors(externalAnchors)
        return
      }

      if (!scrollerRef.current) return
      anchors = getAnchorsByScroller(scrollerRef.current)
      setAnchors(anchors)

      // 锚记渲染完成后更新右侧选中效果
      setTimeout(() => {
        handleScroll()
      }, 0)
    }

    // Scroller scroll to position sidebar
    function handleScroll() {
      let currentAnchor = getAnchorByViewport(scrollerRef.current)
      currentAnchor &&
        activeButton({
          anchor: currentAnchor,
          sidebarDOM: sidebarRef.current,
          tooltipDOM: tooltipRef.current
        })
    }

    // 触摸时滚动至anchor
    function goAnchor(currentAnchor) {
      if (!currentAnchor) return
      scrollToAnchor({
        scrollerDOM: scrollerRef.current,
        anchor: currentAnchor
      })
      activeButton({
        anchor: currentAnchor,
        sidebarDOM: sidebarRef.current,
        tooltipDOM: tooltipRef.current
      })

      // 触发回调
      onTouchAnchor && onTouchAnchor(currentAnchor)
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
        {children}
        <div
          {...props}
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
