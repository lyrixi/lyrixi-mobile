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
      // Combo: Style
      style,
      className,
      color = 'default',
      backgroundColor,
      shape,
      border,
      radius,
      size,

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
          // Combo: Style
          style={style}
          className={className}
          color={color}
          backgroundColor={backgroundColor}
          shape={shape}
          border={border}
          radius={radius}
          size={size}
          // Combo: Elements
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
