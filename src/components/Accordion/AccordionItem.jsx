import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import AccordionTransition from './AccordionTransition'

// 内库使用-start
import LocaleUtil from './../../utils/LocaleUtil'
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil, Icon } from 'lyrixi-mobile'
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
    footerRender,
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
      return <div className="lyrixi-accordion-item-arrow">{arrowRender({ open })}</div>
    }

    return (
      <div className="lyrixi-accordion-item-arrow">
        <Icon className={arrowClassName} size="xs" onClick={() => setVisible(false)} />
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

    return (
      <div className="lyrixi-accordion-item-header" onClick={handleClick}>
        {arrowPosition === 'left' && ArrowNode}
        <div className="lyrixi-accordion-item-header-title">{title}</div>
        {arrowPosition === 'right' && ArrowNode}
      </div>
    )
  }

  // 获取Footer节点
  function getFooterNode() {
    if (typeof footerRender === 'function') {
      return footerRender({
        open,
        onClick: handleClick
      })
    }

    return (
      <div className="lyrixi-accordion-item-footer" onClick={handleClick}>
        {arrowPosition === 'left' && ArrowNode}
        <div className="lyrixi-accordion-item-footer-title">
          {open ? LocaleUtil.locale('收起') : LocaleUtil.locale('查看更多')}
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
      className={DOMUtil.classNames(
        'lyrixi-accordion-item',
        className,
        open ? 'lyrixi-active' : ''
      )}
    >
      {/* Element: Header */}
      {getHeaderNode()}

      {/* Element: Main */}
      <AccordionTransition open={open}>
        <div className="lyrixi-accordion-item-main">{children}</div>
      </AccordionTransition>

      {/* Element: Footer */}
      {getFooterNode()}
    </div>
  )
}

export default forwardRef(AccordionItem)
