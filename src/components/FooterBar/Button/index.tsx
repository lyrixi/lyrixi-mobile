import React, { Fragment, useRef, forwardRef, useImperativeHandle, useState } from 'react'


import type { ButtonRef } from './../../Button/types'
import type { FooterBarButtonProps, FooterBarButtonRef } from './types'
import type { ModalRef } from './../../Modal/Modal/types'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { ActionSheet, Icon } from 'lyrixi-mobile'
测试使用-end */


const FooterBarButton = forwardRef<FooterBarButtonRef, FooterBarButtonProps>(
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
    const comboRef = useRef<ButtonRef>(null)
    const modalRef = useRef<ModalRef | null>(null)

    // Modal: Status
    const [open, setOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current?.element ?? null,
        getElement: () => comboRef.current?.getElement?.() ?? null
      }
    })

    return (
      <Fragment>
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
            if (onClick) onClick(e)
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
            portal={portal as boolean | HTMLElement}
            // Events
            onClose={() => {
              setOpen(false)
            }}
          />
        ) : null}
      </Fragment>
    )
  }
)

type FooterBarButtonWithName = typeof FooterBarButton & { componentName: string }
;(FooterBarButton as FooterBarButtonWithName).componentName = 'FooterBar.Button'

export type { FooterBarButtonProps, FooterBarButtonRef } from './types'
export default FooterBarButton as FooterBarButtonWithName
