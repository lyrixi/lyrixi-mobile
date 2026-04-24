import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode
} from 'react'
import ItemsContext from './../ItemsContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface VirtualFormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface VirtualFormItemProps {
  height?: number
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  layout?: string
  children?: ReactNode
}

const FormItem = forwardRef<VirtualFormItemRef, VirtualFormItemProps>(
  (
    {
      // 用于计算虚拟列表的高度
      height = 50,
      id,
      name,
      // Value & Display Value

      // Style
      style,
      className,
      layout,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    // Context config
    const { layout: globalLayout, virtual } = useContext(ItemsContext)

    // In view area to display
    const [inViewArea, setInViewArea] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    useEffect(() => {
      const currentElement = rootRef.current

      // 检查全局observer是否存在
      if (virtual?.observer && currentElement) {
        // 开始观察当前元素
        virtual.observer.observe(currentElement)

        // 注册当前元素
        virtual.observerCallbacks.set(currentElement, setInViewArea)

        // 组件卸载时停止观察
        return () => {
          if (virtual.observer) {
            virtual.observer.unobserve(currentElement)
          }
        }
      }
      // eslint-disable-next-line
    }, [])

    let layoutClass = ''
    if (layout || globalLayout) {
      layoutClass = `lyrixi-form-item-layout-${layout || globalLayout}`
    }

    return (
      <div
        ref={rootRef}
        id={`${name ? `lyrixi-form-item-${name}` : id || ''}`}
        style={{ height: height, ...style }}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-row lyrixi-form-item', className, layoutClass)}
      >
        {inViewArea ? children : null}
      </div>
    )
  }
)

export default FormItem
