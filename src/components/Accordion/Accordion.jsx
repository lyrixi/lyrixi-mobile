import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import AccordionTransition from './AccordionTransition'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

// Accordion组件
const Accordion = (
  {
    // Status
    open: externalOpen = false,

    // Style
    style,
    className,

    // Behavior
    minHeight,

    // Elements
    title,
    headerRender,
    ellipsis, // {expandText, collapseText}
    ellipsisRender,
    arrowClassName = 'lyrixi-iconfont-arrow-up',
    arrowPosition = 'right',
    arrowRender,
    children,

    // Events
    onOpen,
    onClose
  },
  ref
) => {
  const rootRef = useRef(null)

  const [open, setOpen] = useState(externalOpen)

  // Controlled component
  useEffect(() => {
    if (typeof externalOpen === 'boolean' && (onOpen || onClose)) {
      setOpen(externalOpen)
    }
    // eslint-disable-next-line
  }, [externalOpen])

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      open: () => {
        if (onOpen) {
          onOpen()
        } else {
          setOpen(true)
        }
      },
      close: () => {
        if (onClose) {
          onClose()
        } else {
          setOpen(false)
        }
      }
    }
  })

  const handleClick = () => {
    const newOpen = !open
    if (newOpen) {
      if (onOpen) {
        onOpen()
      } else {
        setOpen(true)
      }
    } else {
      if (onClose) {
        onClose()
      } else {
        setOpen(false)
      }
    }
  }

  // 获取箭头节点
  function getArrowNode() {
    if (typeof arrowRender === 'function') {
      return <div className="lyrixi-accordion-arrow">{arrowRender({ open })}</div>
    }

    return (
      <div className="lyrixi-accordion-arrow">
        <Icon className={arrowClassName} size="xs" />
      </div>
    )
  }

  const ArrowNode = getArrowNode()

  // 获取Header节点
  function getHeaderNode() {
    if (typeof headerRender === 'function') {
      return headerRender({
        open,
        onClick: handleClick
      })
    }

    if (!title) {
      return null
    }

    return (
      <div className="lyrixi-accordion-header" onClick={handleClick}>
        {arrowPosition === 'left' && ArrowNode}
        <div className="lyrixi-accordion-header-title">{title}</div>
        {arrowPosition === 'right' && ArrowNode}
      </div>
    )
  }

  // 获取Footer节点
  function getEllipsisNode() {
    if (typeof ellipsisRender === 'function') {
      return ellipsisRender({
        open,
        onClick: handleClick
      })
    }

    if (!ellipsis?.collapseText || !ellipsis?.expandText) {
      return null
    }

    return (
      <div className="lyrixi-accordion-ellipsis" onClick={handleClick}>
        {arrowPosition === 'left' && ArrowNode}
        <div className="lyrixi-accordion-ellipsis-title">
          {open ? ellipsis?.collapseText : ellipsis?.expandText}
        </div>
        {arrowPosition === 'right' && ArrowNode}
      </div>
    )
  }

  return (
    <div
      ref={rootRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-accordion', className, open ? 'lyrixi-active' : '')}
    >
      {/* Element: Header */}
      {getHeaderNode()}

      {/* Element: Main */}
      <AccordionTransition open={open} minHeight={minHeight}>
        <div className="lyrixi-accordion-main">{children}</div>
      </AccordionTransition>

      {/* Element: Footer */}
      {getEllipsisNode()}
    </div>
  )
}

export default forwardRef(Accordion)
