import React from 'react'

import type { MediaItemDeleteProps } from '../../types'

// 内库使用-start
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

// 照片视频预览
const Delete = ({
  // Events
  onClick
}: MediaItemDeleteProps) => {
  return (
    <div
      // Style
      className="lyrixi-media-delete"
      // Events
      onClick={(e) => {
        e.stopPropagation()

        onClick && onClick(e)
      }}
    >
      <Icon svg={Icons.Close} size="xs" color="white" className="lyrixi-media-delete-icon" />
    </div>
  )
}
export default Delete
