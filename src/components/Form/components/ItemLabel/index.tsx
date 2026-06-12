import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'

import ItemsContext from './../ItemsContext'

import type { FormItemLabelProps } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Toast from './../../../Toast'
import Row from '../../../Row'
import type { RowColRef } from '../../../Row/types'
import Text from '../../../Text'
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Toast, Row, Text } from 'lyrixi-mobile'
测试使用-end */

const FormLabel = forwardRef<RowColRef, FormItemLabelProps>(
  (
    {
      // Status
      ellipsis,
      span,

      // Style
      style,
      className,

            required,

      // Elements
      help,
      children
    },
    ref
  ) => {
    // 获取全局配置
    const { layout, labelSpan, labelEllipsis } = useContext(ItemsContext)

    const rootRef = useRef<RowColRef>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return rootRef.current!
    })

    const isEmpty = !children && !help

    return (
      <Row.Col
        ref={rootRef}
        // Style
        style={style}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)(
          'lyrixi-form-item-label',
          className,
          isEmpty ? 'lyrixi-hide' : ''
        )}
        span={layout === 'horizontal' ? span || labelSpan || 8 : 24}
      >
        <>
          {/* Elements: Children */}
          {children && (
            <Text className="lyrixi-form-item-label-text" ellipsis={ellipsis || labelEllipsis || undefined}>
              {children}
            </Text>
          )}

          {/* Value & Display Value: Help */}
          {help && (
            <Icon
              svg={Icons.CircleQuestion}
              size="xxxs"
              color="info"
              className="lyrixi-form-item-help"
              onClick={() => {
                Toast.open({ content: help === null || help === undefined ? '' : String(help) })
              }}
            />
          )}

          {/* Value & Display Value: Required */}
          {required && <span className="lyrixi-form-item-required">*</span>}
        </>
      </Row.Col>
    )
  }
)
export default FormLabel
