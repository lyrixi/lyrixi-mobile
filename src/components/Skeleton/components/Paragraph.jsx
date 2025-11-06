import React from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Paragraph = ({
  length,
  animated = true,
  avatarClassName,
  avatarStyle,
  divider = 'card',
  titleClassName,
  titleStyle,
  itemClassName,
  itemStyle,
  oddClassName,
  oddStyle,
  evenClassName,
  evenStyle,

  // 其它属性
  className,
  ...props
}) => {
  return (
    <div {...props} className={DOMUtil.classNames('lyrixi-skeleton-paragraph', divider, className)}>
      {(avatarClassName || avatarStyle) && (
        <Block
          animated={animated}
          style={avatarStyle}
          className={DOMUtil.classNames('lyrixi-skeleton-avatar', avatarClassName)}
        />
      )}

      <div className="lyrixi-skeleton-paragraph-content">
        {/* Title */}
        {(titleClassName || titleStyle) && (
          <Block
            animated={animated}
            style={titleStyle}
            className={DOMUtil.classNames('lyrixi-skeleton-title', titleClassName)}
          />
        )}

        {/* Items */}
        {Array.from({ length: length ?? 2 }).map((_, index) => {
          const isEven = (index + 1) % 2 === 0
          const currentItemClassName = [itemClassName, isEven ? evenClassName : oddClassName]
            .filter(Boolean)
            .join(' ')
          const currentItemStyle = { ...itemStyle, ...(isEven ? evenStyle : oddStyle) }

          return (
            <Block
              animated={animated}
              key={index}
              style={currentItemStyle}
              className={DOMUtil.classNames('lyrixi-skeleton-item', currentItemClassName)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Paragraph
