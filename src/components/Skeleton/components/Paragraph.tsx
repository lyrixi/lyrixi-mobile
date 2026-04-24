import React from 'react'
import Avatar from './Avatar'
import Title from './Title'
import Item from './Item'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

interface ParagraphProps {
  length?: number
  divider?: string
  animated?: boolean
  className?: string
  style?: React.CSSProperties
  avatarVisible?: boolean
  avatarClassName?: string
  avatarStyle?: React.CSSProperties
  titleVisible?: boolean
  titleClassName?: string
  titleStyle?: React.CSSProperties
  itemClassName?: string
  itemStyle?: React.CSSProperties
  oddClassName?: string
  oddStyle?: React.CSSProperties
  evenClassName?: string
  evenStyle?: React.CSSProperties
}

const Paragraph = ({
  // Value & Display Value
  length,
  divider = 'card',

  // Status
  animated = true,

  // Style
  className,
  style,
  avatarVisible,
  avatarClassName,
  avatarStyle,
  titleVisible,
  titleClassName,
  titleStyle,
  itemClassName,
  itemStyle,
  oddClassName,
  oddStyle,
  evenClassName,
  evenStyle
}: ParagraphProps) => {
  return (
    <div
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-skeleton-paragraph', divider, className)}
    >
      {/* Element: Avatar */}
      {(avatarVisible || avatarClassName || avatarStyle) && (
        <Avatar
          animated={animated}
          style={avatarStyle}
          className={avatarClassName}
        />
      )}

      {/* Element: Content */}
      <div className="lyrixi-skeleton-paragraph-content">
        {/* Element: Title */}
        {(titleVisible || titleClassName || titleStyle) && (
          <Title
            animated={animated}
            style={titleStyle}
            className={titleClassName}
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
            <Item
              key={index}
              animated={animated}
              style={currentItemStyle}
              className={currentItemClassName}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Paragraph
