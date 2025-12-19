import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

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
      direction,
      block,
      style,
      className,
      color = 'default',
      backgroundColor,
      borderColor = 'default',
      border = 'none',
      size,
      sizeEqual,
      fontSize,
      radius = 'm',

      maskStyle,
      maskClassName,
      modalStyle,
      modalClassName,

      // Elements
      children,
      comboRender,
      modalRender,
      portal,
      footerRender,

      // Events
      onCancel,
      onOpen,
      onClose
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const [open, setOpen] = useState(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current,
        getElement: () => comboRef.current,
        close: () => {
          setOpen(false)
        },
        open: () => {
          setOpen(true)
        }
      }
    })

    useEffect(() => {
      if (open === null) return
      if (open) {
        onOpen?.()
      } else {
        onClose?.()
      }
      // eslint-disable-next-line
    }, [open])

    // 获取标题节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open: open,
          onClick: () => {
            setOpen(true)
          }
        })
      }

      return (
        <Button
          ref={comboRef}
          // Style
          color={color}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          border={border}
          direction={direction}
          block={block}
          fontSize={fontSize}
          size={size}
          sizeEqual={sizeEqual}
          radius={radius}
          className={DOMUtil.classNames('lyrixi-toolbar-button', className)}
          style={style}
          // Events
          onClick={() => {
            setOpen(true)
          }}
        >
          {/* comboChildren */}
          {children || <Icon className="lyrixi-iconfont-filter-menu" />}
        </Button>
      )
    }

    const ComboNode = getComboNode()

    return (
      <>
        {/* Combo */}
        {ComboNode}

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
          }}
        >
          {modalRender?.({
            open: open,
            onClose: () => {
              setOpen(false)
            }
          })}
        </FilterModal>
      </>
    )
  }
)

// Component Name, for compact
Filter.componentName = 'ToolBar.Filter'

export default Filter
