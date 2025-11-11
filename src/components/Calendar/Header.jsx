import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 日历头部
const Header = forwardRef(
  (
    { className, onPreviousMonth, onNextMonth, onPreviousYear, onNextYear, children, style },
    ref
  ) => {
    // 容器
    const rootRef = useRef(null)

    // 暴露方法
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-calendar-header', className)}
      >
        <div className="lyrixi-calendar-previous-year" onClick={onPreviousYear}>
          &lt;&lt;
        </div>
        <div className="lyrixi-calendar-previous-month" onClick={onPreviousMonth}>
          &lt;
        </div>
        <div className="lyrixi-calendar-title">{children}</div>
        <div className="lyrixi-calendar-next-month" onClick={onNextMonth}>
          &gt;
        </div>
        <div className="lyrixi-calendar-next-year" onClick={onNextYear}>
          &gt;&gt;
        </div>
      </div>
    )
  }
)

export default Header
