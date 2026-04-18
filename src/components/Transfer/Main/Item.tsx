import React from 'react'

// 单项
const Item = ({
  // Value & Display Value
  children,

  // Status
  sortable,

  // Events
  onAdd,
  onDelete
}) => {
  return (
    <div className="lyrixi-transfer-item">
      {/* Element: Operate */}
      <div
        className="lyrixi-transfer-item-operate"
        // Events
        onClick={onAdd || onDelete}
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
      {sortable && (
        <div className="lyrixi-transfer-item-drop">
          <i className="lyrixi-transfer-item-drop-icon" />
        </div>
      )}
    </div>
  )
}

export default Item
