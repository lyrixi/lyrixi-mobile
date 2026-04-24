import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import type { MapContainerAPI } from './../MapContainer'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

export interface ZoomControlProps {
  style?: React.CSSProperties
  className?: string
  map?: MapContainerAPI
  onZoomIn?: (map: MapContainerAPI) => void
  onZoomOut?: (map: MapContainerAPI) => void
}

// 缩放控件
const ZoomControl = forwardRef<
  {
    element: HTMLDivElement | null
    getElement: () => HTMLDivElement | null
    zoomOut: () => void
    zoomIn: () => void
  },
  ZoomControlProps
>(({ style, className, map, onZoomIn, onZoomOut }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)

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
    onZoomOut && onZoomOut(map)
  }

  function zoomIn() {
    if (!map) return
    map.zoomIn()
    onZoomIn && onZoomIn(map)
  }

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
