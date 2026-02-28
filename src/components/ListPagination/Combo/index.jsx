import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Input } from 'lyrixi-mobile'
测试使用-end */

const Combo = forwardRef(
  (
    {
      // Combo
      // Combo: Value & Display Value
      value,
      placeholder,
      formatter,
      autoSize,
      separator,
      mode,
      // Combo: Status
      readOnly,
      disabled,
      allowClear,
      // Combo: Style
      style,
      className,
      // Combo: Element
      leftIconNode,
      rightIconNode,
      clearRender,

      // Modal
      // Modal: Value & Display Value
      url,
      headers,
      payload,
      formatPayload, // 格式化查询参数: ({ page }) => { return { rows: 必传, 默认值20, 用于计算分页} }
      formatResult,
      formatViewList,
      formatViewItem,
      // Modal: Status
      maskClosable,
      errorRetry,
      emptyRetry,
      multiple,
      checkable,
      disableTopRefresh,
      disableBottomRefresh,
      virtual,
      // Modal: Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      checkboxVariant,
      checkboxPosition,
      itemStyle,
      itemClassName,
      itemLayout,
      // Modal: Elements
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
      onBeforeOpen
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    function handleChange(newValue) {
      onChange?.(newValue)
      setOpen(false)
    }

    return (
      <>
        <Input.Select
          ref={comboRef}
          // Combo: Value & Display Value
          value={value}
          placeholder={placeholder}
          formatter={formatter}
          autoSize={autoSize}
          separator={separator}
          mode={mode}
          multiple={multiple}
          // Combo: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Combo: Style
          style={style}
          className={className}
          // Combo: Element
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          // Modal: Value & Display Value
          value={value}
          url={url}
          headers={headers}
          payload={payload}
          formatPayload={formatPayload} // 格式化查询参数: ({ page }) => { return { rows: 必传, 默认值20, 用于计算分页} }
          formatResult={formatResult}
          formatViewList={formatViewList}
          formatViewItem={formatViewItem}
          // Modal: Status
          open={open}
          maskClosable={maskClosable}
          safeArea={safeArea}
          errorRetry={errorRetry}
          emptyRetry={emptyRetry}
          allowClear={allowClear}
          multiple={multiple}
          checkable={checkable}
          disableTopRefresh={disableTopRefresh}
          disableBottomRefresh={disableBottomRefresh}
          virtual={virtual}
          // Style
          modalStyle={modalStyle}
          modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          itemLayout={itemLayout}
          checkboxVariant={checkboxVariant}
          checkboxPosition={checkboxPosition}
          // Modal: Elements
          portal={portal}
          title={title}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          headerRender={headerRender}
          itemRender={itemRender}
          loadingRender={loadingRender}
          prependRender={prependRender}
          appendRender={appendRender}
          // Events
          onOk={onOk}
          onChange={handleChange}
          onClose={handleClose}
        />
      </>
    )
  }
)

export default Combo
