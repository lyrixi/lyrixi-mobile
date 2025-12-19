import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
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
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-calendar-header', className)}
      >
        <div className="lyrixi-calendar-previous-year" onClick={onPreviousYear}>
          <Icon className="lyrixi-iconfont-arrow-left" color="tertiary" size="s" />
          <Icon
            className="lyrixi-iconfont-arrow-left"
            color="tertiary"
            size="s"
            style={{ marginLeft: '-4px' }}
          />
        </div>
        <div className="lyrixi-calendar-previous-month" onClick={onPreviousMonth}>
          <Icon className="lyrixi-iconfont-arrow-left" color="tertiary" size="s" />
        </div>
        <div className="lyrixi-calendar-title">{children}</div>
        <div className="lyrixi-calendar-next-month" onClick={onNextMonth}>
          <Icon className="lyrixi-iconfont-arrow-right" color="tertiary" size="s" />
        </div>
        <div className="lyrixi-calendar-next-year" onClick={onNextYear}>
          <Icon
            className="lyrixi-iconfont-arrow-right"
            color="tertiary"
            size="s"
            style={{ marginRight: '-4px' }}
          />
          <Icon className="lyrixi-iconfont-arrow-right" color="tertiary" size="s" />
        </div>
      </div>
    )
  }
)

export default Header
