import React, { forwardRef } from 'react'
import Item from './../Item'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Modal, { ModalRef } from './../../Modal/Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Modal } from 'lyrixi-mobile'
测试使用-end */

export interface ActionSheetItem {
  id: string | number
  name: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ActionSheetModalProps {
  value?: ActionSheetItem | null
  list?: ActionSheetItem[]
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: React.CSSProperties
  modalClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  itemStyle?: React.CSSProperties
  itemClassName?: string
  groupStyle?: React.CSSProperties
  groupClassName?: string
  portal?: boolean | HTMLElement
  title?: React.ReactNode
  cancelNode?: React.ReactNode
  cancelVisible?: boolean
  itemRender?: (
    item: ActionSheetItem,
    helpers: { onChange: (item: ActionSheetItem) => void }
  ) => React.ReactNode
  onChange?: (value: ActionSheetItem | null) => void
  onCancel?: () => void
  onClose?: () => void
}

const ActionSheetModal = forwardRef<ModalRef, ActionSheetModalProps>(
  (
    {
      // Value & Display Value
      value,
      list: listProp,

      // Status
      open = false,
      maskClosable = true,
      allowClear,

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      itemStyle,
      itemClassName,
      groupStyle,
      groupClassName,

      // Elements
      portal,
      title,
      cancelNode,
      cancelVisible,
      itemRender,

      // Events
      onChange,
      onCancel,
      onClose
    },
    ref
  ) => {
    // 过滤非法数据
    // eslint-disable-next-line
    const list = listProp?.filter?.((item) => {
      if (!item || (!item.id && !item.name)) return false
      return true
    })

    // 点击选项
    function handleChange(item: ActionSheetItem) {
      let currentValue: ActionSheetItem | null = item
      if (allowClear) {
        if (item.id === value?.id) {
          currentValue = null
        }
      }

      if (onChange) onChange(currentValue)
      if (onClose) onClose()
    }

    // 获取取消按钮节点
    function renderCancel() {
      if (cancelVisible === false) return null

      return (
        <div
          className="lyrixi-actionsheet-cancel"
          onClick={() => {
            if (onCancel) onCancel()
            if (onClose) onClose()
          }}
        >
          {cancelNode || LocaleUtil.locale('取消', 'lyrixi_625fb26b4b3340f7872b411f401e754c')}
        </div>
      )
    }

    return (
      <Modal
        ref={ref}
        // Status
        open={open}
        maskClosable={maskClosable}
        // Style
        portal={portal}
        safeArea={safeArea}
        animation="slideUp"
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-actionsheet', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        onClose={onClose}
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
                  style={itemStyle}
                  className={itemClassName}
                  onClick={(e) => {
                    item?.onClick?.(e)
                    handleChange(item)
                  }}
                >
                  {item.name}
                </Item>
              )
            })}
        </div>
        {renderCancel()}
      </Modal>
    )
  }
)

export default ActionSheetModal
