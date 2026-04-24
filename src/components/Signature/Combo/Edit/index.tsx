import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import Thumbnail from './Thumbnail'

interface EditProps {
  value?: string
  onDelete?: (val: string) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface EditRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

// 照片视频预览
const Edit = forwardRef<EditRef, EditProps>(
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
    const comboRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: comboRef?.current,
        getElement: () => {
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
