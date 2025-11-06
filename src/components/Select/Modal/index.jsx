import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import ToolBar from './../../../components/ToolBar'
import List from './../../../components/List'
import NavBarModal from './../../../components/Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, ToolBar, List, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Modal
      portal,
      value,
      allowClear,
      multiple,
      onChange,
      open,
      onClose,
      onOpen,
      headerRender,

      // Main
      list,

      // List config
      itemRender,
      layout,
      checkable,
      checkboxRender,

      modalClassName,
      modalStyle,

      ...props
    },
    ref
  ) => {
    // 没有设置headerRender的情况下, 大于15项显示搜索
    const [keyword, setKeyword] = useState('')
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
        setCurrentValue(formatValue(value))
      }
    }, [open, value])

    let searchHeaderRender =
      Array.isArray(list) && list.length > 15
        ? () => {
            return (
              <ToolBar invert>
                <ToolBar.Search
                  value={keyword}
                  onSearch={(newKeyword) => {
                    setKeyword(newKeyword)
                  }}
                />
              </ToolBar>
            )
          }
        : null
    let searchHeaderVisible = headerRender !== undefined ? false : searchHeaderRender

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
        portal={portal}
        modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        {searchHeaderVisible && searchHeaderVisible()}
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          list={searchHeaderVisible ? List.searchList(list, keyword) : list}
          itemRender={itemRender}
          layout={layout}
          checkable={checkable}
          checkboxRender={checkboxRender}
        />
      </NavBarModal>
    )
  }
)

export default Modal
