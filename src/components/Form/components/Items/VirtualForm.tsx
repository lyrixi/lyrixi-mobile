import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'
import ItemsContext from './../ItemsContext'
import type { EllipsisConfig } from './../ItemsContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface VirtualFormRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface VirtualFormProps {
  style?: CSSProperties
  className?: string
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  children?: ReactNode
}

// layout: horizontal | vertical | inline
const VirtualForm = forwardRef<VirtualFormRef, VirtualFormProps>(
  (
    {
      // Value & Display Value

      // Style
      style,
      className,
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    // Virtual
    const [observer, setObserver] = useState<IntersectionObserver | null>(null)
    const observerCallbacksRef = useRef(new WeakMap<Element, (visible: boolean) => void>())

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    useEffect(() => {
      // 创建IntersectionObserver实例
      const newObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const callback = observerCallbacksRef.current.get(entry.target)
            callback?.(entry.isIntersecting)
          })
        },
        {
          root: null, // 使用视口作为根
          threshold: 0.1 // 当10%的元素可见时触发
          // rootMargin: '0px',
        }
      )
      setObserver(newObserver)

      // 组件卸载时清理
      return () => {
        newObserver.disconnect()
      }
    }, [])

    return (
      <ItemsContext.Provider
        value={{
          layout,
          labelSpan: labelSpan ?? 4,
          labelEllipsis: labelEllipsis ?? null,
          mainSpan: mainSpan ?? 20,
          mainEllipsis: mainEllipsis ?? null,
          virtual: { observer: observer, observerCallbacks: observerCallbacksRef.current }
        }}
      >
        <div
          ref={rootRef}
          // Style
          style={style}
          className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-form-items lyrixi-virtual', className)}
        >
          {/* Element: Children */}
          {children}
        </div>
      </ItemsContext.Provider>
    )
  }
)

export default VirtualForm
