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
      // Value & Display Value
      value,
      list,

      // Status
      open,
      maskClosable,
      safeArea,
      allowClear,
      multiple,

      // Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      layout,
      checkable,

      // Elements
      portal,
      titleNode,
      cancelNode,
      cancelVisible,
      headerRender,
      itemRender,
      checkboxRender,

      // Events
      onChange,
      onClose
    },
    ref
  ) => {
    const searchVisibleRef = useRef(false)
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

    function getHeaderNode() {
      searchVisibleRef.current = false
      if (typeof headerRender === 'function') {
        return headerRender({
          open: open,
          value: value,
          list: list
        })
      }
      if (Array.isArray(list) && list.length > 15) {
        searchVisibleRef.current = true
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
      return null
    }

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
        safeArea={safeArea}
        // Style
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-select-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        titleNode={titleNode}
        okVisible={multiple !== false}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* Element: Header */}
        {getHeaderNode()}

        {/* Element: Main */}
        <Main
          ref={mainRef}
          // Status
          open={open}
          allowClear={allowClear}
          multiple={multiple}
          // Value & Display Value
          value={currentValue}
          list={searchVisibleRef.current ? List.searchList(list, keyword) : list}
          // Element
          itemRender={itemRender}
          checkboxRender={checkboxRender}
          // Style
          layout={layout}
          checkable={checkable}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default Modal
