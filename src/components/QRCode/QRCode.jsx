import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import Instance from './instance'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import MathUtil from './../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, MathUtil } from 'lyrixi-mobile'
测试使用-end */

// 生成二维码
const QRCode = forwardRef(
  (
    {
      style,
      text,
      children,
      // 其它属性
      className
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef(null)
    const instance = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        instance: instance.current,
        getRootDOM: () => rootRef.current,
        getInstance: () => instance.current
      }
    })

    useEffect(() => {
      if (!text || typeof text !== 'string') return
      if (!instance.current) {
        instance.current = new Instance(rootRef.current, {
          text: text || '',
          width: MathUtil.extractNumber(style?.width || 230),
          height: MathUtil.extractNumber(style?.width || 230),
          colorDark: style?.color || '#000000',
          colorLight: style?.backgroundColor || '#ffffff',
          correctLevel: Instance.CorrectLevel.M // L,M,Q,H
        })
      }

      const width = MathUtil.extractNumber(style?.width || 0)
      const height = MathUtil.extractNumber(style?.height || 0)
      const color = style?.color
      const backgroundColor = style?.backgroundColor
      if (width) instance.current._htOption.width = width
      if (height) instance.current._htOption.height = height
      if (color) instance.current._htOption.colorDark = color
      if (backgroundColor) instance.current._htOption.colorLight = backgroundColor
      instance.current.makeCode(text)
      // eslint-disable-next-line
    }, [text])

    if (!text) return null
    return (
      <span style={style} className={DOMUtil.classNames('lyrixi-qrcode', className)} ref={rootRef}>
        {children}
      </span>
    )
  }
)

export default QRCode
