import React from 'react'
import Button from './../Button'

/**
 * FooterBar.List 组件
 * 用于渲染 FooterBar 的按钮列表
 */
const FooterBarList = ({
  // Value & Display Value
  list = [] // 按钮列表: [{id: '', name: '', backgroundColor, iconClassName: '', children: [...], onClick: (e) => void}]
}) => {
  return (
    <>
      {list.map((item, index) => {
        const {
          id,
          name,
          backgroundColor,
          color,
          iconClassName,
          disabled,
          children: itemChildren,
          onClick
        } = item

        // 根据是否有 图标 设置不同的样式
        let buttonStyle = {}
        let buttonClassName = ''
        if (iconClassName) {
          buttonStyle = { fontSize: '12px', padding: '0 12px' }
        }

        // 一项时, flex=1
        let buttonItems = 0
        if (name) {
          buttonItems++
        }
        if (iconClassName) {
          buttonItems++
        }
        if (buttonItems === 1) {
          buttonClassName = 'lyrixi-flex-1'
        }

        return (
          <Button
            key={id || index}
            // Value & Display Value
            backgroundColor={backgroundColor}
            color={color}
            iconClassName={iconClassName}
            list={itemChildren}
            // Status
            disabled={disabled}
            // Style
            style={buttonStyle}
            className={buttonClassName}
            // Events
            onClick={(e) => {
              e.stopPropagation()
              onClick && onClick(e)
            }}
          >
            {name}
          </Button>
        )
      })}
    </>
  )
}

// Component Name, for compact
FooterBarList.componentName = 'FooterBar.List'

export default FooterBarList
