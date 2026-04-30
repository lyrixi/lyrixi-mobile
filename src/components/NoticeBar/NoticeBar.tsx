import React, { forwardRef, useRef, useImperativeHandle, useState, type ReactNode } from 'react'
import getDefaultIconClassName from './getDefaultIconClassName'
import type { NoticeBarProps, NoticeBarRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

export type { NoticeBarProps, NoticeBarRef } from './types'

// 通告栏
const NoticeBar = forwardRef<NoticeBarRef, NoticeBarProps>(
  (
    {
      // Value & Display Value
      title,
      description,

      // Status
      type = 'info', // success,info,warning,error
      closable,

      // Style
      style,
      className,

      // Elements
      iconRender,
      iconClassName,
      iconColor,
      iconBackgroundColor,
      iconSize = 'm'
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(true)

    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current,
        close: () => setVisible(false),
        open: () => setVisible(true)
      }
    })

    // 不显示
    if (!visible) return null

    // 获取图标节点
    function renderIcon(): ReactNode {
      // 自定义图标渲染
      if (typeof iconRender === 'function') {
        return iconRender()
      }

      // 默认图标
      const resolvedIconClassName = iconClassName || getDefaultIconClassName(type)
      if (resolvedIconClassName) {
        return (
          <Icon
            className={resolvedIconClassName}
            size={iconSize !== null && iconSize !== undefined ? String(iconSize) : undefined}
            color={iconColor}
            backgroundColor={iconBackgroundColor}
          />
        )
      }

      return null
    }

    const IconNode = renderIcon()

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-noticebar',
          type && `lyrixi-noticebar-${type}`,
          className
        )}
      >
        {/* 图标 */}
        {IconNode ? <div className="lyrixi-noticebar-icon">{IconNode}</div> : null}

        {/* 内容 */}
        <div className="lyrixi-noticebar-content">
          {title && <div className="lyrixi-noticebar-title">{title}</div>}
          {description && <div className="lyrixi-noticebar-description">{description}</div>}
        </div>

        {/* 关闭按钮 */}
        {closable && (
          <div className="lyrixi-noticebar-close-icon">
            <Icon className="lyrixi-iconfont-close" size="xs" onClick={() => setVisible(false)} />
          </div>
        )}
      </div>
    )
  }
)

export default NoticeBar
