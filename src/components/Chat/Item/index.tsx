import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Checkbox } from 'lyrixi-mobile'
测试使用-end */

export interface ChatItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatItemProps {
  id?: string | number
  _raw?: Record<string, unknown>
  checked?: boolean
  checkable?: boolean
  className?: string
  position?: string
  style?: React.CSSProperties
  checkboxVariant?: string
  checkboxPosition?: string
  avatarUrl?: string
  avatarRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => React.ReactNode
  avatarNode?: React.ReactNode
  authorRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => React.ReactNode
  authorNode?: React.ReactNode
  content?: React.ReactNode
  onChange?: (checked: boolean) => void
}

const Chat = (
  {
    id,
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

  function getAvatarNode() {
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

  function getAuthorNode() {
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

  function getCheckboxNode() {
    if (!checkable) return null
    return <Checkbox variant={checkboxVariant} checked={checked} />
  }

  return (
    <div
      style={style}
      className={DOMUtil.classNames('lyrixi-chat-item', `lyrixi-${position}`, className)}
      ref={rootRef}
    >
      {checkboxPosition !== 'right' && getCheckboxNode()}

      <div className="lyrixi-chat-item-main">
        {getAvatarNode()}

        <div className="lyrixi-chat-item-content">
          {getAuthorNode()}
          <div className="lyrixi-chat-item-content-bubble">{content}</div>
        </div>
      </div>

      {checkboxPosition === 'right' && getCheckboxNode()}
    </div>
  )
}

export default forwardRef<ChatItemRef, ChatItemProps>(Chat)
