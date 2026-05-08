import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'


import ItemsContext from './../ItemsContext'

import type { FormItemMainProps } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Row from '../../../Row'
import type { ColRef } from '../../../Row'
import Text from '../../../Text'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Row, Text } from 'lyrixi-mobile'
测试使用-end */

const FormMain = forwardRef<ColRef, FormItemMainProps>(
  (
    {
      // Status
      ellipsis,
      span,

      // Style
      style,
      className,

      // Element
      errorMessage,
      inputExtraNode,
      extraNode,
      children
    },
    ref
  ) => {
    // 获取全局配置
    const { layout, mainSpan, mainEllipsis } = useContext(ItemsContext)

    const rootRef = useRef<ColRef>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return rootRef.current!
    })

    const activeEllipsis = ellipsis || mainEllipsis || undefined

    return (
      <Row.Col
        ref={rootRef}
        // Style
        style={style}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-form-item-main', className)}
        span={layout === 'horizontal' ? span || mainSpan || 16 : 24}
      >
        <>
          <div className="lyrixi-form-item-main-input">
            {/* Element: Children */}
            {activeEllipsis?.rows ? (
              <Text ellipsis={activeEllipsis}>{children}</Text>
            ) : (
              children
            )}
            {/* Element: Input extra */}
            {inputExtraNode && (
              <div className="lyrixi-form-item-main-input-extra">{inputExtraNode}</div>
            )}
          </div>
          {/* Value & Display Value: Error */}
          {errorMessage && <div className="lyrixi-form-item-main-error">{errorMessage}</div>}
          {/* Element: Main extra */}
          {extraNode && <div className="lyrixi-form-item-main-extra">{extraNode}</div>}
        </>
      </Row.Col>
    )
  }
)
export type { FormItemMainProps } from '../../types'

export default FormMain
