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
      direction,
      block,
      color = 'default',
      backgroundColor = 'white',
      borderColor,
      border = 'none',
      size = 'l',
      sizeEqual,
      fontSize,
      radius = 'l',
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
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          size={size}
          fontSize={fontSize}
          radius={radius}
          sizeEqual={sizeEqual}
          border={border}
          direction={direction}
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
