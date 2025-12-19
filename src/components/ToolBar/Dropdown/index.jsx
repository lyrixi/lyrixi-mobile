import React, { useImperativeHandle, useRef, useEffect, useState, forwardRef } from 'react'
import closeAllDropdown from './../utils/closeAllDropdown'
import Combo from './../components/Combo'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import DOMUtil from './../../../utils/DOMUtil'
import DropdownModal from './../../Modal/DropdownModal'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, DOMUtil, Modal } from 'lyrixi-mobile'
const DropdownModal = Modal.DropdownModal
测试使用-end */

const Dropdown = forwardRef(
  (
    {
      // Combo: Style
      direction,
      block,
      color = 'default',
      backgroundColor,
      borderColor = 'default',
      border = 'none',
      size,
      sizeEqual,
      radius = 'm',
      fontSize,
      style,
      className,

      // Combo: Element
      children,
      comboRender,
      arrowRender = () => (
        <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>
      ),

      // Modal: Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      offset = {
        top: 6
      },
      left,
      right,

      // Modal: Element
      portal,
      modalRender,

      // Events
      onBeforeOpen,
      onOpen,
      onClose
    },
    ref
  ) => {
    const [open, setOpen] = useState(null)
    const comboRef = useRef(null)
    // 唯一id，用于关闭时排除其他dropdown
    const idRef = useRef(ObjectUtil.randomUUID())

    // Expose
    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    // 注册当前实例到全局集合
    useEffect(() => {
      if (!window.dropdowns) window.dropdowns = {}
      window.dropdowns[idRef.current] = {
        close: () => setOpen(false),
        open: () => setOpen(true)
      }

      // 组件卸载时移除实例
      return () => {
        // eslint-disable-next-line
        delete window.dropdowns[idRef.current]
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (open === null) return
      // 打开前先关闭其他所有 dropdown
      if (open) {
        closeAllDropdown({ exceptId: idRef.current })
        onOpen?.()
      } else {
        onClose?.()
      }
      // eslint-disable-next-line
    }, [open])

    async function handleClick(e) {
      let newOpen = !open
      if (!newOpen) {
        setOpen(false)
        return
      }

      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setOpen(true)
    }

    // 获取标题节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open: open,
          onClick: handleClick
        })
      }
      return (
        <Combo
          ref={comboRef}
          // Status
          open={open}
          // Style
          style={style}
          className={className}
          color={color}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          sizeEqual={sizeEqual}
          border={border}
          direction={direction}
          block={block}
          fontSize={fontSize}
          radius={radius}
          size={size}
          // Elements
          arrowRender={arrowRender}
          // Events
          onClick={handleClick}
        >
          {children}
        </Combo>
      )
    }

    const ComboNode = getComboNode()

    return (
      <>
        {/* Combo */}
        {ComboNode}

        {/* Modal */}
        <DropdownModal
          // Status
          open={open}
          // Style
          maskStyle={maskStyle}
          maskClassName={DOMUtil.classNames('lyrixi-toolbar-dropdown-mask', maskClassName)}
          modalStyle={modalStyle}
          modalClassName={DOMUtil.classNames('lyrixi-toolbar-dropdown-modal', modalClassName)}
          // Element
          portal={portal}
          offset={offset}
          left={left}
          right={right}
          referenceDOM={comboRef.current?.element}
          // Events
          onClose={() => setOpen(false)}
        >
          {modalRender?.({
            open: open,
            onClose: () => setOpen(false)
          })}
        </DropdownModal>
      </>
    )
  }
)

// Component Name, for compact
Dropdown.componentName = 'ToolBar.Dropdown'

export default Dropdown
