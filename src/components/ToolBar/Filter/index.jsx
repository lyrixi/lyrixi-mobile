import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import FilterModal from './../../Modal/FilterModal'
import Button from './../../Button'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button, Icon } from 'lyrixi-mobile'
const FilterModal = Modal.FilterModal
测试使用-end */

const Filter = forwardRef(
  (
    {
      // Style
      style,
      className,
      color = 'default',
      borderColor = 'default',
      backgroundColor,
      sizeEqual,
      border = 'none',
      direction,
      radius = 'm',
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
          onClose && onClose()
        },
        open: () => {
          setOpen(true)
          onOpen && onOpen()
        }
      }
    })

    // 获取图标节点
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender()
      }
      return <Icon className="lyrixi-iconfont-filter-menu" />
    }
    const IconNode = getIconNode()

    return (
      <>
        {/* Combo */}
        <Button
          ref={rootRef}
          // Style
          color={color}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          border={border}
          direction={direction}
          size={size}
          sizeEqual={sizeEqual}
          radius={radius}
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
