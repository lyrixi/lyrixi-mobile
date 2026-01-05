import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Uploading from './../Uploading'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传按钮
const UploadButton = ({ uploadingRender, style, className }, ref) => {
  const rootRef = useRef(null)

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
      className={DOMUtil.classNames('lyrixi-attach-choose-button', className)}
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
        {LocaleUtil.locale('附件', 'lyrixi.attach')}
      </div>
    </div>
  )
}

export default forwardRef(UploadButton)
