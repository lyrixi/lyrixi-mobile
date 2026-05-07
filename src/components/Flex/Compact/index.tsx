import React, {
  Children,
  Fragment,
  forwardRef,
  isValidElement,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type RefAttributes
} from 'react'

import type { CompactContextValue, CompactProps, CompactRef } from './../types'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Context = React.createContext<CompactContextValue | null>(null)

type CompactWithStatics = ForwardRefExoticComponent<CompactProps & RefAttributes<CompactRef>> & {
  Context: typeof Context
  useContext: () => CompactContextValue | null
}

const CompactRoot = forwardRef<CompactRef, CompactProps>(
  (
    {
      className,
      style,
      direction = 'horizontal',
      block = false,
      size = 'm',
      radius = 'm',
      separatorStyle,
      separatorClassName,
      separator,
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement | null>(null)

    const childNodes = useMemo(() => {
      const nodes: React.ReactNode[] = []
      Children.forEach(children, (child) => {
        if (child !== null && child !== undefined && child !== false) {
          nodes.push(child)
        }
      })
      return nodes
    }, [children])

    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    const contextValue = useMemo(() => ({ block, size, direction }), [block, size, direction])

    if (childNodes.length === 0) {
      return null
    }

    return (
      <Context.Provider value={contextValue}>
        <div
          style={
            {
              ...style,
              '--lyrixi-flex-compact-radius': MathUtil.variableSize(radius, 'radius')
            } as CSSProperties
          }
          className={DOMUtil.classNames(
            'lyrixi-flex-compact',
            `lyrixi-flex-compact-${direction}`,
            {
              [`lyrixi-flex-compact-block`]: block
            },
            className
          )}
          ref={rootRef}
        >
          {childNodes.map((child, index) => {
            const key =
              isValidElement(child) &&
              child.key !== null &&
              child.key !== undefined &&
              child.key !== ''
                ? child.key
                : `lyrixi-flex-compact-item-${index}`
            const isLast = index === childNodes.length - 1
            return (
              <Fragment key={key}>
                <div
                  className={DOMUtil.classNames(
                    `lyrixi-flex-compact-item`,
                    `lyrixi-flex-compact-item-${direction}`,
                    {
                      [`lyrixi-flex-compact-item-first`]: index === 0,
                      [`lyrixi-flex-compact-item-last`]: isLast
                    }
                  )}
                >
                  {child}
                </div>
                {separator && !isLast ? (
                  <div
                    className={DOMUtil.classNames(
                      `lyrixi-space-item-separator`,
                      separatorClassName
                    )}
                    style={separatorStyle}
                  >
                    {separator}
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </div>
      </Context.Provider>
    )
  }
)

const Compact = Object.assign(CompactRoot, {
  Context,
  useContext: (): CompactContextValue | null => useContext(Context)
}) as CompactWithStatics

export type { CompactContextValue, CompactProps, CompactRef } from './../types'

export default Compact
