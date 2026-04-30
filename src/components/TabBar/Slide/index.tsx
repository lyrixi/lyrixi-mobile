import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'
import renderContext from './../utils/renderContext'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface TabBarItem {
  id?: string | number
  name?: React.ReactNode
  description?: React.ReactNode
  placeholder?: React.ReactNode
  disabled?: boolean
  iconRender?: (params: { checked: boolean }) => React.ReactNode
  content?: React.ReactNode | ((params: Record<string, unknown>) => React.ReactNode)
}

interface TabBarValue {
  id?: string | number
}

interface SlideProps {
  separator?: React.ReactNode
  value?: TabBarValue
  list?: TabBarItem[]
  className?: string
  disabled?: boolean
  descriptionPosition?: string
  onChange?: (item: TabBarItem) => void
  style?: React.CSSProperties
}

interface SlideRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Slide = forwardRef<SlideRef, SlideProps>(
  (
    {
      separator,
      value,
      list = [],
      className,
      disabled,
      descriptionPosition,
      onChange,
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
    function getGroup() {
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
                    ? 'lyrixi-tabbar-slide-tab-description lyrixi-top'
                    : 'lyrixi-tabbar-slide-tab-description lyrixi-bottom'
                  : '',
                'lyrixi-tabbar-slide-tab-wrapper',
                item?.disabled ? 'lyrixi-disabled' : '',
                checked ? 'lyrixi-active' : ''
              )}
              data-index={index}
              onClick={(e) => {
                e.stopPropagation()
                onChange && onChange(item)
              }}
            >
              <div className="lyrixi-tabbar-slide-tab">
                {typeof item.iconRender === 'function'
                  ? item.iconRender({ checked: checked })
                  : null}
                {description && descriptionPosition === 'top' ? (
                  <div className="lyrixi-tabbar-slide-tab-description">{description}</div>
                ) : null}
                {name && <div className="lyrixi-tabbar-slide-tab-name">{name}</div>}
                {!name && placeholder ? (
                  <div className="lyrixi-tabbar-tabs-tab-placeholder">{placeholder}</div>
                ) : null}
                {description && descriptionPosition !== 'top' ? (
                  <div className="lyrixi-tabbar-slide-tab-description">{description}</div>
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
        className={DOMUtil.classNames('lyrixi-tabbar-slide', className)}
        ref={rootRef}
      >
        {getGroup()}
      </div>
    )
  }
)

export default Slide
