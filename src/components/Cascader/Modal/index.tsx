import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle, type ReactNode, type CSSProperties, type Ref } from 'react'
import type { CascaderMainRef } from './../Main'
import type { CascaderNode, LoadDataFn } from './../cascaderTypes'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

export interface CascaderModalProps {
  value?: CascaderNode[] | null
  list?: CascaderNode[] | null
  loadData?: LoadDataFn
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: string | boolean | HTMLElement | null
  searchVisible?: boolean
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onClose?: () => void
  onOk?: (value: CascaderNode[] | null | undefined) => boolean | Promise<unknown> | void
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => void
  onChange?: (value: CascaderNode[], meta?: unknown) => void
}

// Modal
const CascaderModal = forwardRef<Record<string, unknown>, CascaderModalProps>(
  (
    {
      value,
      list,
      loadData,
      open,
      maskClosable,
      allowClear: _allowClear,
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      searchVisible,
      title,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,
      onClose,
      onOk,
      onSearch,
      onChange
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState<CascaderNode[] | null | undefined>(value)

    const modalRef = useRef<unknown>(null)

    const mainRef = useRef<CascaderMainRef | null>(null)


    useEffect(() => {
      setCurrentValue(value)
    }, [value])


    useImperativeHandle(ref, () => {
      const a = (modalRef.current as Record<string, unknown> | null) ?? {}
      const b = (mainRef.current as CascaderMainRef | null) ?? ({} as CascaderMainRef)
      return { ...a, ...b } as Record<string, unknown>
    })


    async function handleOk() {
      if (onOk) {
        const goOn = await onOk(currentValue)
        if (goOn === false) {
          return false
        }
        if (goOn instanceof Date) {
          /* legacy: Date return path kept for API compat */
        }
      }

      if (onChange) {
        onChange((currentValue ?? []) as CascaderNode[])
      }
      onClose?.()
    }


    function handleChange(newValue: CascaderNode[], _newArguments?: unknown) {
      setCurrentValue(newValue)

      const lastTab = Array.isArray(newValue) && newValue.length ? newValue[newValue.length - 1] : null
      if (lastTab?.isLeaf) {
        onChange?.(newValue)
        onClose?.()
      }
    }


    return (
      <NavBarModal
        ref={modalRef as Ref<unknown> as never}
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-cascader', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible}
        cancelVisible={cancelVisible}
        onClose={onClose}
        onOk={handleOk}
      >
        {open && (
          <Main
            ref={mainRef}
            value={currentValue ?? undefined}
            searchVisible={searchVisible}
            list={list ?? undefined}
            loadData={loadData}
            onSearch={onSearch}
            onChange={handleChange as (v: CascaderNode[]) => void}
          />
        )}
      </NavBarModal>
    )
  }
)

export default CascaderModal
