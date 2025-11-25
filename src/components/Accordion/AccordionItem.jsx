import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import AccordionTransition from './AccordionTransition'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// AccordionItem组件
const AccordionItem = (
  {
    // Status
    open: externalOpen = true,

    // Style
    style,
    className,

    // Elements
    title,
    headerRender,
    arrowRender = 'accordion-item-header-arrow-icon',
    arrowPosition = 'right',
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
    if (typeof arrowRender !== 'function') return null

    return <div className="lyrixi-accordion-item-header-arrow">{arrowRender({ open })}</div>
  }

  const ArrowNode = getArrowNode()

  // 获取Header节点
  function getHeaderNode() {
    // 默认Header
    if (typeof headerRender !== 'function') {
      return (
        <div className="lyrixi-accordion-item-header-wrapper">
          {arrowPosition === 'left' && ArrowNode}
          <div className="lyrixi-accordion-item-header-title">{title}</div>
          {arrowPosition === 'right' && ArrowNode}
        </div>
      )
    }

    return headerRender({
      open
    })
  }

  return (
    <div
      ref={rootRef}
      // Style
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-accordion-item',
        className,
        open ? 'lyrixi-active' : ''
      )}
    >
      {/* Element: Header */}
      <div className="lyrixi-accordion-item-header" onClick={handleClick}>
        {getHeaderNode()}
      </div>

      {/* Element: Main */}
      <AccordionTransition open={open}>
        <div className="lyrixi-accordion-item-main">{children}</div>
      </AccordionTransition>
    </div>
  )
}

export default forwardRef(AccordionItem)
