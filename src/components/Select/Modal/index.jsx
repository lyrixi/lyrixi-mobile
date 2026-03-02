import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../../components/Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      formatViewList,
      formatViewItem,

      // Status
      open,
      maskClosable,
      safeArea,
      multiple,
      checkable,

      // Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      itemStyle,
      itemClassName,
      itemLayout,
      checkboxVariant,
      checkboxPosition,

      // Elements
      portal,
      title,
      cancelNode,
      cancelVisible,
      headerRender,
      itemRender,

      // Events
      onOk,
      onChange,
      onClose
    },
    ref
  ) => {
    let [currentValue, setCurrentValue] = useState(value)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current,
        ...mainRef.current
      }
    })

    // 同步外部value到内部
    useEffect(() => {
      if (open) {
        setCurrentValue(value)
      }
    }, [open, value])

    function getHeaderNode() {
      if (typeof headerRender === 'function') {
        return headerRender({
          open: open,
          value: value,
          list: list
        })
      }
      return null
    }

    async function handleOk() {
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Array || goOn?.id) {
          // eslint-disable-next-line
          currentValue = goOn
        }
      }
      onChange?.(currentValue)
      onClose?.()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (!multiple) {
        onChange?.(newValue)
        onClose && onClose()
      }
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Status
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        // Style
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-select', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        title={title}
        okVisible={multiple !== false}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* Element: Header */}
        {getHeaderNode()}

        {/* Element: Main */}
        <Main
          ref={mainRef}
          // Status
          open={open}
          multiple={multiple}
          checkable={checkable}
          // Value & Display Value
          value={currentValue}
          list={list}
          formatViewList={formatViewList}
          formatViewItem={formatViewItem}
          // Element
          itemRender={itemRender}
          // Style
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          itemLayout={itemLayout}
          checkboxVariant={checkboxVariant}
          checkboxPosition={checkboxPosition}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default Modal
