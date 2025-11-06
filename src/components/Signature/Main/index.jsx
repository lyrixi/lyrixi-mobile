import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Signature from './Signature'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 手写签名
const Main = (
  {
    onChange,
    onCancel,
    // 绘画配置
    color,
    backgroundColor,
    style
  },
  ref
) => {
  const rootRef = useRef(null)
  // 签名
  const signatureRef = useRef(null)

  // 外部调用
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      getBase64: signatureRef?.current?.getBase64,
      clear: signatureRef?.current?.clear
    }
  })

  return (
    <div ref={rootRef} className="lyrixi-signature-main" style={style}>
      {/* 绘制区域 */}
      <Signature ref={signatureRef} color={color} backgroundColor={backgroundColor} />
      {/* 按钮区域 */}
      <div className="lyrixi-signature-main-buttons">
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-cancel"
          onClick={onCancel}
        >
          <p>{LocaleUtil.locale('取消', 'lyrixi_cancel')}</p>
        </div>
        <div className="lyrixi-flex-1"></div>
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-clear"
          onClick={() => {
            signatureRef?.current?.clear?.()
          }}
        >
          <p>{LocaleUtil.locale('清除', 'lyrixi_clear')}</p>
        </div>
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-ok"
          onClick={async () => {
            let base64 = await signatureRef?.current?.getBase64?.()
            onChange && onChange(base64)
          }}
        >
          <p>{LocaleUtil.locale('确认', 'lyrixi_confirm')}</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Main)
