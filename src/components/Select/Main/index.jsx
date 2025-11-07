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
      // Modal
      open = true,

      // Main
      value,
      multiple,
      style,
      className,
      allowClear,
      onChange,

      // List
      list,
      itemRender,
      layout,
      checkable,
      checkboxRender
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
        style={style}
        className={DOMUtil.classNames('lyrixi-select-main', className)}
        ref={mainRef}
      >
        {_.isEmpty(list) && <Result className="lyrixi-select-main-result" status="empty" />}

        {/* 列表 */}
        <List
          allowClear={allowClear}
          multiple={multiple}
          value={value}
          list={list}
          itemRender={itemRender}
          onChange={onChange}
          checkable={checkable}
        />
      </div>
    )
  }
)

export default Main
