import React from 'react'

// 内库使用-start
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

const PreviewDelete = ({ onDelete }: { onDelete?: () => void }) => {
  return (
    <div
      className="lyrixi-media-preview-main-delete"
      onClick={(e) => {
        e.stopPropagation()
        onDelete?.()
      }}
    >
      <Icon svg={Icons.Trash} size="xxxs" color="white" />
    </div>
  )
}

export default PreviewDelete
