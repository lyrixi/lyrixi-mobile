import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import Item from './Item'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 选择组
const Selector = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      ellipsis, // 省略配置

      // Status
      disabled,
      multiple,
      allowClear, // 单选是否允许取消选择

      // Style
      className,
      style,
      columns = 2, // 列数

      // Element
      id,

      // Events
      onChange
    },
    ref
  ) => {
    // 过滤非法数据
    // eslint-disable-next-line
    list = list.filter((item) => {
      if (!item || (!item.id && !item.name)) return false
      return true
    })

    // 展开/收起状态
    const [expanded, setExpanded] = useState(false)

    // 节点
    const rootRef = useRef(null)
    const instance = useRef({
      equalsItem: equals
    })
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        instance: instance.current,
        getElement: () => rootRef.current,
        getInstance: () => instance.current
      }
    })

    // 判断是否相同
    function equals(item1, item2) {
      if (item1.id && item2.id) {
        return item1.id === item2.id
      } else if (item1.name && item2.name) {
        return item1.name === item2.name
      } else {
        return false
      }
    }
    // 根据value判断此项是否为选中状态
    function getIsActive(item) {
      if (!Array.isArray(value) || !value.length) {
        return false
      }
      for (let activeItem of value) {
        if (equals(item, activeItem)) return true
        continue
      }
      return false
    }

    // 修改回调
    async function handleChange(checked, currentItem) {
      let newValue = []
      if (!multiple) {
        // 允许取消单选
        if (!checked && allowClear && Array.isArray(value) && value.length === 1) {
          newValue = []
        } else {
          newValue = [currentItem]
        }
      } else {
        // eslint-disable-next-line
        if (!Array.isArray(value)) value = []
        if (checked) {
          newValue.push(...value, currentItem)
        } else {
          newValue = value.filter((activeItem) => {
            if (equals(currentItem, activeItem)) return false
            return true
          })
        }
      }

      if (onChange) onChange(newValue)
    }

    // 处理展开/收起
    const handleToggleExpand = () => {
      setExpanded(!expanded)
    }

    // 判断是否需要显示省略按钮
    const hasEllipsis = ellipsis && ellipsis.count && list.length > ellipsis.count
    // 实际显示的列表
    const displayList = hasEllipsis && !expanded ? list.slice(0, ellipsis.count) : list

    return (
      <div
        ref={rootRef}
        // Element
        id={id}
        // Style
        style={Object.assign({ '--columns': columns }, style)}
        className={DOMUtil.classNames('lyrixi-selector', className)}
      >
        {/* Element: Items */}
        {displayList.map((item, index) => {
          return (
            <Item
              key={index}
              // Status
              disabled={disabled}
              checked={getIsActive(item)}
              // Events
              onChange={(checked) => handleChange(checked, item, index)}
            >
              {item.name}
            </Item>
          )
        })}

        {/* Element: Ellipsis */}
        {hasEllipsis && (
          <div
            className="lyrixi-selector-item lyrixi-selector-item-ellipsis"
            // Events
            onClick={handleToggleExpand}
          >
            <div className="lyrixi-selector-item-name">
              {expanded
                ? LocaleUtil.locale('收起', 'noKey_def9e98b60e3bfc493bcd7693e702096')
                : LocaleUtil.locale('更多', 'noKey_0ec9eaf9c3525eb110db58aae5912210')}
            </div>
            <i
              className={DOMUtil.classNames(
                'lyrixi-selector-item-ellipsis-icon',
                expanded ? 'lyrixi-selector-item-ellipsis-icon-expanded' : '',
                'lyrixi-iconfont-arrow-down'
              )}
            ></i>
          </div>
        )}
      </div>
    )
  }
)

export default Selector
