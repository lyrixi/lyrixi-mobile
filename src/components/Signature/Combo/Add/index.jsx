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
    value,
    onChange,
    modalClassName,
    modalStyle,
    // 绘画配置
    color,
    backgroundColor,

    // 其它属性
    className,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef(null)
  const modalRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      comboDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
      getComboDOM: () => {
        // div
        let comboDOM = comboRef?.current
        // Input.Text
        if (comboRef?.current?.getRootDOM) {
          comboDOM = comboRef.current.getRootDOM()
        }
        return comboDOM
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
    // 触发 onChange
    if (onChange) {
      let goOn = await onChange(base64)
      return goOn
    }
    setOpen(false)
  }

  // 未签显示签名
  return (
    <>
      <div
        ref={comboRef}
        {...props}
        className={DOMUtil.classNames('lyrixi-signature-button', className)}
        onClick={handleSign}
      >
        <i className="lyrixi-signature-button-icon-add"></i>
        {/* 文字 */}
        <div className="lyrixi-signature-button-label">
          {LocaleUtil.locale('签名', 'lyrixi_signature')}
        </div>
      </div>
      <Modal
        ref={modalRef}
        open={open}
        value={value}
        onChange={handleChange}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        // 绘画配置
        color={color}
        backgroundColor={backgroundColor}
        className={modalClassName}
        style={modalStyle}
      />
    </>
  )
}

export default forwardRef(Combo)
