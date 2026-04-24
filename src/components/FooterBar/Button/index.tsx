import { useRef, forwardRef, useImperativeHandle, useState, type CSSProperties } from 'react'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
import type { ModalRef } from './../../Modal/Modal'
import Button from './../../Button'
import type { ButtonRef, ButtonProps } from './../../Button/Button'
import type { ActionSheetItem } from './../../ActionSheet/Modal'
// 内库使用-end

/* 测试使用-start
import { ActionSheet, Icon } from 'lyrixi-mobile'
测试使用-end */

export interface FooterBarButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FooterBarButtonProps extends Omit<ButtonProps, 'onClick'> {
  // Modal: Value & Display Value
  list?: ActionSheetItem[]

  // Modal: Style
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string

  // Modal: Elements
  portal?: boolean | HTMLElement

  // Events
  onClick?: ButtonProps['onClick']
}

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
            portal={portal as boolean | HTMLElement}
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

type FooterBarButtonWithName = typeof FooterBarButton & { componentName: string }
;(FooterBarButton as FooterBarButtonWithName).componentName = 'FooterBar.Button'

export default FooterBarButton as FooterBarButtonWithName
