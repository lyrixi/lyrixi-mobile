import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { ActionSheet, Icon } from 'lyrixi-mobile'
测试使用-end */

const FooterBarButton = forwardRef(
  (
    {
      // Button: Style
      color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      fontSize, // 字体大小: xxs, xs, s, m, l, xl
      radius = 'm', // 圆角: xxs, xs, s, m, l, xl
      sizeEqual,
      border = 'none', // 边框: none, dotted, dashed, solid
      block,
      style,
      className,

      // Button: Status
      disabled,

      // Button: Elements
      children,

      // Modal: Value & Display Value
      list,

      // Modal: Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Modal: Elements
      portal,

      // Events
      onClick
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    // Modal: Status
    const [open, setOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current.rootDOM,
        getComboDOM: comboRef.current?.getComboDOM,
        ...modalRef.current
      }
    })

    return (
      <>
        {/* Element: Button */}
        <Button
          ref={comboRef}
          // Button: Style
          color={color}
          backgroundColor={backgroundColor}
          size={size}
          fontSize={fontSize}
          radius={radius}
          sizeEqual={sizeEqual}
          border={border}
          block={block}
          style={style}
          className={className}
          // Button: Status
          disabled={disabled}
          // Events
          onClick={(e) => {
            setOpen(true)
            onClick && onClick(e)
          }}
        >
          {children}
        </Button>

        {/* Element: ActionSheet Modal */}
        {list?.length ? (
          <ActionSheet.Modal
            ref={modalRef}
            // Modal: Value & Display Value
            list={list}
            // Modal: Status
            open={open}
            // Modal: Style
            maskStyle={maskStyle}
            maskClassName={maskClassName}
            modalStyle={modalStyle}
            modalClassName={modalClassName}
            // Modal: Element
            portal={portal}
            // Events
            onClose={() => {
              setOpen(false)
            }}
          />
        ) : null}
      </>
    )
  }
)

// Component Name, for compact
FooterBarButton.componentName = 'FooterBar.Button'

export default FooterBarButton
