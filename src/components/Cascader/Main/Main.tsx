import React, { Fragment, forwardRef, type CSSProperties, type ReactNode } from 'react'
import type { CascaderNode } from './../cascaderTypes'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Result from './../../Result'
import List from './../../List'
import Button from './../../Button'
import IndexBar from './../../IndexBar'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, List, Result, Button, IndexBar } from 'lyrixi-mobile'
测试使用-end */

interface ResultState {
  status: string
  list?: CascaderNode[]
  message?: ReactNode
}

interface MainProps {
  result?: ResultState
  value?: CascaderNode[]
  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  onReLoad?: () => void
  onSelect: (item: CascaderNode) => void
}

// Cast Result to accept only the props we need, since Result's props are all inferred as required
const CascaderResult = Result as React.ComponentType<{
  title?: ReactNode
  status?: string
  full?: boolean
  style?: CSSProperties
  className?: string
  description?: ReactNode
  imageRender?: () => ReactNode
  imageUrl?: string | null
  children?: ReactNode
}>

const Main = forwardRef<HTMLDivElement, MainProps>(
  (
    {
      // Value & Display Value
      result,
      value,
      // Style
      style,
      className,
      itemStyle,
      itemClassName,
      // Events
      onReLoad,
      onSelect
    },
    ref
  ) => {
    // 显示分栏
    const indexes: Record<string, boolean> = {}

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-cascader-main', className)}
        ref={ref}
      >
        {result?.status !== 'success' && (
          <CascaderResult title={result?.message} status={result?.status} full>
            {result?.status === 'error' && onReLoad ? (
              <Button className="lyrixi-result-button" color="primary" onClick={onReLoad}>
                {LocaleUtil.locale('重新加载', 'lyrixi_64ca9bab920a2983bcf270320d850d00')}
              </Button>
            ) : null}
          </CascaderResult>
        )}
        {Array.isArray(result?.list) &&
          result?.list.map((item, index) => {
            // 字母分栏
            let anchorBar = null
            if (item.anchor && !indexes[item.anchor]) {
              indexes[item.anchor] = true
              anchorBar = (
                <IndexBar.Anchor className="lyrixi-cascader-list-divider" name={item.anchor}>
                  {item.anchor}
                </IndexBar.Anchor>
              )
            }

            return (
              <Fragment key={String(item.id ?? index)}>
                {anchorBar}
                <List.Item
                  // Value & Display Value
                  checked={value?.some?.((selected) => {
                    return selected.id === item.id
                  })}
                  // Style
                  style={itemStyle}
                  className={DOMUtil.classNames(`lyrixi-cascader-item`, itemClassName)}
                  checkboxVariant="text"
                  checkboxPosition="right"
                  // Status
                  checkable
                  // Elements
                  title={item.name}
                  // Events
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation()
                    onSelect(item)
                  }}
                />
              </Fragment>
            )
          })}
      </div>
    )
  }
)

export default Main
