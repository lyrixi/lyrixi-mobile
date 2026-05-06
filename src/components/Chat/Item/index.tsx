import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import type { ChatItemProps, ChatItemRef } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Checkbox } from 'lyrixi-mobile'
测试使用-end */


const Chat = (
  {
    _raw,
    checked,
    checkable,
    className,
    position,
    style,
    checkboxVariant,
    checkboxPosition,
    avatarUrl,
    avatarRender,
    avatarNode,
    authorRender,
    authorNode,
    content
  }: ChatItemProps,
  ref: React.ForwardedRef<ChatItemRef>
) => {
  const rootRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  function renderAvatar() {
    if (typeof avatarRender === 'function') {
      return (
        <div className="lyrixi-chat-item-avatar">{avatarRender({ ...(_raw || {}), checked })}</div>
      )
    }
    if (avatarUrl && typeof avatarUrl === 'string') {
      return (
        <div className="lyrixi-chat-item-avatar">
          <img
            alt=""
            src={avatarUrl}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              if (target.parentNode instanceof Element) {
                target.parentNode.classList.add('lyrixi-error')
              }
            }}
            onLoad={(e) => {
              const target = e.target as HTMLImageElement
              if (target.parentNode instanceof Element) {
                target.parentNode.classList.add('lyrixi-success')
              }
            }}
            className="lyrixi-avatar"
          />
        </div>
      )
    }
    return <div className="lyrixi-chat-item-avatar">{avatarNode}</div>
  }

  function renderAuthor() {
    if (typeof authorRender === 'function') {
      return (
        <div className="lyrixi-chat-item-content-author">
          {authorRender({ ...(_raw || {}), checked })}
        </div>
      )
    }
    if (authorNode) {
      return <div className="lyrixi-chat-item-content-author">{authorNode}</div>
    }
    return null
  }

  function renderCheckbox() {
    if (!checkable) return null
    return <Checkbox variant={checkboxVariant} checked={checked} />
  }

  return (
    <div
      style={style}
      className={DOMUtil.classNames('lyrixi-chat-item', `lyrixi-${position}`, className)}
      ref={rootRef}
    >
      {checkboxPosition !== 'right' && renderCheckbox()}

      <div className="lyrixi-chat-item-main">
        {renderAvatar()}

        <div className="lyrixi-chat-item-content">
          {renderAuthor()}
          <div className="lyrixi-chat-item-content-bubble">{content}</div>
        </div>
      </div>

      {checkboxPosition === 'right' && renderCheckbox()}
    </div>
  )
}

export type { ChatItemProps, ChatItemRef } from './types'
export default forwardRef<ChatItemRef, ChatItemProps>(Chat)
