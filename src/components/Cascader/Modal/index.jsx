import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
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
      // Modal
      open,
      onClose,
      value,
      allowClear,
      multiple,
      onChange,

      modalClassName,
      modalStyle,

      // Filter useless props to protect the feature
      searchVisible,

      list,
      loadData,
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

    // 同步外部value到内部currentValue
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
        open={open}
        onClose={onClose}
        ok={null}
        onOk={handleOk}
        {...props}
        modalClassName={DOMUtil.classNames('lyrixi-cascader-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          searchVisible={searchVisible}
          list={list}
          loadData={loadData}
        />
      </NavBarModal>
    )
  }
)

export default CascaderModal
