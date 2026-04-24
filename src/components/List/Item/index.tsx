import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,Checkbox } from 'lyrixi-mobile'
测试使用-end */

type RawItem = Record<string, unknown>

interface ItemProps {
  _raw?: RawItem
  checked?: boolean
  disabled?: boolean
  checkable?: boolean
  style?: React.CSSProperties
  className?: string
  layout?: string
  imageUrl?: string
  imageRender?: (item: RawItem & { checked?: boolean }) => React.ReactNode
  avatarUrl?: string
  avatarRender?: (item: RawItem & { checked?: boolean }) => React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  note?: React.ReactNode
  content?: React.ReactNode
  actionRender?: (item: RawItem & { checked?: boolean }) => React.ReactNode
  checkboxVariant?: string
  checkboxPosition?: string
  onSelect?: (item: RawItem & { checked?: boolean }) => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Item = ({
  // Value & Display Value
  _raw,
  checked,

  // Status
  disabled,
  checkable,

  // Style
  style,
  className,
  layout,

  // Elements
  imageUrl,
  imageRender,
  avatarUrl,
  avatarRender,
  title,
  description,
  note,
  content,
  actionRender,
  checkboxVariant,
  checkboxPosition,

  // Events
  onSelect,
  onClick
}: ItemProps) => {
  // 获取checkbox
  function getCheckboxNode() {
    if (!checkable) return null

    return <Checkbox variant={checkboxVariant} checked={checked} />
  }

  // 获取note
  function getNoteNode() {
    return <div className="lyrixi-list-item-meta-note">{note}</div>
  }

  // 渲染图片
  function getImageNode() {
    if (typeof imageRender === 'function') {
      return (
        <div className="lyrixi-list-item-meta-image">
          {imageRender({ ...(_raw || {}), checked })}
        </div>
      )
    }
    if (imageUrl && typeof imageUrl === 'string') {
      return (
        <div className="lyrixi-list-item-meta-image">
          <img
            alt=""
            src={imageUrl}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.parentElement?.classList.add('lyrixi-error')
            }}
            onLoad={(e) => {
              const target = e.target as HTMLImageElement
              target.parentElement?.classList.add('lyrixi-success')
            }}
            className="lyrixi-image"
          />
        </div>
      )
    }
    return null
  }

  // 渲染头像
  function getAvatarNode() {
    if (typeof avatarRender === 'function') {
      return (
        <div className="lyrixi-list-item-meta-avatar">
          {avatarRender({ ...(_raw || {}), checked })}
        </div>
      )
    }
    if (avatarUrl && typeof avatarUrl === 'string') {
      return (
        <div className="lyrixi-list-item-meta-avatar">
          <img
            alt=""
            src={avatarUrl}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.parentElement?.classList.add('lyrixi-error')
            }}
            onLoad={(e) => {
              const target = e.target as HTMLImageElement
              target.parentElement?.classList.add('lyrixi-success')
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
    if (typeof actionRender === 'function') {
      return actionRender({ ...(_raw || {}), checked })
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
          layout ? `lyrixi-${layout}` : ''
        )}
        onClick={(e) => {
          e.stopPropagation()
          onClick && onClick(e)
          onSelect && onSelect({ ...(_raw || {}), checked: !checked })
        }}
      >
        {/* Left Checkbox */}
        {checkboxPosition !== 'right' && getCheckboxNode()}

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
          {actionRender && <div className="lyrixi-list-item-action">{getActionNode()}</div>}
        </div>

        {/* Right Checkbox */}
        {checkboxPosition === 'right' && getCheckboxNode()}
      </div>
    )
  }

  return getItemNode()
}

export default Item
