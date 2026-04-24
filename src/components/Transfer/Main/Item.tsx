import React, { type ReactNode } from 'react'

export interface TransferItemProps {
  children?: ReactNode
  sortable?: boolean
  onAdd?: () => void
  onDelete?: () => void
}

// 单项
const Item = ({ children, sortable, onAdd, onDelete }: TransferItemProps) => {
  return (
    <div className="lyrixi-transfer-item">
      {/* Element: Operate */}
      <div
        className="lyrixi-transfer-item-operate"
        onClick={() => {
          if (onAdd) onAdd()
          else onDelete?.()
        }}
      >
        {onAdd ? (
          <i className="lyrixi-transfer-item-operate-icon lyrixi-add" />
        ) : (
          <i className="lyrixi-transfer-item-operate-icon lyrixi-delete" />
        )}
      </div>

      {/* Element: Content */}
      <div className="lyrixi-transfer-item-content">{children}</div>

      {/* Element: Drop Handle */}
      {sortable ? (
        <div className="lyrixi-transfer-item-drop">
          <i className="lyrixi-transfer-item-drop-icon" />
        </div>
      ) : null}
    </div>
  )
}

export default Item
