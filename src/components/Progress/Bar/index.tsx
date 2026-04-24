import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type Ref } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

type ProgressBarStyle = CSSProperties & { [key: string]: string | number | undefined }

interface ProgressBarProps {
  percent?: number
  className?: string
  style?: ProgressBarStyle
}

interface ProgressBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const ProgressBar = forwardRef<ProgressBarRef, ProgressBarProps>(function ProgressBar(
  { percent = 0, className, style },
  ref: Ref<ProgressBarRef>
) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  // 确保percent在0-100范围内
  const availablePercent = Math.max(0, Math.min(100, Number(percent) || 0))

  return (
    <div
      style={style}
      className={DOMUtil.classNames('lyrixi-progress-bar', className)}
      ref={rootRef}
    >
      <div
        className="lyrixi-progress-bar-fill"
        style={{
          width: `${availablePercent}%`
        }}
      />
    </div>
  )
})

export default ProgressBar
