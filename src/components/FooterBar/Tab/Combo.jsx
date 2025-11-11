import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
function Combo(
  {
    // Combo: Status
    disabled,
    open,

    // Combo: Value & Display Value
    name,

    list,

    // Combo: Style
    style,
    className,

    // Combo: Elements
    iconRender,

    // Events
    onClick
  },
  ref
) {
  const comboRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      comboDOM: comboRef.current,
      getComboDOM: () => {
        return comboRef.current
      }
    }
  })

  const hasMore = Array.isArray(list) && list.length

  // 获取图标节点
  function getIconNode() {
    if (typeof iconRender === 'function') {
      return iconRender()
    }

    // 默认图标
    if (hasMore) {
      return <i className="lyrixi-footerbar-tab-icon-more"></i>
    }

    return null
  }
  const IconNode = getIconNode()

  return (
    <div
      ref={comboRef}
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-tab',
        className,
        disabled ? 'lyrixi-disabled' : '',
        open ? 'lyrixi-expand' : ''
      )}
      onClick={onClick}
    >
      <span className="lyrixi-footerbar-tab-icon">{IconNode}</span>
      <div className="lyrixi-footerbar-tab-name">{name}</div>
    </div>
  )
}

export default forwardRef(Combo)
