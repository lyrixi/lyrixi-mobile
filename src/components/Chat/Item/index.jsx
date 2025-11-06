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
    className,
    // Item Data
    item,

    // Checked
    checked,
    checkable,
    checkboxRender,

    // Style
    position,
    avatar,
    author,
    content,
    ...props
  },
  ref
) => {
  // 节点
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  // 渲染头像
  function getAvatarNode() {
    if (!avatar) return null

    if (typeof avatar === 'function') {
      return avatar({ ...(item || {}), checked })
    }
    if (typeof avatar === 'string') {
      return (
        <div className={`lyrixi-chat-item-avatar`}>
          <img
            alt=""
            src={avatar}
            onError={(e) => {
              e.target.classList.add('lyrixi-error')
            }}
            onLoad={(e) => {
              e.target.classList.add('lyrixi-success')
            }}
            className="lyrixi-avatar"
          />
        </div>
      )
    }
    return avatar
  }

  // 渲染作者
  function getAuthorNode() {
    if (!author) return null

    if (typeof author === 'function') {
      return author({ ...(item || {}), checked })
    }
    if (typeof author === 'string') {
      return <div className={`lyrixi-chat-item-content-author`}>{author}</div>
    }
    return author
  }

  // 获取checkbox
  function getCheckboxNode() {
    if (!checkable) return null

    if (typeof checkboxRender === 'function') {
      let newCheckBox = checkboxRender({ ...(item || {}), checked })
      if (newCheckBox !== undefined) return newCheckBox
    }

    return <Checkbox checked={checked} />
  }

  return (
    <div
      {...props}
      className={DOMUtil.classNames(`lyrixi-chat-item`, position, className)}
      ref={rootRef}
    >
      {/* Left Checkbox */}
      {checkable !== 'right' && getCheckboxNode(checked)}

      <div className="lyrixi-chat-item-main">
        {/* Avatar */}
        {getAvatarNode()}

        {/* Meta */}
        <div className={`lyrixi-chat-item-content`}>
          {getAuthorNode()}
          <div className={`lyrixi-chat-item-content-bubble`}>{content}</div>
        </div>
      </div>

      {/* Right Checkbox */}
      {checkable === 'right' && getCheckboxNode(checked)}
    </div>
  )
}

export default forwardRef(Chat)
