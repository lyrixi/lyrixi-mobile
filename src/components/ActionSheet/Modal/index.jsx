import React, { forwardRef } from 'react'
import Item from './../Item'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Modal from './../../Modal/Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Modal } from 'lyrixi-mobile'
测试使用-end */

const ActionSheetModal = forwardRef(
  (
    {
      open = false,

      // Components
      itemRender,
      // Value
      allowClear,
      value,
      list,

      // Style
      maskClosable = true,
      title,
      cancel,
      modalStyle,
      modalClassName,
      groupClassName,
      groupStyle,
      optionClassName,
      optionStyle,

      // Events
      onChange,
      onCancel,
      onClose,
      ...props
    },
    ref
  ) => {
    // 过滤非法数据
    // eslint-disable-next-line
    list = list.filter((item) => {
      if (!item || (!item.id && !item.name)) return false
      return true
    })

    // 点击选项
    async function handleChange(item) {
      let currentValue = item
      if (allowClear) {
        if (item.id === value?.id) {
          currentValue = null
        }
      }

      if (onChange) onChange(currentValue)
      if (onClose) onClose()
    }

    // 获取取消按钮节点
    function getCancelNode() {
      if (cancel === null) return null

      return (
        <div
          className="lyrixi-actionsheet-cancel"
          onClick={() => {
            if (onCancel) onCancel()
            if (onClose) onClose()
          }}
        >
          {cancel || LocaleUtil.locale('取消', 'lyrixi_cancel')}
        </div>
      )
    }
    return (
      <Modal
        ref={ref}
        open={open}
        onClose={onClose}
        {...props}
        animation="slideUp"
        modalClassName={DOMUtil.classNames('lyrixi-actionsheet-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        {title && (
          <div className="lyrixi-actionsheet-header">
            <div className="lyrixi-actionsheet-header-title">{title}</div>
          </div>
        )}
        <div
          style={groupStyle}
          className={DOMUtil.classNames('lyrixi-actionsheet-main', groupClassName)}
        >
          {list &&
            list.map((item, index) => {
              if (typeof itemRender === 'function') {
                return itemRender(item, { onChange: handleChange })
              }

              return (
                <Item
                  key={item?.id || index}
                  checked={item?.id === value?.id}
                  disabled={item?.disabled}
                  style={optionStyle}
                  className={optionClassName}
                  onClick={() => {
                    handleChange(item)
                  }}
                >
                  {item.name}
                </Item>
              )
            })}
        </div>
        {getCancelNode()}
      </Modal>
    )
  }
)

export default ActionSheetModal
