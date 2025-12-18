import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import Thumbnail from './Thumbnail'

// 测试使用
// import { Bridge, Device } from 'lyrixi-mobile'

// 照片视频预览
const Edit = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Events
      onDelete,
      onPreview
    },
    ref
  ) => {
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: comboRef?.current,
        getRootDOM: () => {
          return comboRef?.current
        }
      }
    })

    return (
      <div ref={comboRef} className="lyrixi-signature-edit-container">
        {/* Element: Thumbnail */}
        <Thumbnail
          // Value & Display Value
          src={value}
          // Events
          onPreview={onPreview}
        />

        {/* Element: Delete Button */}
        {typeof onDelete === 'function' && (
          <div
            className="lyrixi-signature-edit-image-delete"
            // Events
            onClick={(e) => {
              e.stopPropagation()

              onDelete('')
            }}
          >
            <div className="lyrixi-signature-edit-image-delete-icon"></div>
          </div>
        )}
      </div>
    )
  }
)

export default Edit
