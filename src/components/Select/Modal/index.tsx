import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'
import type { SelectModalRootProps, SelectMainRef } from './../types'
import type { ListProps } from './../../List/List'
import type { ModalRef } from './../../../components/Modal/Modal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../../components/Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

const Modal = forwardRef<Record<string, unknown>, SelectModalRootProps>(function SelectModal(
  {
    value,
    list,
    formatViewList,
    formatViewItem,
    open,
    maskClosable,
    safeArea,
    multiple,
    checkable,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    itemStyle,
    itemClassName,
    itemLayout,
    checkboxVariant,
    checkboxPosition,
    portal,
    title,
    cancelNode,
    cancelVisible,
    headerRender,
    itemRender,
    onOk,
    onChange,
    onClose
  },
  ref
) {
  const [currentValue, setCurrentValue] = useState<unknown>(value)
  const modalRef = useRef<ModalRef | null>(null)
  const mainRef = useRef<SelectMainRef | null>(null)

  useImperativeHandle(ref, () => {
    return {
      ...(typeof modalRef.current === 'object' && modalRef.current !== null
        ? (modalRef.current as unknown as Record<string, unknown>)
        : {}),
      ...(typeof mainRef.current === 'object' && mainRef.current !== null
        ? (mainRef.current as unknown as Record<string, unknown>)
        : {})
    }
  })

  useEffect(() => {
    if (open) {
      setCurrentValue(value)
    }
  }, [open, value])

  function getHeaderNode() {
    if (typeof headerRender === 'function') {
      return headerRender({
        open: open ?? false,
        value: value,
        list: list
      })
    }
    return null
  }

  async function handleConfirm() {
    let next: unknown = currentValue
    if (typeof onOk === 'function') {
      const goOn = await onOk(currentValue)
      if (goOn === false) return false
      if (
        goOn instanceof Array ||
        (goOn !== null && goOn !== undefined && typeof goOn === 'object' && 'id' in (goOn as object))
      ) {
        next = goOn
        setCurrentValue(goOn)
      }
    }
    onChange?.(next)
    onClose?.()
  }

  function handleChange(newValue: unknown) {
    setCurrentValue(newValue)
    if (!multiple) {
      onChange?.(newValue)
      onClose?.()
    }
  }

  return (
    <NavBarModal
      ref={modalRef}
      open={open}
      maskClosable={maskClosable}
      safeArea={safeArea}
      modalStyle={modalStyle}
      modalClassName={DOMUtil.classNames('lyrixi-modal-select', modalClassName)}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      portal={portal}
      title={title}
      okVisible={multiple}
      cancelNode={cancelNode}
      cancelVisible={cancelVisible}
      onClose={onClose}
      onOk={handleConfirm}
    >
      {getHeaderNode()}

      <Main
        ref={mainRef}
        multiple={multiple}
        checkable={checkable}
        value={currentValue as ListProps['value']}
        list={list as ListProps['list']}
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        itemRender={itemRender}
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        itemLayout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        onChange={handleChange}
      />
    </NavBarModal>
  )
})

export default Modal
