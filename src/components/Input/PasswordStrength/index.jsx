import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getStrength from './getStrength'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

const PasswordStrength = ({ value = '', ...props }, ref) => {
  let strength = getStrength(value)

  const rootRef = useRef(null)
  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getStrength: (newValue) => {
        return getStrength(newValue || value)
      }
    }
  })

  return (
    <ul
      {...props}
      className={`lyrixi-input-password-strength level${strength}${
        props.className ? ' ' + props.className : ''
      }`}
      ref={rootRef}
    >
      <li className="lyrixi-input-password-strength-item lyrixi-level1">
        <div className="lyrixi-input-password-strength-progress"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('弱', 'lyrixi_password_weak')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level2">
        <div className="lyrixi-input-password-strength-progress lyrixi-level2"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('中', 'lyrixi_password_medium')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level3">
        <div className="lyrixi-input-password-strength-progress lyrixi-level3"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('强', 'lyrixi_password_strong')}
        </span>
      </li>
    </ul>
  )
}

export default forwardRef(PasswordStrength)
