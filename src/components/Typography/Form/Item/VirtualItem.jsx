import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  useContext,
  useState
} from 'react'
import FormContext from './../FormContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const FormItem = forwardRef(
  (
    {
      id,
      name,
      // 样式
      style,
      className,
      height = 50,

      children
    },
    ref
  ) => {
    const rootRef = useRef(null)
    // Context config
    const { layout, virtual } = useContext(FormContext)

    // In view area to display
    const [inViewArea, setInViewArea] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    useEffect(() => {
      const currentElement = rootRef.current

      // 检查全局observer是否存在
      if (virtual.observer && currentElement) {
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

    return (
      <div
        className={DOMUtil.classNames(
          'lyrixi-form-item',
          className,
          layout === 'horizontal' ? 'lyrixi-row' : ''
        )}
        style={{ height: height, ...style }}
        id={`${name ? `lyrixi-form-item-${name}` : id || ''}`}
        ref={rootRef}
      >
        {inViewArea ? children : null}
      </div>
    )
  }
)

export default FormItem
