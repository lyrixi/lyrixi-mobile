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
          {LocaleUtil.locale('弱', 'noKey_5490777b9cec0e60f5ffecda1e31c0a5')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level2">
        <div className="lyrixi-input-password-strength-progress lyrixi-level2"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('中', 'noKey_aed1dfbc31703955e64806b799b67645')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level3">
        <div className="lyrixi-input-password-strength-progress lyrixi-level3"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('强', 'noKey_7d00964b53a9c14ef100ad33fd71c743')}
        </span>
      </li>
    </ul>
  )
}

export default forwardRef(PasswordStrength)
