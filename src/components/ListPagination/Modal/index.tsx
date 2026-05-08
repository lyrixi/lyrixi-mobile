import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'


import type {
  ListPaginationProps,
  ListPaginationRef,
  ListPaginationModalProps,
  ListPaginationModalRef
} from './../types'
import type { ModalRef } from './../../Modal/types'
import type { RawItem } from './../../List/types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

type ItemChangeArg = RawItem & { checked?: boolean }

// Modal
const Modal = forwardRef<ListPaginationModalRef, ListPaginationModalProps>(
  (
    {
      // Value & Display Value
      value,
      list,
      url,
      headers,
      payload,
      pagination,
      formatPayload,
      formatResult,
      formatViewList,
      formatViewItem,

      // Status
      open,
      maskClosable,
      safeArea,
      errorRetry,
      emptyRetry,
      allowClear,
      multiple,
      checkable,
      disableTopRefresh,
      disableBottomRefresh,
      virtual,

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
      loadingModalStyle,
      loadingModalClassName,
      loadingMaskStyle,
      loadingMaskClassName,
      loadingPortal,

      // Elements
      portal,
      title,
      cancelNode,
      cancelVisible,
      headerRender,
      itemRender,
      loadingRender,
      prependRender,
      appendRender,

      // Events
      onOk,
      onChange,
      onClose
    },
    ref
  ) => {
    let [currentValue, setCurrentValue] = useState<RawItem | RawItem[] | null>(() => value ?? null)
    const modalRef = useRef<ModalRef | null>(null)
    const mainRef = useRef<ListPaginationRef | null>(null)

    // 同步外部value到内部
    useEffect(() => {
      if (open) {
        setCurrentValue(value ?? null)
      }
    }, [open, value])

    useImperativeHandle(ref, () => {
      return {
        ...(modalRef.current as ModalRef),
        ...(mainRef.current as ListPaginationRef)
      } as ListPaginationModalRef
    })

    async function handleOk() {
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (Array.isArray(goOn) || (goOn as RawItem)?.id) {
          currentValue = goOn as RawItem | RawItem[]
        }
      }
      const checked = (Array.isArray(currentValue) ? currentValue[0] : currentValue) as ItemChangeArg
      onChange?.(currentValue, { checkedItem: checked })
      onClose?.()
    }

    function handleChange(
      newValue: RawItem | RawItem[] | null,
      options: { checkedItem: ItemChangeArg }
    ) {
      setCurrentValue(newValue)
      if (!multiple) {
        onChange?.(newValue, options)
        onClose?.()
      }
    }

    function renderHeader() {
      if (typeof headerRender === 'function') {
        return headerRender({
          open: open,
          value: value,
          list: list
        })
      }
      return null
    }

    return (
      <NavBarModal
        ref={modalRef}
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-listpagination', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        portal={portal}
        title={title}
        okVisible={multiple}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        onClose={onClose}
        onOk={handleOk}
      >
        {renderHeader()}

        {open && (
          <Main
            ref={mainRef}
            value={currentValue as ListPaginationProps['value']}
            url={url}
            headers={headers}
            payload={payload}
            pagination={pagination}
            formatPayload={formatPayload}
            formatResult={formatResult}
            formatViewList={formatViewList}
            formatViewItem={formatViewItem}
            errorRetry={errorRetry}
            emptyRetry={emptyRetry}
            allowClear={allowClear}
            multiple={multiple}
            checkable={checkable}
            disableTopRefresh={disableTopRefresh}
            disableBottomRefresh={disableBottomRefresh}
            virtual={virtual}
            itemRender={itemRender}
            loadingRender={loadingRender}
            prependRender={prependRender}
            appendRender={appendRender}
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            itemLayout={itemLayout}
            checkboxVariant={checkboxVariant}
            checkboxPosition={checkboxPosition}
            loadingModalStyle={loadingModalStyle}
            loadingModalClassName={loadingModalClassName}
            loadingMaskStyle={loadingMaskStyle}
            loadingMaskClassName={loadingMaskClassName || 'lyrixi-mask-listpagination-loading'}
            loadingPortal={loadingPortal}
            onChange={handleChange}
          />
        )}
      </NavBarModal>
    )
  }
)
export type { ListPaginationModalProps, ListPaginationModalRef } from './../types'

export default Modal
