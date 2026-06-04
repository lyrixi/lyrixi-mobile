import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'

import renderContext from './../utils/renderContext'

import type { TabBarItem, TabBarMenusProps, TabBarMenusRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Menus = forwardRef<TabBarMenusRef, TabBarMenusProps>(
  (
    {
      // Value & Display Value
      separator,
      value,
      list = [],
      // Style
      className,
      // Status
      disabled,
      // Value & Display Value
      descriptionPosition,
      // Events
      onChange,
      // Style
      style
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    // 根据value判断此项是否为选中状态
    function getIsChecked(item: TabBarItem) {
      if (item?.id !== undefined && value?.id !== undefined) {
        return item.id === value.id
      }
      return false
    }

    // 内容DOM
    function getMenus() {
      if (!Array.isArray(list)) {
        return null
      }

      // 遍历
      return list.map((item, index) => {
        const { name, description, placeholder } = item
        let checked = getIsChecked(item)
        return (
          <Fragment key={index}>
            <div
              className={DOMUtil.classNames(
                description
                  ? descriptionPosition === 'lyrixi-top'
                    ? 'lyrixi-tabbar-menus-tab-description lyrixi-top'
                    : 'lyrixi-tabbar-menus-tab-description lyrixi-bottom'
                  : '',
                'lyrixi-tabbar-menus-tab-wrapper',
                item?.disabled ? 'lyrixi-disabled' : '',
                checked ? 'lyrixi-active' : ''
              )}
              data-index={index}
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                onChange?.(item)
              }}
            >
              <div className="lyrixi-tabbar-menus-tab">
                {typeof item.iconRender === 'function'
                  ? item.iconRender({ checked: checked })
                  : null}
                {description && descriptionPosition === 'top' ? (
                  <div className="lyrixi-tabbar-menus-tab-description">{description}</div>
                ) : null}
                {name && <div className="lyrixi-tabbar-menus-tab-name">{name}</div>}
                {!name && placeholder ? (
                  <div className="lyrixi-tabbar-tabs-tab-placeholder">{placeholder}</div>
                ) : null}
                {description && descriptionPosition !== 'top' ? (
                  <div className="lyrixi-tabbar-menus-tab-description">{description}</div>
                ) : null}
                {renderContext(item.content, { ...item, checked: checked })}
              </div>
            </div>

            {index < list.length - 1 && separator && (
              <div className="lyrixi-tabbar-group-separator">{separator}</div>
            )}
          </Fragment>
        )
      })
    }

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-tabbar-menus', className)}
        ref={rootRef}
      >
        {getMenus()}
      </div>
    )
  }
)
export default Menus
