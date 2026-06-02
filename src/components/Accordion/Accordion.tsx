import React, { useCallback, useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import AccordionTransition from './AccordionTransition'

import type { AccordionProps, AccordionRef } from './types'

// 内库使用-start
import Icons from '../../icons'
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'

// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon, Icons } from 'lyrixi-mobile'
测试使用-end */

// Accordion组件
const Accordion = forwardRef<AccordionRef, AccordionProps>(
  (
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
      arrowClassName,
      arrowPosition = 'right',
      arrowRender,
      children,

      // Events
      onOpen,
      onClose
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState(externalOpen)

    // Controlled: 同步外部 open
    useEffect(() => {
      if (typeof externalOpen === 'boolean') {
        setOpen(externalOpen)
      }
      // eslint-disable-next-line
    }, [externalOpen])

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current,
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

    const handleClick = useCallback(() => {
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
    }, [onClose, onOpen, open])

    // 获取箭头节点
    function renderArrow() {
      if (typeof arrowRender === 'function') {
        return <div className="lyrixi-accordion-arrow">{arrowRender({ open })}</div>
      }

      return (
        <div className="lyrixi-accordion-arrow">
          <Icon svg={Icons.ArrowUp} className={arrowClassName} size="xs" />
        </div>
      )
    }

    const ArrowNode = renderArrow()

    // 获取Header节点
    function renderHeader() {
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
    function renderEllipsis() {
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
        {/* Elements: Header */}
        {renderHeader()}

        {/* Elements: Main */}
        <AccordionTransition open={open} minHeight={minHeight}>
          <div className="lyrixi-accordion-main">{children}</div>
        </AccordionTransition>

        {/* Elements: Footer */}
        {renderEllipsis()}
      </div>
    )
  }
)

export default Accordion
