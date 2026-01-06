import React, { Fragment, forwardRef } from 'react'

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

const Main = forwardRef(
  (
    {
      // Value & Display Value
      result,
      value,
      // Style
      style,
      className,
      optionStyle,
      optionClassName,
      // Events
      onReLoad,
      onSelect
    },
    ref
  ) => {
    // 显示分栏
    const indexes = {}

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-cascader-main', className)}
        ref={ref}
      >
        {result?.status !== 'success' && (
          <Result title={result?.message} status={result?.status} full>
            {result?.status === 'error' && onReLoad ? (
              <Button className="lyrixi-result-button" color="primary" onClick={onReLoad}>
                {LocaleUtil.locale('重新加载', 'lyrixi.reload')}
              </Button>
            ) : null}
          </Result>
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
              <Fragment key={item.id || index}>
                {anchorBar}
                <List.Item
                  style={optionStyle}
                  className={DOMUtil.classNames(`lyrixi-cascader-option`, optionClassName)}
                  checked={value?.some?.((selected) => {
                    return selected.id === item.id
                  })}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelect(item)
                  }}
                  title={item.name}
                  checkboxVariant="text"
                />
              </Fragment>
            )
          })}
      </div>
    )
  }
)

export default Main
