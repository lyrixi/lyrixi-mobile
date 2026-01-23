import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
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
const CascaderModal = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      loadData,

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
      searchVisible, // Filter useless props to protect the feature
      title,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,

      // Events
      onClose,
      onOk,
      onSearch,
      onChange
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

    // 同步外部value到内部currentValue
    useEffect(() => {
      setCurrentValue(value)
    }, [value])

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

    function handleChange(newValue, newArguments) {
      setCurrentValue(newValue)

      // 单选时，如果是叶子节点，立即关闭
      let lastTab =
        Array.isArray(newValue) && newValue.length ? newValue[newValue.length - 1] : null
      if (lastTab?.isLeaf) {
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
        modalClassName={DOMUtil.classNames('lyrixi-cascader-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Element
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* 弹窗打开时, 再渲染主页面, 避免用户未点击就加载的问题 */}
        {open && (
          <Main
            ref={mainRef}
            value={currentValue}
            allowClear={allowClear}
            searchVisible={searchVisible}
            list={list}
            loadData={loadData}
            onSearch={onSearch}
            onChange={handleChange}
          />
        )}
      </NavBarModal>
    )
  }
)

export default CascaderModal
