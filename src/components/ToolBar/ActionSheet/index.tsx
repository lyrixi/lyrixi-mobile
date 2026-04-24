import React, { forwardRef, type ComponentProps, type CSSProperties, type MouseEvent, type ReactNode } from 'react'
import Combo from './../components/Combo'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

type ASComboProps = ComponentProps<typeof ActionSheet.Combo>
type ComboRenderParams = Parameters<NonNullable<ASComboProps['comboRender']>>[0]

export interface ToolBarActionSheetStyleProps {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  radius?: string | number
  style?: CSSProperties
  className?: string
  arrowRender?: (props: { open: boolean | null }) => ReactNode
}

type ToolBarActionSheetProps = ASComboProps & ToolBarActionSheetStyleProps

// 操作表下拉
const ToolBarActionSheet = forwardRef<
  { close: () => void; open: () => void },
  ToolBarActionSheetProps
>(function ToolBarActionSheet(
  {
    // Value & Display Value
    value,
    placeholder = '',

    // Style
    direction,
    block,
    color = 'default',
    backgroundColor,
    borderColor,
    border = 'none',
    size,
    sizeEqual,
    radius = 'm',
    style,
    className,

    maskStyle,
    maskClassName,
    modalStyle,
    modalClassName,

    // Element
    comboRender,
    children,
    arrowRender,
    portal,
    list,

    // Events
    onBeforeOpen,
    onOpen,
    onClose,
    onChange,
    ...rest
  },
  ref
) {
  // 修改
  function handleChange(newValue: Parameters<NonNullable<ASComboProps['onChange']>>[0]) {
    onChange?.(newValue)
  }

  // 获取标题节点
  function getComboNode({ comboRef, open, onClick }: ComboRenderParams) {
    if (typeof comboRender === 'function') {
      return comboRender({
        comboRef,
        open,
        onClick
      })
    }
    return (
      <Combo
        ref={comboRef}
        // Status
        open={open}
        // Style
        style={style}
        className={className}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        sizeEqual={sizeEqual}
        border={border}
        direction={direction}
        block={block}
        radius={radius}
        size={size}
        // Elements
        arrowRender={arrowRender}
        // Events
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation()
          onClick()
        }}
      >
        {/* comboChildren */}
        {children || value?.name || placeholder}
      </Combo>
    )
  }

  return (
    <ActionSheet.Combo
      ref={ref}
      // Value & Display Value
      value={value}
      list={list}
      // Style
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      modalStyle={modalStyle}
      modalClassName={modalClassName}
      // Element
      portal={portal}
      comboRender={getComboNode}
      // Events
      onBeforeOpen={onBeforeOpen}
      onOpen={onOpen}
      onClose={onClose}
      onChange={handleChange}
      {...rest}
    />
  )
})

// Component Name, for compact
;(ToolBarActionSheet as typeof ToolBarActionSheet & { componentName?: string }).componentName =
  'ToolBar.ActionSheet'

export default ToolBarActionSheet
