import React, { useState, useRef, useEffect } from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import checkOverflow from './checkOverflow'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Ellipsis = ({
  // Status
  ellipsis,
  // Element
  children
}) => {
  const rootRef = useRef(null)
  // 展开和收缩
  const [expanded, setExpanded] = useState(ellipsis?.defaultExpanded || false)
  // 展开和收缩按钮的高度
  const [toggleHeight, setToggleHeight] = useState('16px')
  // 是否真的超出了行数限制
  const [isOverflow, setIsOverflow] = useState(false)

  useEffect(() => {
    if (!ellipsis?.expandable) return

    let isOverflow = checkOverflow(rootRef.current)
    setIsOverflow(isOverflow)
    // eslint-disable-next-line
  }, [])

  // 获取按钮高度, 用于计算::before的高度
  useEffect(() => {
    if (!isOverflow) return

    // 获取展开/收起按钮的高度
    const toggle = rootRef.current?.querySelector('.lyrixi-text-ellipsis-toggle')
    const toggleHeight = toggle?.offsetHeight
    if (toggleHeight) {
      setToggleHeight(`${toggleHeight}px`)
      return
    }
  }, [isOverflow])

  const style = {
    // 行数限制
    ...(ellipsis?.rows ? { WebkitLineClamp: expanded ? 999 : ellipsis?.rows } : {}),
    // 计算::before的高度
    '--ellipsis-before-height': `calc(100% - ${toggleHeight})`
  }

  return (
    <div
      ref={rootRef}
      className={DOMUtil.classNames(
        'lyrixi-text-ellipsis',
        isOverflow && 'lyrixi-text-ellipsis-toggle-show',
        expanded ? 'lyrixi-expanded' : ''
      )}
      style={style}
    >
      {/* Element: 展开和收缩按钮 */}
      {isOverflow && (
        <div
          className="lyrixi-text-ellipsis-toggle"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
        >
          {expanded
            ? LocaleUtil.locale('收起', 'lyrixi_def9e98b60e3bfc493bcd7693e702096')
            : LocaleUtil.locale('展开', 'lyrixi_e2edde5adbdf33f6dce59a299cbf5fad')}
        </div>
      )}
      {/* Element: 内容 */}
      {children}
    </div>
  )
}

export default Ellipsis
