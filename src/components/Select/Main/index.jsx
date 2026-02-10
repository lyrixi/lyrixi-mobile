import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import Result from './../../Result'
import List from './../../List'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, Result, List } from 'lyrixi-mobile'
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
      checkable = true,

      // Style
      className,
      style,
      itemStyle,
      itemClassName,
      itemLayout,
      checkboxVariant,
      checkboxPosition,

      // Element
      itemRender,

      // Events
      onChange
    },
    ref
  ) => {
    // Expose
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current
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
        {ObjectUtil.isEmpty(list) && <Result className="lyrixi-select-main-result" status="empty" />}

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
          checkable={checkable}
          // Style
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          itemLayout={itemLayout}
          checkboxVariant={checkboxVariant}
          checkboxPosition={checkboxPosition}
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
