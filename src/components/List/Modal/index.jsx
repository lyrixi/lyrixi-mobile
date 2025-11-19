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
      // Value & Display Value
      value,
      loadData,
      list,

      // Status
      open,
      maskClosable,
      allowClear,
      multiple,
      pagination,
      disableTopRefresh,
      disableBottomRefresh,
      checkable,

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      titleNode,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,
      itemRender,
      itemLayout,

      // Events
      onClose,
      onOpen,
      onChange
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
        // Status
        open={open}
        maskClosable={maskClosable}
        // Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('list-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        titleNode={titleNode}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible !== undefined ? okVisible : multiple !== false}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          list={list}
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
