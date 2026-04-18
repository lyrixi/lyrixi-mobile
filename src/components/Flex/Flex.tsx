import React, { useRef, forwardRef, useImperativeHandle, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Compact from './Compact'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Flex } from 'lyrixi-mobile'
测试使用-end */

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'horizontal' | 'vertical'

export interface FlexProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  gap?: string | number
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  wrap?: boolean | 'scroll'
}

export interface FlexRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

function getStyle({
  gap,
  justify,
  align,
  direction,
  wrap
}: {
  gap?: string | number
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  wrap?: boolean | 'scroll'
}): CSSProperties {
  const gapStyle: CSSProperties = {}
  if (gap !== undefined) {
    gapStyle.gap = typeof gap === 'number' ? `${gap}px` : `var(--lyrixi-space-${gap})`
  }

  const justifyMap: Record<FlexJustify, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }

  const alignMap: Record<FlexAlign, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  const justifyContent = justify ? justifyMap[justify] : undefined
  const alignItems = align ? alignMap[align] : undefined

  const flexDirection = direction === 'vertical' ? 'column' : 'row'

  let flexWrap: string | undefined
  if (wrap === true) {
    flexWrap = 'wrap'
  } else if (wrap === 'scroll') {
    flexWrap = 'nowrap'
  }

  return {
    ...gapStyle,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    overflowX: wrap === 'scroll' ? 'auto' : undefined
  } as CSSProperties
}

function getClassName({ wrap }: { wrap?: boolean | 'scroll' }) {
  return (DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-flex', {
    'lyrixi-flex-wrap-scroll': wrap === 'scroll'
  })
}

const Flex = forwardRef<FlexRef, FlexProps>(function Flex(
  { style, className, children, gap, justify, align, direction, wrap },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <div
      ref={rootRef}
      style={{
        ...getStyle({ gap, justify, align, direction, wrap }),
        ...style
      }}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)(getClassName({ wrap }), className)}
    >
      {children}
    </div>
  )
})

type FlexWithCompact = typeof Flex & { Compact: typeof Compact }

;(Flex as FlexWithCompact).Compact = Compact

export default Flex as FlexWithCompact
