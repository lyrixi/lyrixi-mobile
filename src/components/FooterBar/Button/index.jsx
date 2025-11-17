import React, { forwardRef } from 'react'
import Combo from './Combo'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 底部按钮
const FooterBarButton = forwardRef(
  (
    {
      // Combo Button: Style
      color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size, // 尺寸: xxs, xs, s, m, l, xl
      radius = 'm', // 圆角: xxs, xs, s, m, l, xl
      square, // 是否为正方形
      border = 'none', // 边框: none, dotted, dashed, solid
      style,
      className,

      // Combo Button: Status
      disabled,

      // Combo Button: Element
      children,

      // Combo Icon: Style
      iconClassName,
      iconPosition,
      iconColor,
      iconBackgroundColor,
      iconSize,
      iconPadding,
      iconRadius,

      // Modal: Value & Display Value
      list,

      // Modal: Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Modal: Element
      portal,

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
          // Combo Button: Style
          style={style}
          className={className}
          color={color}
          backgroundColor={backgroundColor}
          square={square}
          border={border}
          radius={radius}
          size={size}
          // Combo Button: Status
          disabled={disabled}
          // Combo Icon: Style
          iconClassName={iconClassName}
          iconPosition={iconPosition}
          iconColor={iconColor}
          iconBackgroundColor={iconBackgroundColor}
          iconSize={iconSize}
          iconPadding={iconPadding}
          iconRadius={iconRadius}
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

export default FooterBarButton
