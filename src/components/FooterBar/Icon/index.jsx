import React, { forwardRef } from 'react'
import Combo from './Combo'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 底部按钮
const FooterBarIcon = forwardRef(
  (
    {
      // Combo: Status
      disabled,

      // Combo: Style
      color, // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor, // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      padding, // 内边距: 数值
      radius, // 圆角: xxs, xs, s, m, l, xl
      style,
      className,

      // Combo: Elements
      iconClassName,

      // Modal: Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Modal: Element
      portal,
      list,

      // Events
      onClick
    },
    ref
  ) => {
    // 获取标题节点
    function getComboNode({ comboRef, open, onClick }) {
      return (
        <Combo
          ref={comboRef}
          open={open}
          // Combo: Status
          disabled={disabled}
          // Combo: Style
          color={color}
          backgroundColor={backgroundColor}
          size={size}
          padding={padding}
          radius={radius}
          style={style}
          className={className}
          // Combo: Elements
          iconClassName={iconClassName}
          // Events
          onClick={onClick}
        >
          {children}
        </Combo>
      )
    }

    return (
      <ActionSheet.Combo
        ref={ref}
        // Modal: Value & Display Value
        list={list}
        // Modal: Style
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        modalStyle={modalStyle}
        modalClassName={modalClassName}
        // Modal: Element
        portal={portal}
        comboRender={getComboNode}
        // Events
        onClick={onClick}
      />
    )
  }
)

export default FooterBarIcon
