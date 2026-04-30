import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import Main, { ListPaginationRef, ListPaginationProps } from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../../components/Modal/NavBarModal'
import { ModalRef } from './../../../components/Modal/Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

type RawItem = Record<string, unknown>
type ItemChangeArg = RawItem & { checked?: boolean }

export interface ModalPaginationRef extends ModalRef {
  reload?: ListPaginationRef['reload']
  getResult?: ListPaginationRef['getResult']
  updateCache?: ListPaginationRef['updateCache']
  clearCache?: ListPaginationRef['clearCache']
  getCache?: ListPaginationRef['getCache']
}

export interface ModalPaginationProps extends ListPaginationProps {
  // Modal-specific props
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  list?: RawItem[]
  modalStyle?: React.CSSProperties
  modalClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  title?: React.ReactNode
  cancelNode?: React.ReactNode
  cancelVisible?: boolean
  headerRender?: (options: { open?: boolean; value?: unknown; list?: RawItem[] }) => React.ReactNode
  onOk?: (value: unknown) => Promise<unknown | false> | unknown | false
  onClose?: () => void
}

// Modal
const Modal = forwardRef<ModalPaginationRef, ModalPaginationProps>(
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

    useImperativeHandle(ref, () => {
      return {
        ...(modalRef.current as ModalRef),
        ...(mainRef.current as ListPaginationRef)
      } as ModalPaginationRef
    })

    // 同步外部value到内部
    useEffect(() => {
      if (open) {
        setCurrentValue(value ?? null)
      }
    }, [open, value])

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

export default Modal
