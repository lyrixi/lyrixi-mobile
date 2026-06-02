import React from 'react'

// 内库使用-start
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

const PreviewClose = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div
      className="lyrixi-media-preview-main-close"
      onClick={(e) => {
        e.stopPropagation()
        onClose?.()
      }}
    >
      <Icon svg={Icons.Close} size="m" color="white" />
    </div>
  )
}

export default PreviewClose
