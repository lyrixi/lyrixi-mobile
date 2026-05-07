import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Uploading from './../Uploading'

import type { UploadButtonProps, UploadButtonRef } from '../types'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */


// 上传按钮
const UploadButton = forwardRef<UploadButtonRef, UploadButtonProps>(function UploadButton(
  { uploadingRender, style, className, disabled },
  ref
) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <div
      ref={rootRef}
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-attach-choose-button',
        className,
        disabled && 'lyrixi-disabled'
      )}
      aria-disabled={disabled}
    >
      <i className="lyrixi-attach-choose-icon lyrixi-attach-choose-icon-add"></i>

      {/* Loading图标 */}
      <Uploading
        uploadingType="choose"
        uploadingRender={uploadingRender}
        className="lyrixi-attach-choose-icon"
      />

      {/* 文字 */}
      <div className="lyrixi-attach-choose-button-label">
        {LocaleUtil.locale('附件', 'lyrixi_c9a6ee90f5d43732e3f6cf4dcaa8493c')}
      </div>
    </div>
  )
})

export type { UploadButtonProps, UploadButtonRef } from '../types'
export default UploadButton
