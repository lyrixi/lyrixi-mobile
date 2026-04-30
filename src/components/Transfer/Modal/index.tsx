import React, { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
import type { ModalRef } from './../../Modal/Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

import type { TransferItem, TransferModalProps } from './../types'

// Modal
const Modal = forwardRef<unknown, TransferModalProps>(function TransferModal(
  {
    value,
    list,
    titles,
    open,
    maskClosable,
    allowClear,
    safeArea,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    portal,
    title,
    okNode,
    cancelNode,
    okVisible,
    cancelVisible,
    onClose,
    onOk,
    onChange
  },
  ref
) {
  const [currentValue, setCurrentValue] = useState<TransferItem[] | undefined>(value)

  const modalRef = useRef<ModalRef | null>(null)

  const mainRef = useRef<unknown>(null)


  // 同步外部 value 到内部
  useEffect(() => {
    if (open) {
      setCurrentValue(formatValue(value))
    }
  }, [open, value])


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


  async function handleOk() {
    if (onOk) {
      const v = currentValue ?? []
      const goOn = await onOk(v)
      if (goOn === false) return false
    }

    onChange?.(currentValue ?? [])
    onClose?.()
  }


  function handleChange(newValue: TransferItem[]) {
    setCurrentValue(newValue)
  }


  return (
    <NavBarModal
      ref={modalRef}
      // Status
      open={open}
      maskClosable={maskClosable}
      // Style
      safeArea={safeArea}
      modalStyle={modalStyle}
      modalClassName={DOMUtil.classNames('lyrixi-modal-transfer', modalClassName)}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      // Elements
      portal={portal}
      title={title}
      okNode={okNode}
      okVisible={okVisible !== undefined ? okVisible : true}
      cancelNode={cancelNode}
      cancelVisible={cancelVisible}
      // Events
      onClose={onClose}
      onOk={handleOk}
    >
      <Main
        ref={mainRef}
        value={currentValue ?? []}
        list={list ?? []}
        titles={titles}
        allowClear={allowClear}
        onChange={handleChange}
      />
    </NavBarModal>
  )
})

export default Modal
