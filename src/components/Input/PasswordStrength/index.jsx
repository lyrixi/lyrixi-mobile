import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getStrength from './getStrength'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

const PasswordStrength = (
  {
    // Value & Display Value
    value = '',

    // Style
    className,
    style
  },
  ref
) => {
  let strength = getStrength(value)

  const rootRef = useRef(null)
  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => {
        return rootRef.current
      },
      getStrength: (newValue) => {
        return getStrength(newValue || value)
      }
    }
  })

  return (
    <ul
      ref={rootRef}
      // Style
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-input-password-strength',
        `lyrixi-level${strength}`,
        className
      )}
    >
      <li className="lyrixi-input-password-strength-item lyrixi-level1">
        <div className="lyrixi-input-password-strength-progress"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('弱', 'lyrixi.password.weak')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level2">
        <div className="lyrixi-input-password-strength-progress lyrixi-level2"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('中', 'lyrixi.password.medium')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level3">
        <div className="lyrixi-input-password-strength-progress lyrixi-level3"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('强', 'lyrixi.password.strong')}
        </span>
      </li>
    </ul>
  )
}

export default forwardRef(PasswordStrength)
