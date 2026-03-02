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
      url,
      headers,
      payload,
      formatPayload, // 格式化查询参数: ({ page }) => { return { rows: 必传, 默认值20, 用于计算分页} }
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
        modalClassName={DOMUtil.classNames('lyrixi-modal-listpagination', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        title={title}
        okVisible={multiple}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* Element: Header */}
        {getHeaderNode()}


        {/* Element: Main */}
        {open && <Main
          ref={mainRef}
          // Value & Display Value
          value={currentValue}
          url={url}
          headers={headers}
          payload={payload}
          formatPayload={formatPayload} // 格式化查询参数: ({page}) => { return {rows: 必传, 默认值20, 用于计算分页} }
          formatResult={formatResult}
          formatViewList={formatViewList}
          formatViewItem={formatViewItem}
          // Status
          errorRetry={errorRetry}
          emptyRetry={emptyRetry}
          allowClear={allowClear}
          multiple={multiple}
          checkable={checkable}
          disableTopRefresh={disableTopRefresh}
          disableBottomRefresh={disableBottomRefresh}
          virtual={virtual}
          // Element
          itemRender={itemRender}
          loadingRender={loadingRender}
          prependRender={prependRender}
          appendRender={appendRender}

          // Style
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
          // Events
          onChange={handleChange}
        />}
      </NavBarModal>
    )
  }
)

export default Modal
