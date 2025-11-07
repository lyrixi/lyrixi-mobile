import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 评分组件
const Rate = forwardRef(
  (
    { iconRender, value = 0, min = 0, max = 5, step = 0.5, readOnly, disabled, onChange, ...props },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }
    }

    function getItemActiveWidth(itemValue) {
      // 当前项位于整数位
      if (itemValue <= value) {
        return '100%'
      }
      // 当前项位于小数位
      if (itemValue === Math.ceil(value)) {
        return `${(value - Math.floor(value)) * 100}%`
      }
      // 当前项超出
      return '0%'
    }

    // 获取图标节点
    function getIconNode(index, isActive = false) {
      if (typeof iconRender === 'function') {
        return iconRender({
          className: isActive
            ? 'lyrixi-input-rate-item-icon-active'
            : 'lyrixi-input-rate-item-icon',
          style: isActive ? { width: getItemActiveWidth(index + 1) } : undefined
        })
      }

      // 默认图标
      return (
        <div
          className={
            isActive
              ? 'lyrixi-input-rate-item-icon-active default'
              : 'lyrixi-input-rate-item-icon default'
          }
          style={isActive ? { width: getItemActiveWidth(index + 1) } : undefined}
        ></div>
      )
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-input-rate',
          className,
          readOnly ? 'lyrixi-readOnly' : '',
          disabled ? 'lyrixi-disabled' : ''
        )}
        ref={rootRef}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className="lyrixi-input-rate-input"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />

        {new Array(max).fill(1).map((item, index) => {
          const IconNode = getIconNode(index, false)
          const ActiveIconNode = getIconNode(index, true)

          return (
            <div className="lyrixi-input-rate-item" key={index}>
              {IconNode}
              {ActiveIconNode}
            </div>
          )
        })}
      </div>
    )
  }
)

export default Rate
