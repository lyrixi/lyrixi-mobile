import React from 'react'

// 单项
const Item = ({ onAdd, onDelete, sortable, children }) => {
  return (
    <div className="lyrixi-transfer-item">
      {/* 操作 */}
      <div className="lyrixi-transfer-item-operate" onClick={onAdd || onDelete}>
        {onAdd ? (
          <i className="lyrixi-transfer-item-operate-icon lyrixi-add" />
        ) : (
          <i className="lyrixi-transfer-item-operate-icon lyrixi-delete" />
        )}
      </div>

      {/* 内容 */}
      <div className="lyrixi-transfer-item-content">{children}</div>

      {/* 拖拽 */}
      {sortable && (
        <div className="lyrixi-transfer-item-drop">
          <i className="lyrixi-transfer-item-drop-icon" />
        </div>
      )}
    </div>
  )
}

export default Item
