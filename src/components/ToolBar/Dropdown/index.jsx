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
      // Combo: Value & Display Value
      placeholder = '',

      // Combo: Style
      style,
      className,
      color = 'default',
      backgroundColor,
      shape,
      border,
      radius,
      size,

      // Combo: Element
      comboRender,
      comboChildren,
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
      children,

      // Events
      onBeforeOpen,
      onOpen,
      onClose
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef(null)
    // 唯一id，用于关闭时排除其他dropdown
    const idRef = useRef(ObjectUtil.randomUUID())

    // Expose
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current?.rootDOM ? comboRef.current.rootDOM : comboRef.current,
        getComboDOM: () =>
          comboRef.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
        close: _close,
        open: _open
      }
    })

    // 注册当前实例到全局集合
    useEffect(() => {
      if (!window.dropdowns) window.dropdowns = {}
      window.dropdowns[idRef.current] = {
        close: _close,
        open: _open
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
      }
      // eslint-disable-next-line
    }, [open])

    function _close() {
      setOpen(false)
      onClose && onClose()
    }

    function _open() {
      setOpen(true)
      onOpen && onOpen()
    }

    async function handleClick(e) {
      let newOpen = !open
      if (!newOpen) {
        setOpen(newOpen)
        return
      }

      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setOpen(newOpen)
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
          backgroundColor={backgroundColor}
          shape={shape}
          border={border}
          radius={radius}
          size={size}
          // Elements
          arrowRender={arrowRender}
          // Events
          onClick={handleClick}
        >
          {comboChildren || placeholder}
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
          referenceDOM={comboRef.current?.rootDOM ? comboRef.current.rootDOM : comboRef.current}
          // Events
          onClose={() => {
            setOpen(false)
          }}
        >
          {children}
        </DropdownModal>
      </>
    )
  }
)

// Component Name, for compact
Dropdown.componentName = 'ToolBar.Dropdown'

export default Dropdown
