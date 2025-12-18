import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import Modal from './../../Modal'

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
  },
  ref
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef(null)
  const modalRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
      getRootDOM: () => {
        // div
        let rootDOM = comboRef?.current
        // Input.Text
        if (comboRef?.current?.getRootDOM) {
          rootDOM = comboRef.current.getRootDOM()
        }
        return rootDOM
      },
      ...modalRef?.current
    }
  })

  // 点击签名
  function handleSign() {
    setOpen(true)
  }

  // 修改签名
  async function handleChange(base64) {
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
          {LocaleUtil.locale('签名', 'lyrixi.signature')}
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

export default forwardRef(Combo)
