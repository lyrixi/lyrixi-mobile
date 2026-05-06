import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type MouseEvent
} from 'react'

import type { ToolBarFilterProps, ToolBarFilterRef } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import FilterModal from './../../Modal/FilterModal'
import Button, { type ButtonRef } from './../../Button'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button, Icon } from 'lyrixi-mobile'
const FilterModal = Modal.FilterModal
测试使用-end */

const Filter = forwardRef<ToolBarFilterRef, ToolBarFilterProps>(function Filter(
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
    onClose,
    onConfig: _onConfig,
    onReset: _onReset,
    onOk: _onOk,
    icon
  },
  ref
) {
  const comboRef = useRef<ButtonRef | null>(null)

  const [open, setOpen] = useState<boolean | null>(null)


  useEffect(() => {
    if (open === null) return
    if (open) {
      onOpen?.()
    } else {
      onClose?.()
    }
    // eslint-disable-next-line
  }, [open])


  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: comboRef.current?.element ?? null,
      getElement: () => comboRef.current?.getElement() ?? null,
      close: () => {
        setOpen(false)
      },
      open: () => {
        setOpen(true)
      }
    }
  })


  // 获取标题节点
  function renderCombo() {
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
        {children || icon || <Icon className="lyrixi-iconfont-filter-menu" />}
      </Button>
    )
  }


  const ComboNode = renderCombo()

  const modalOpen = open ?? false


  return (
    <>
      {/* Combo */}
      {ComboNode}

      {/* Modal */}
      <FilterModal
        // Status
        open={modalOpen}
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
})

// Component Name, for compact
;(Filter as typeof Filter & { componentName?: string }).componentName = 'ToolBar.Filter'

export default Filter

export type { ToolBarFilterProps, ToolBarFilterRef } from './types'
