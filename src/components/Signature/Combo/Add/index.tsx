import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'


import Modal from './../../Modal'

import type { ComboAddProps, ComboAddRef } from './types'
import type { ModalRef } from './../../Modal/types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// Combo
const Combo = (
  {
    // Value & Display Value
    value,

    // Style
    className,
    style,
    modalClassName,
    modalStyle,

    // Element
    color, // 绘画配置: 画笔颜色
    backgroundColor, // 绘画配置: 背景颜色

    // Events
    onChange
  }: ComboAddProps,
  ref: React.Ref<ComboAddRef>
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<ModalRef | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: comboRef.current,
      getElement: () => comboRef.current
    }
  })

  // 点击签名
  function handleSign() {
    setOpen(true)
  }

  // 修改签名
  async function handleChange(base64: string | null) {
    onChange?.(base64)
    setOpen(false)
  }

  // 未签显示签名
  return (
    <>
      {/* Element: Combo Button */}
      <div
        ref={comboRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-signature-button', className)}
        // Events
        onClick={handleSign}
      >
        {/* Element: Icon */}
        <i className="lyrixi-signature-button-icon-add"></i>

        {/* Element: Label */}
        <div className="lyrixi-signature-button-label">
          {LocaleUtil.locale('签名', 'lyrixi_be2525ebade48dee835e25c04f130725')}
        </div>
      </div>

      {/* Element: Modal */}
      <Modal
        ref={modalRef}
        // Status
        open={open}
        // Style
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        // Value & Display Value
        value={value}
        // Element
        color={color} // 绘画配置: 画笔颜色
        backgroundColor={backgroundColor} // 绘画配置: 背景颜色
        // Events
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleChange}
      />
    </>
  )
}
export type { ComboAddProps, ComboAddRef } from './types'

export default forwardRef<ComboAddRef, ComboAddProps>(Combo)
