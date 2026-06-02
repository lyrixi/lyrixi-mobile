import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import type { ListProps } from './../../List/types'
import type { SelectMainProps, SelectMainRef } from './../types'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import Result from './../../Result'
import List from './../../List'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, Result, List } from 'lyrixi-mobile'
测试使用-end */

const Main = forwardRef<SelectMainRef, SelectMainProps>(function SelectMain(
  {
    // Value & Display Value
    value,
    list,
    formatViewList,
    formatViewItem,
    multiple,
    checkable = true,
    // Style
    className,
    style,
    itemStyle,
    itemClassName,
    // Value & Display Value
    itemLayout,
    checkboxVariant,
    checkboxPosition,
    // Elements
    itemRender,
    // Events
    onChange
  },
  ref
) {
  const mainRef = useRef<HTMLDivElement | null>(null)
  useImperativeHandle(ref, () => {
    return {
      mainElement: mainRef.current,
      getMainElement: () => mainRef.current
    }
  })

  return (
    <div
      ref={mainRef}
      style={style}
      className={DOMUtil.classNames('lyrixi-select-main', className)}
    >
      {ObjectUtil.isEmpty(list) && <Result className="lyrixi-select-main-result" status="empty" />}

      <List
        value={value}
        list={list}
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        allowClear={multiple ? true : false}
        multiple={multiple}
        checkable={checkable}
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        itemLayout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        itemRender={itemRender}
        onChange={onChange as ListProps['onChange']}
      />
    </div>
  )
})

export default Main
