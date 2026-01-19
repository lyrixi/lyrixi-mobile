import React, { useState, forwardRef } from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Ellipsis = forwardRef(
  (
    {
      // Status
      ellipsis,
      // Element
      children
    },
    ref
  ) => {
    // 展开和收缩
    const [expanded, setExpanded] = useState(ellipsis?.defaultExpanded || false)

    return (
      <div
        ref={ref}
        className={DOMUtil.classNames('lyrixi-text-ellipsis', expanded ? 'lyrixi-expanded' : '')}
        style={ellipsis?.rows ? { WebkitLineClamp: expanded ? 999 : ellipsis?.rows } : {}}>
        {/* Element: 展开和收缩按钮 */}
        {ellipsis?.expandable && <div
          className="lyrixi-text-ellipsis-toggle"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
        >
          {expanded
            ? LocaleUtil.locale('收起', 'lyrixi.lyrixi.text.ellipsis.ellipsis.toggle.collapse')
            : LocaleUtil.locale('展开', 'lyrixi.lyrixi.text.ellipsis.ellipsis.toggle.expand')}
        </div>}
        {/* Element: 内容 */}
        {children}
      </div>
    )
  }
)

export default Ellipsis
