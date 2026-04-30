import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import type { ZoomControlProps, ZoomControlRef } from './types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

export type { ZoomControlProps, ZoomControlRef } from './types'

// 缩放控件
const ZoomControl = forwardRef<ZoomControlRef, ZoomControlProps>(
  ({ style, className, map, onZoomIn, onZoomOut }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)

  /* eslint-disable @typescript-eslint/no-use-before-define -- zoomIn/zoomOut 声明在下方，与既有结构一致 */
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      zoomOut,
      zoomIn
    }
  })

  function zoomOut() {
    if (!map) return
    map.zoomOut()
    onZoomOut?.(map)
  }

  function zoomIn() {
    if (!map) return
    map.zoomIn()
    onZoomIn?.(map)
  }
  /* eslint-enable @typescript-eslint/no-use-before-define */

  return (
    <div
      ref={rootRef}
      style={style}
      className={DOMUtil.classNames('lyrixi-map-zoomControl', className)}
    >
      <div className="lyrixi-map-zoomControl-in" onClick={zoomIn}>
        <div className="lyrixi-map-zoomControl-icon"></div>
      </div>

      <div className="lyrixi-map-zoomControl-out" onClick={zoomOut}>
        <div className="lyrixi-map-zoomControl-icon"></div>
      </div>
    </div>
  )
})

export default ZoomControl
