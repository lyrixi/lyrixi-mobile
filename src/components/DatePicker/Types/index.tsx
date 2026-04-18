import React, { forwardRef, useRef, useEffect, useImperativeHandle } from 'react'

import WeekCombo from './WeekCombo'
import DateCombo from './DateCombo'

// 内库使用-start
import TabBar from './../../TabBar'
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { TabBar, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 日期类型选择控件: 年月日季
const Types = forwardRef(
  (
    {
      // Value & Display Value
      value,
      /*
    {
      type: 'date',
      name: '日',
      value: new Date()
    }
    */
      list = [
        {
          type: 'date',
          name: LocaleUtil.locale('日', 'lyrixi_3edddd85ac2c5e612fb71dbb89e7d1c5')
        },
        {
          type: 'week',
          id: 'week',
          name: LocaleUtil.locale('周', 'lyrixi_a657f46f5bb00961adfae80d12e41b3d')
        },
        {
          type: 'month',
          name: LocaleUtil.locale('月', 'lyrixi_e42b99d59954ce6437e66f416850425a')
        },
        {
          type: 'quarter',
          name: LocaleUtil.locale('季', 'lyrixi_afcd9a4cb1fd7f84c1e5a275768795d0')
        },
        {
          type: 'year',
          name: LocaleUtil.locale('年', 'lyrixi_465260fe80b0c3338d06194bb7a94446')
        }
      ],

      // Style
      style,
      className,
      pickerComboStyle = {},
      pickerComboClassName = '',
      tabbarStyle = {},
      tabbarClassName = '',
      // Status
      min,
      max,

      // Elements
      pickerComboRender,

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef?.current,
        getElement: () => rootRef?.current
      }
    })

    useEffect(() => {
      // 如果默认没有值, 则默认为当天
      if (!value) {
        let newValue = list[0]
        if (!newValue.value) {
          newValue.value = new Date()
        }
        handleChange(newValue)
      }
    }, []) // eslint-disable-line

    // 统一的修改方法
    function handleChange(newValue) {
      onChange?.(newValue)
    }

    // 点击Tab
    function handleTabs(newValue) {
      if (!newValue.type) return
      if (!newValue.value) newValue.value = value?.value || new Date()
      handleChange(newValue)
    }

    // 选择日期
    function handleDate(date) {
      value.value = date
      handleChange({ ...value })
    }

    // 获取选择控件的node
    function getPickerComboNode() {
      let pickerNode = undefined
      if (typeof pickerComboRender === 'function') {
        pickerNode = pickerComboRender(value, { onChange: handleDate })
      }
      if (pickerNode === undefined) {
        pickerNode =
          value.type === 'week' ? (
            <WeekCombo value={value?.value} min={min} max={max} onChange={handleDate} />
          ) : (
            <DateCombo
              type={value?.type}
              value={value?.value}
              min={min}
              max={max}
              onChange={handleDate}
            />
          )
      }

      return pickerNode
    }
    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-datepicker-types', className)}
        ref={rootRef}
      >
        {Array.isArray(list) && (
          <TabBar.Slide
            onChange={handleTabs}
            list={list}
            value={value}
            className={tabbarClassName}
            style={tabbarStyle}
          />
        )}
        <div
          style={pickerComboStyle}
          className={DOMUtil.classNames('lyrixi-datepicker-types-combo', pickerComboClassName)}
        >
          {value?.value instanceof Date ? getPickerComboNode() : null}
        </div>
      </div>
    )
  }
)

export default Types
