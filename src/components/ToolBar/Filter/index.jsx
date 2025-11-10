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
      // Button Style
      comboColor = 'default',
      comboBackgroundColor,
      comboShape,
      comboBorder,
      comboRadius,
      comboSize,
      comboStyle,
      comboClassName,

      // Content
      iconRender,

      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      onCancel,
      footerRender,
      onOpen,
      onClose,
      children
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

    useEffect(() => {
      // 初始化不回调onOpen/onClose
      if (!rootRef.current.isNotFirstVisible) {
        rootRef.current.isNotFirstVisible = true
        return
      }

      if (open) {
        onOpen && onOpen()
      } else {
        onClose && onClose()
      }
      // eslint-disable-next-line
    }, [open])

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
          color={comboColor}
          backgroundColor={comboBackgroundColor}
          border={comboBorder}
          size={comboSize || 's'}
          radius={comboRadius || 's'}
          shape={comboShape}
          className={DOMUtil.classNames('lyrixi-toolbar-button', comboClassName)}
          style={comboStyle}
          onClick={() => {
            setOpen(true)
          }}
          ref={rootRef}
        >
          {IconNode}
        </Button>

        {/* Modal */}
        <FilterModal
          portal={portal}
          onCancel={onCancel}
          footerRender={footerRender}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          style={{
            className: modalClassName,
            style: modalStyle
          }}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          open={open}
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
