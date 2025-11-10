import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import CollapseTransition from './CollapseTransition'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// CollapseItem组件
const CollapseItem = (
  {
    // Status
    open: externalOpen = true,

    // Style
    style,
    className,

    // Element
    title,
    headerRender,
    arrowRender = 'collapse-item-header-arrow-icon',
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

    return <div className="lyrixi-collapse-item-header-arrow">{arrowRender({ open })}</div>
  }

  const ArrowNode = getArrowNode()

  // 获取Header节点
  function getHeaderNode() {
    // 默认Header
    if (typeof headerRender !== 'function') {
      return (
        <div className="lyrixi-collapse-item-header-wrapper">
          {arrowPosition === 'left' && ArrowNode}
          <div className="lyrixi-collapse-item-header-title">{title}</div>
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
      className={DOMUtil.classNames('lyrixi-collapse-item', className, open ? 'lyrixi-active' : '')}
    >
      {/* Element: Header */}
      <div className="lyrixi-collapse-item-header" onClick={handleClick}>
        {getHeaderNode()}
      </div>

      {/* Element: Main */}
      <CollapseTransition open={open}>
        <div className="lyrixi-collapse-item-main">{children}</div>
      </CollapseTransition>
    </div>
  )
}

export default forwardRef(CollapseItem)
