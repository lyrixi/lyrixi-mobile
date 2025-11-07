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
const UploadButton = (
  {
    uploading,
    // 其它属性
    className,
    ...props
  },
  ref
) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      ref={rootRef}
      {...props}
      className={DOMUtil.classNames('lyrixi-attach-choose-button', className)}
    >
      <i className="lyrixi-attach-choose-icon lyrixi-attach-choose-icon-add"></i>

      {/* Loading图标 */}
      <Uploading uploading={uploading} className="lyrixi-attach-choose-icon" />

      {/* 文字 */}
      <div className="attach-choose-button-label">{LocaleUtil.locale('附件', 'lyrixi_attach')}</div>
    </div>
  )
}

export default forwardRef(UploadButton)
