import React, { useContext, createContext, Children, Fragment, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import MathUtil from './../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, MathUtil } from 'lyrixi-mobile'
测试使用-end */

export interface CompactContextValue {
  block?: boolean
  size?: string
  direction?: string
}

const Context = createContext<CompactContextValue | null>(null)

function useCompactContext() {
  return useContext(Context)
}

export interface CompactProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 在子节点之间插入的分隔节点 */
  separator?: ReactNode
  block?: boolean
  size?: string
  direction?: string
  radius?: string
}

function interleaveChildren(children: ReactNode, separator: ReactNode): ReactNode {
  const arr = Children.toArray(children)
  if (arr.length <= 1) return children
  return arr.reduce<ReactNode[]>((acc, child, i) => {
    if (i > 0) acc.push(<Fragment key={`sep-${i}`}>{separator}</Fragment>)
    acc.push(<Fragment key={`item-${i}`}>{child}</Fragment>)
    return acc
  }, [])
}

function CompactBase({ style, className, children, separator, block, size, direction, radius }: CompactProps) {
  const parentContext = useCompactContext()

  const gap = size != null ? MathUtil.variableSize(size, undefined) : ''
  const radiusSize = radius != null ? MathUtil.variableSize(radius, undefined) : ''

  const gapStyle = {
    '--lyrixi-flex-compact-gap': gap,
    '--lyrixi-flex-compact-radius': radiusSize
  } as CSSProperties

  return (
    <Context.Provider value={{ block, size, direction }}>
      <div
        style={{ ...gapStyle, ...style }}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)(
          'lyrixi-flex-compact',
          {
            'lyrixi-flex-compact-block': block,
            'lyrixi-flex-compact-vertical': direction === 'vertical',
            'lyrixi-flex-compact-horizontal': direction !== 'vertical',
            'lyrixi-flex-compact-has-parent': parentContext
          },
          className
        )}
      >
        {separator != null ? interleaveChildren(children, separator) : children}
      </div>
    </Context.Provider>
  )
}

type CompactComponent = typeof CompactBase & {
  Context: typeof Context
  useContext: typeof useCompactContext
}

const Compact = CompactBase as CompactComponent
Compact.Context = Context
Compact.useContext = useCompactContext

export default Compact
