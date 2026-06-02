import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'

import Modal from './../../Modal'

import type { SignatureComboAddProps, SignatureComboAddRef, SignatureModalRef } from '../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Icon from '../../../Icon'
import Icons from '../../../../icons'
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

    // Elements
    color, // 绘画配置: 画笔颜色
    backgroundColor, // 绘画配置: 背景颜色

    // Events
    onChange
  }: SignatureComboAddProps,
  ref: React.Ref<SignatureComboAddRef>
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<SignatureModalRef | null>(null)

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
      {/* Elements: Combo Button */}
      <div
        ref={comboRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-signature-button', className)}
        // Events
        onClick={handleSign}
      >
        {/* Elements: Icon */}
        <Icon svg={Icons.Signature} size="l" className="lyrixi-signature-button-icon-add" />

        {/* Elements: Label */}
        <div className="lyrixi-signature-button-label">
          {LocaleUtil.locale('签名', 'lyrixi_be2525ebade48dee835e25c04f130725')}
        </div>
      </div>

      {/* Elements: Modal */}
      <Modal
        ref={modalRef}
        // Status
        open={open}
        // Style
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        // Value & Display Value
        value={value}
        // Elements
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
export default forwardRef<SignatureComboAddRef, SignatureComboAddProps>(Combo)
