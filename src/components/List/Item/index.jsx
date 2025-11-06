import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,Checkbox } from 'lyrixi-mobile'
测试使用-end */

const Item = ({
  // Item Data
  item,

  // Style
  disabled,
  imageUrl,
  avatarUrl,
  title,
  description,
  note,
  content,
  action,

  // GLobal Config
  itemLayout,
  checkable,
  checkboxRender,
  checked,
  onClick,

  // Item Style
  className,
  style
}) => {
  // 获取checkbox
  function getCheckboxNode() {
    if (!checkable) return null

    if (typeof checkboxRender === 'function') {
      let newCheckbox = checkboxRender({ ...(item || {}), checked })
      if (newCheckbox !== undefined) return newCheckbox
    }

    return <Checkbox checked={checked} />
  }

  // 获取note
  function getNoteNode() {
    return <div className="lyrixi-list-item-meta-note">{note}</div>
  }

  // 渲染图片
  function getImageNode() {
    if (typeof imageUrl === 'string') {
      return (
        <div className={`lyrixi-list-item-meta-image`}>
          <img
            alt=""
            src={imageUrl}
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
    return null
  }

  // 渲染头像
  function getAvatarNode() {
    if (typeof avatarUrl === 'string') {
      return (
        <div className={`lyrixi-list-item-meta-avatar`}>
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
    return null
  }

  // 获取action
  function getActionNode() {
    if (typeof action === 'function') {
      return action({ ...(item || {}), checked })
    }

    return null
  }

  // 获取item节点
  function getItemNode() {
    return (
      <div
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-list-item',
          className,
          disabled ? 'lyrixi-disabled' : '',
          checked ? 'lyrixi-checked' : '',
          itemLayout ? itemLayout : ''
        )}
        onClick={(e) => {
          e.stopPropagation()
          onClick && onClick(e)
        }}
      >
        {/* Left Checkbox */}
        {checkable !== 'right' && getCheckboxNode(checked)}

        {/* Main */}
        <div className="lyrixi-list-item-main">
          {/* Meta */}
          <div className="lyrixi-list-item-meta">
            {getImageNode()}

            {getAvatarNode()}

            <div className="lyrixi-list-item-meta-content">
              <div className="lyrixi-list-item-meta-title">{title}</div>
              {description && (
                <div className="lyrixi-list-item-meta-description">{description}</div>
              )}
            </div>

            {getNoteNode()}
          </div>

          {/* Content */}
          {content && <div className="lyrixi-list-item-content">{content}</div>}

          {/* Action */}
          {action && <div className="lyrixi-list-item-action">{getActionNode()}</div>}
        </div>

        {/* Right Checkbox */}
        {checkable === 'right' && getCheckboxNode(checked)}
      </div>
    )
  }

  return getItemNode()
}

export default Item
