import React, { forwardRef } from 'react'
import Combo from './Combo'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 底部按钮
const FooterBarTab = forwardRef(
  (
    {
      // Combo: Value & Display Value
      name,
      list,
      // Combo: Status
      disabled,
      // Combo: Style
      style,
      className,
      // Combo: Elements
      iconRender,

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
          // Combo: Value & Display Value
          name={name}
          list={list}
          // Combo: Status
          open={open}
          disabled={disabled}
          // Combo: Style
          style={style}
          className={className}
          // Combo: Elements
          iconRender={iconRender}
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

export default FooterBarTab
