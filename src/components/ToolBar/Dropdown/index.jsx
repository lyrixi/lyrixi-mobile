import React, { useImperativeHandle, useRef, useEffect, useState, forwardRef } from 'react'
import closeAllDropdown from './../utils/closeAllDropdown'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import DOMUtil from './../../../utils/DOMUtil'
import DropdownModal from './../../Modal/DropdownModal'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, DOMUtil, Modal, Button } from 'lyrixi-mobile'
const DropdownModal = Modal.DropdownModal
测试使用-end */

const Dropdown = forwardRef(
  (
    {
      // Combo
      title = '',
      titleRender,
      arrowRender = () => (
        <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>
      ),

      // Button Style
      comboColor = 'default',
      comboBackgroundColor,
      comboShape,
      comboBorder,
      comboRadius,
      comboSize,

      // Mask

      children,

      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      comboStyle,
      comboClassName,
      offset = {
        top: 6
      },
      left,
      right,

      onBeforeOpen,
      onClose,
      onOpen
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
      if (open) {
        // 打开前先关闭其他所有 dropdown
        closeAllDropdown({ exceptId: idRef.current })
        onOpen && onOpen()
      } else {
        onClose && onClose()
      }

      // eslint-disable-next-line
    }, [open])

    function _close() {
      setOpen(false)
    }

    function _open() {
      setOpen(true)
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
    function getTitleNode(open) {
      if (typeof titleRender === 'function') {
        return titleRender({
          className: 'toolbar-dropdown-combo-title',
          open: open
        })
      }
      return <span className="lyrixi-toolbar-dropdown-combo-title">{title}</span>
    }

    // 获取箭头节点
    function getArrowNode(open) {
      if (typeof arrowRender === 'function') {
        return arrowRender({ open: open })
      }
      return <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>
    }

    return (
      <>
        {/* Combo */}
        <Button
          ref={comboRef}
          color={comboColor}
          backgroundColor={comboBackgroundColor}
          border={comboBorder}
          size={comboSize || 's'}
          radius={comboRadius || 's'}
          shape={comboShape}
          className={DOMUtil.classNames(
            'lyrixi-toolbar-dropdown-combo lyrixi-toolbar-button',
            comboClassName,
            open ? 'lyrixi-expand' : ''
          )}
          style={comboStyle}
          onClick={handleClick}
        >
          {getTitleNode(open)}
          {getArrowNode(open)}
        </Button>

        {/* Modal */}
        <DropdownModal
          modalClassName={DOMUtil.classNames('lyrixi-toolbar-dropdown-modal', modalClassName)}
          modalStyle={modalStyle}
          maskClassName={DOMUtil.classNames('lyrixi-toolbar-dropdown-mask', maskClassName)}
          maskStyle={maskStyle}
          offset={offset}
          left={left}
          right={right}
          referenceDOM={comboRef.current?.rootDOM ? comboRef.current.rootDOM : comboRef.current}
          portal={portal}
          onClose={() => {
            setOpen(false)
          }}
          open={open}
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
