import React from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Paragraph = ({
  // Value & Display Value
  length,
  divider = 'card',

  // Status
  animated = true,

  // Style
  className,
  style,
  avatarClassName,
  avatarStyle,
  titleClassName,
  titleStyle,
  itemClassName,
  itemStyle,
  oddClassName,
  oddStyle,
  evenClassName,
  evenStyle
}) => {
  return (
    <div
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-skeleton-paragraph', divider, className)}
    >
      {/* Element: Avatar */}
      {(avatarClassName || avatarStyle) && (
        <Block
          // Status
          animated={animated}
          // Style
          style={avatarStyle}
          className={DOMUtil.classNames('lyrixi-skeleton-avatar', avatarClassName)}
        />
      )}

      {/* Element: Content */}
      <div className="lyrixi-skeleton-paragraph-content">
        {/* Element: Title */}
        {(titleClassName || titleStyle) && (
          <Block
            // Status
            animated={animated}
            // Style
            style={titleStyle}
            className={DOMUtil.classNames('lyrixi-skeleton-title', titleClassName)}
          />
        )}

        {/* Element: Items */}
        {Array.from({ length: length ?? 2 }).map((_, index) => {
          const isEven = (index + 1) % 2 === 0
          const currentItemClassName = [itemClassName, isEven ? evenClassName : oddClassName]
            .filter(Boolean)
            .join(' ')
          const currentItemStyle = { ...itemStyle, ...(isEven ? evenStyle : oddStyle) }

          return (
            <Block
              key={index}
              // Status
              animated={animated}
              // Style
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
