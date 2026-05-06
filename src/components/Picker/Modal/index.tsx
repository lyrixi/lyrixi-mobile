import React, {
  useEffect,
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  type ReactNode,
  type Ref
} from 'react'
import Main, { type PickerMainRef, type PickerMainProps } from './../Main'


import type { ModalRef } from './../../Modal/Modal/types'
import type { PickerColumnItem } from './../Main/types'
import type { PickerModalProps } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef<ModalRef, PickerModalProps>(function PickerModal(
  {
    // Value & Display Value
    value,
    list,

    // Status
    open,
    maskClosable,
    allowClear,

    // Style
    safeArea,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,

    // Elements
    portal,
    title,
    okNode,
    cancelNode,
    okVisible,
    cancelVisible,

    // Events
    onClose,
    onOk,
    onChange
  },
  ref: Ref<ModalRef>
) {
  let [currentValue, setCurrentValue] = useState<unknown>(value)

  const modalRef = useRef<ModalRef | null>(null)

  const mainRef = useRef<PickerMainRef | null>(null)


    // 同步外部value到内部
    useEffect(() => {
      setCurrentValue(value)
    }, [value])


  useImperativeHandle(
    ref,
    () => {
      return {
        ...((typeof modalRef.current === 'object' && modalRef.current !== null
          ? modalRef.current
          : {}) as ModalRef),
        ...((typeof mainRef.current === 'object' && mainRef.current !== null ? mainRef.current : {}) as Record<string, unknown>)
      } as ModalRef
    },
    []
  )


    async function handleOk() {
      // 触发 onOk
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Date) {
          currentValue = goOn
        }
      }

      onChange?.(currentValue)
      onClose?.()
    }


  function handleChange(newValue: PickerColumnItem[]) {
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
        modalClassName={DOMUtil.classNames('lyrixi-modal-picker', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={true}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* 弹窗打开时, 再渲染主页面, 主要为了重置鼠标拖动标识 */}
        <Main
          ref={mainRef}
          // Modal: Status
          open={open}
          // Value & Display Value
          value={currentValue as PickerMainProps['value']}
          list={list as PickerMainProps['list']}
          // Status
          allowClear={allowClear}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)
export type { PickerModalProps } from './types'

export default Modal
