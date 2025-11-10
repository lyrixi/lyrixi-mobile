import React from 'react'

// 内库使用-start
import MathUtil from './../../../../utils/MathUtil'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 金额
function Amount({
  // Value & Display Value
  precision = 2,
  currencySymbol,

  // Style
  style,
  className,
  noStyle,

  // Element
  children
}) {
  if (isNaN(children)) {
    return null
  }

  let num = MathUtil.thousands(Number(children).toFixed(precision))
  let integer = num.split('.')?.[0]
  let decimal = num.split('.')?.[1]

  let displayValue = null
  // No style
  if (noStyle) {
    displayValue = (currencySymbol || '') + (integer || '') + (decimal ? '.' + decimal : '')
  }
  // Default style
  else {
    displayValue = (
      <>
        {currencySymbol && (
          <span className="lyrixi-typography-amount-symbol">{currencySymbol}</span>
        )}
        <span className="lyrixi-typography-amount-integer">{integer}</span>
        {decimal && <span className="lyrixi-typography-amount-decimal">.{decimal}</span>}
      </>
    )
  }

  return (
    <span
      className={DOMUtil.classNames(noStyle ? '' : 'lyrixi-typography-amount', className)}
      style={style}
    >
      {displayValue}
    </span>
  )
}

export default Amount
