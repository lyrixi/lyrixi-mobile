import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import _ from 'lodash'

// 内库使用-start
import Result from './../../Result'
import List from './../../List'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Result, List } from 'lyrixi-mobile'
测试使用-end */

// Main
const Main = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      formatViewList,
      formatViewItem,

      // Status
      open = true,
      multiple,

      // Style
      className,
      style,
      layout,
      checkable = true,

      // Element
      itemRender,
      checkboxRender,

      // Events
      onChange
    },
    ref
  ) => {
    // Expose
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        mainDOM: mainRef.current,
        getMainDOM: () => mainRef.current
      }
    })

    return (
      <div
        ref={mainRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-select-main', className)}
      >
        {/* Element: Empty Result */}
        {_.isEmpty(list) && <Result className="lyrixi-select-main-result" status="empty" />}

        {/* Element: List */}
        <List
          // Value & Display Value
          value={value}
          list={list}
          formatViewList={formatViewList}
          formatViewItem={formatViewItem}
          // Status
          allowClear={multiple ? true : false}
          multiple={multiple}
          // Style
          checkable={checkable}
          // Element
          itemRender={itemRender}
          // Events
          onChange={onChange}
        />
      </div>
    )
  }
)

export default Main
