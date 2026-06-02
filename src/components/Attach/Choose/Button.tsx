import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Uploading from './../Uploading'

import type { AttachButtonProps, AttachButtonRef } from '../types/Attach.Button.types'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import Icon from './../../Icon'
import Icons from '../../../icons'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传按钮
const UploadButton = forwardRef<AttachButtonRef, AttachButtonProps>(function UploadButton(
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
      <Icon svg={Icons.Plus} size="l" className="lyrixi-attach-choose-icon lyrixi-attach-choose-icon-add" />

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

export default UploadButton
