import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'
import getContextNode from './../utils/getContextNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Tabs = forwardRef(
  (
    {
      // Value
      value,
      list = [],
      /*
      [
        {
          iconRender: function,
          name: string,
          description: string,
          disabled
          content: Node,
        }
      ]
      */

      // Style
      separator,
      gap,
      style,
      className,
      disabled,
      descriptionPosition = 'bottom',

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    // 根据value判断此项是否为选中状态
    function getIsChecked(item) {
      if (item?.id !== undefined && value?.id !== undefined) {
        return item.id === value.id
      }
      return false
    }

    // 内容DOM
    function getTabs() {
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
                    ? 'lyrixi-tabbar-tabs-tab-description lyrixi-top'
                    : 'lyrixi-tabbar-tabs-tab-description lyrixi-bottom'
                  : '',
                'lyrixi-tabbar-tabs-tab-wrapper',
                item?.disabled ? 'lyrixi-disabled' : '',
                checked ? 'lyrixi-active' : ''
              )}
              style={{
                ...style,
                marginLeft: gap || style?.marginLeft
              }}
              onClick={(e) => {
                e.stopPropagation()
                onChange && onChange(item)
              }}
            >
              <div className="lyrixi-tabbar-tabs-tab">
                {typeof item.iconRender === 'function'
                  ? item.iconRender({ ...item, checked: checked })
                  : null}
                {description && descriptionPosition === 'top' ? (
                  <div className="lyrixi-tabbar-tabs-tab-description">{description}</div>
                ) : null}
                {name && <div className="lyrixi-tabbar-tabs-tab-name">{name}</div>}
                {!name && placeholder ? (
                  <div className="lyrixi-tabbar-tabs-tab-placeholder">{placeholder}</div>
                ) : null}
                {description && descriptionPosition !== 'top' ? (
                  <div className="lyrixi-tabbar-tabs-tab-description">{description}</div>
                ) : null}
                {getContextNode(item.content, { ...item, checked: checked })}
              </div>
            </div>
            {index < list.length - 1 && separator && (
              <div className="lyrixi-tabbar-tabs-separator">{separator}</div>
            )}
          </Fragment>
        )
      })
    }

    return (
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-tabbar-tabs', className, gap ? 'lyrixi-compact' : '')}
        disabled={disabled}
        ref={rootRef}
      >
        {getTabs()}
      </div>
    )
  }
)

export default Tabs
