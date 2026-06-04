import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Icon from '../Icon'
import Title from '../Title'
import Button from '../Button'

import type { MessageComboButton, MessageMainProps, MessageMainRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Main = forwardRef<MessageMainRef, MessageMainProps>(
  (
    {
      // Elements
      iconRender,
      title,
      // Style
      titleClassName,
      titleStyle,
      // Value & Display Value
      content,
      // Style
      contentClassName,
      contentStyle,
      footerClassName,
      footerStyle,
      // Value & Display Value
      buttonsLayout = 'horizontal',
      buttons,
      // Events
      onButtonClick,
      // Elements
      children,
      // Style
      className,
      style
    },
    ref
  ) => {
    const rootRef = useRef<HTMLElement>(null)

    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    function renderIcon() {
      if (typeof iconRender !== 'function') return null
      return <Icon>{iconRender()}</Icon>
    }

    const IconNode = renderIcon()
    const hasStructuredBody =
      IconNode || title || content || (Array.isArray(buttons) && buttons.length > 0)

    async function handleButtonClick(
      button: MessageComboButton,
      e: React.MouseEvent<HTMLDivElement>
    ) {
      if (typeof onButtonClick === 'function') {
        await onButtonClick(button, e)
        return
      }
      await button.onClick?.(e)
    }

    if (!hasStructuredBody) {
      return (
        <main
          style={style}
          className={DOMUtil.classNames('lyrixi-message-content', className)}
          ref={rootRef}
        >
          {children}
        </main>
      )
    }

    const hasHeader = IconNode || title
    const hasFooter = Array.isArray(buttons) && buttons.length > 0
    const bodyContent = content ?? children

    return (
      <div>
        {hasHeader ? (
          <Header>
            {IconNode}
            {title ? (
              <Title className={titleClassName} style={titleStyle}>
                {title}
              </Title>
            ) : null}
          </Header>
        ) : null}

        {bodyContent && bodyContent !== '' ? (
          <main
            ref={rootRef}
            className={DOMUtil.classNames('lyrixi-message-content', contentClassName, className)}
            style={{ ...contentStyle, ...style }}
          >
            {bodyContent}
          </main>
        ) : null}

        {hasFooter ? (
          <Footer
            layout={buttonsLayout}
            className={DOMUtil.classNames(
              buttonsLayout === 'vertical' ? 'lyrixi-vertical' : 'lyrixi-horizontal',
              footerClassName
            )}
            style={footerStyle}
          >
            {buttons!.map((button, index) => (
              <Button
                key={button.id ?? index}
                style={button.style}
                className={button.className}
                onClick={(e) => handleButtonClick(button, e)}
              >
                {button.name}
              </Button>
            ))}
          </Footer>
        ) : null}
      </div>
    )
  }
)

export default Main
