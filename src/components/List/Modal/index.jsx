import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const ListModal = forwardRef(
  (
    {
      // Modal
      value,
      allowClear,
      multiple,
      onChange,
      open,
      onClose,
      onOpen,

      modalClassName,
      modalStyle,

      // Main
      // 新版：加载数据方法，返回 { status, message, list }
      loadData,
      pagination,
      disableTopRefresh,
      disableBottomRefresh,

      // List config
      itemRender,
      itemLayout,
      checkable,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(value)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current,
        ...mainRef.current
      }
    })

    // 同步外部value到内部
    React.useEffect(() => {
      if (open) {
        setCurrentValue(value)
      }
    }, [open, value])

    async function handleOk() {
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      onClose && onClose()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue)
        }
        onClose && onClose()
      }
    }

    return (
      <NavBarModal
        ref={modalRef}
        {...props}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
        ok={multiple !== false}
        modalClassName={DOMUtil.classNames('lyrixi-list-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          loadData={loadData}
          pagination={pagination}
          disableTopRefresh={disableTopRefresh}
          disableBottomRefresh={disableBottomRefresh}
          itemRender={itemRender}
          itemLayout={itemLayout}
          checkable={checkable}
        />
      </NavBarModal>
    )
  }
)

export default ListModal
