import React, { useImperativeHandle, forwardRef, useEffect, useRef } from 'react'

// 全屏iframe
function IFrame({ src, data, style, className }, ref) {
  const iframeRef = useRef(null)

  useImperativeHandle(ref, () => {
    return iframeRef.current
  })

  // 修改src，用替换的方法不会产生历史记录长度
  useEffect(() => {
    let iframe = iframeRef.current
    // 使用 replace 方法修改 src 属性值
    iframe.contentWindow.location.replace(src)

    if (iframe) {
      iframe.data = data
    }
    // eslint-disable-next-line
  }, [src])

  return (
    <iframe
      ref={iframeRef}
      title="iframe"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', ...style }}
      className={className}
    />
  )
}

export default forwardRef(IFrame)
