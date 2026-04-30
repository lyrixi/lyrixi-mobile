import React, { useCallback, useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import AccordionTransition from './AccordionTransition'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

export interface AccordionRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  open: () => void
  close: () => void
}

export interface AccordionProps {
  open?: boolean
  style?: React.CSSProperties
  className?: string
  minHeight?: number
  title?: React.ReactNode
  headerRender?: (props: { open: boolean; onClick: () => void }) => React.ReactNode
  ellipsis?: { expandText?: React.ReactNode; collapseText?: React.ReactNode }
  ellipsisRender?: (props: { open: boolean; onClick: () => void }) => React.ReactNode
  arrowClassName?: string
  arrowPosition?: 'left' | 'right'
  arrowRender?: (props: { open: boolean }) => React.ReactNode
  children?: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}

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
    const rootRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState(externalOpen)

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

    // 获取箭头节点
    function renderArrow() {
      if (typeof arrowRender === 'function') {
        return <div className="lyrixi-accordion-arrow">{arrowRender({ open })}</div>
      }

      return (
        <div className="lyrixi-accordion-arrow">
          <Icon className={arrowClassName} size="xs" />
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

    // Controlled component
    useEffect(() => {
      if (typeof externalOpen === 'boolean') {
        setOpen(externalOpen)
      }
      // eslint-disable-next-line
    }, [externalOpen])

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-accordion', className, open ? 'lyrixi-active' : '')}
      >
        {/* Element: Header */}
        {renderHeader()}

        {/* Element: Main */}
        <AccordionTransition open={open} minHeight={minHeight}>
          <div className="lyrixi-accordion-main">{children}</div>
        </AccordionTransition>

        {/* Element: Footer */}
        {renderEllipsis()}
      </div>
    )
  }
)

export default Accordion
