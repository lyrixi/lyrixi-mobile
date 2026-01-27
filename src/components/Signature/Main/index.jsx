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
    // Style
    style,
    color, // 绘画配置: 画笔颜色
    backgroundColor, // 绘画配置: 背景颜色

    // Events
    onChange,
    onCancel
  },
  ref
) => {
  const rootRef = useRef(null)
  // 签名
  const signatureRef = useRef(null)

  // 外部调用
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      getBase64: signatureRef?.current?.getBase64,
      clear: signatureRef?.current?.clear
    }
  })

  return (
    <div
      ref={rootRef}
      // Style
      style={style}
      className="lyrixi-signature-main"
    >
      {/* Element: Signature Canvas */}
      <Signature
        ref={signatureRef}
        color={color} // 绘画配置: 画笔颜色
        backgroundColor={backgroundColor} // 绘画配置: 背景颜色
      />

      {/* Element: Buttons */}
      <div className="lyrixi-signature-main-buttons">
        {/* Element: Cancel Button */}
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-cancel"
          // Events
          onClick={onCancel}
        >
          <p>{LocaleUtil.locale('取消', 'noKey_625fb26b4b3340f7872b411f401e754c')}</p>
        </div>

        <div className="lyrixi-flex-1"></div>

        {/* Element: Clear Button */}
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-clear"
          // Events
          onClick={() => {
            signatureRef?.current?.clear?.()
          }}
        >
          <p>{LocaleUtil.locale('清除', 'noKey_4403fca0c0117e8321811bb48222a926')}</p>
        </div>

        {/* Element: OK Button */}
        <div
          className="lyrixi-signature-main-button lyrixi-signature-main-button-ok"
          // Events
          onClick={async () => {
            let base64 = await signatureRef?.current?.getBase64?.()
            onChange && onChange(base64)
          }}
        >
          <p>{LocaleUtil.locale('确认', 'noKey_e83a256e4f5bb4ff8b3d804b5473217a')}</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Main)
