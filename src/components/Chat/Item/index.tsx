import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Checkbox } from 'lyrixi-mobile'
测试使用-end */

const Chat = (
  {
    // Value & Display Value
    id,
    _raw,

    // Status
    checked,
    checkable,

    // Style
    className,
    position,
    style,
    checkboxVariant,
    checkboxPosition,

    // Elements
    avatarUrl,
    avatarRender,
    avatarNode,
    authorRender,
    authorNode,
    content
  },
  ref
) => {
  // 节点
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  // 渲染头像
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
              e.target.parentNode.classList.add('lyrixi-error')
            }}
            onLoad={(e) => {
              e.target.parentNode.classList.add('lyrixi-success')
            }}
            className="lyrixi-avatar"
          />
        </div>
      )
    }
    return <div className="lyrixi-chat-item-avatar">{avatarNode}</div>
  }

  // 渲染作者
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

  // 获取checkbox
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
      {/* Left Checkbox */}
      {checkboxPosition !== 'right' && getCheckboxNode(checked)}

      <div className="lyrixi-chat-item-main">
        {/* Avatar */}
        {getAvatarNode()}

        {/* Meta */}
        <div className="lyrixi-chat-item-content">
          {getAuthorNode()}
          <div className="lyrixi-chat-item-content-bubble">{content}</div>
        </div>
      </div>

      {/* Right Checkbox */}
      {checkboxPosition === 'right' && getCheckboxNode(checked)}
    </div>
  )
}

export default forwardRef(Chat)
