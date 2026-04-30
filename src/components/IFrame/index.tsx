import React, { useImperativeHandle, forwardRef, useEffect, useRef, type CSSProperties } from 'react'

export interface IFrameRef {
  element: HTMLIFrameElement | null
}

export interface IFrameProps {
  src?: string
  data?: unknown
  style?: CSSProperties
  className?: string
}

// 全屏iframe
const IFrame = forwardRef<IFrameRef, IFrameProps>(function IFrame({ src, data, style, className }, ref) {
  const iframeRef = useRef<HTMLIFrameElement>(null)


  // 修改src，用替换的方法不会产生历史记录长度
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    // 使用 replace 方法修改 src 属性值
    if (src) {
      iframe.contentWindow?.location.replace(src)
    }

    if (data !== undefined) {
      ;(iframe as HTMLIFrameElement & { data?: unknown }).data = data
    }
    // eslint-disable-next-line
  }, [src])


  useImperativeHandle(ref, () => {
    return {
      element: iframeRef.current
    }
  })


  return (
    <iframe
      ref={iframeRef}
      title="iframe"
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', border: 'none', ...style }}
      className={className}
    />
  )
})

export default IFrame
