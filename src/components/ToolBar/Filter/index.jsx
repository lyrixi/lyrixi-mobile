import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import FilterModal from './../../Modal/FilterModal'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button } from 'lyrixi-mobile'
const FilterModal = Modal.FilterModal
测试使用-end */

const Filter = forwardRef(
  (
    {
      // Style
      style,
      className,
      color = 'default',
      backgroundColor,
      shape,
      border,
      radius,
      size,
      maskStyle,
      maskClassName,
      modalStyle,
      modalClassName,

      // Element
      iconRender,
      portal,
      footerRender,
      children,

      // Events
      onCancel,
      onOpen,
      onClose
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const [open, setOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        close: () => {
          setOpen(false)
        },
        open: () => {
          setOpen(true)
        }
      }
    })

    // 获取图标节点
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender({ className: 'lyrixi-toolbar-button-icon' })
      }
      return <div className="lyrixi-toolbar-button-icon lyrixi-toolbar-button-icon-filter"></div>
    }
    const IconNode = getIconNode()

    return (
      <>
        {/* Combo */}
        <Button
          ref={rootRef}
          // Style
          color={color}
          backgroundColor={backgroundColor}
          border={border}
          size={size || 's'}
          radius={radius || 's'}
          shape={shape}
          className={DOMUtil.classNames('lyrixi-toolbar-button', className)}
          style={style}
          // Events
          onClick={() => {
            setOpen(true)
            onOpen && onOpen()
          }}
        >
          {/* Element: Icon */}
          {IconNode}
        </Button>

        {/* Modal */}
        <FilterModal
          // Status
          open={open}
          // Style
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          // Element
          portal={portal}
          footerRender={footerRender}
          // Events
          onCancel={onCancel}
          onClose={() => {
            setOpen(false)
            onClose && onClose()
          }}
        >
          {children}
        </FilterModal>
      </>
    )
  }
)

// Component Name, for compact
Filter.componentName = 'ToolBar.Filter'

export default Filter
