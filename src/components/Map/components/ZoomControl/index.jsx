import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

// 缩放控件
function ZoomControl(
  {
    map,
    onZoomIn,
    onZoomOut,
    // 其它属性
    className,
    style
  },
  ref
) {
  // 容器
  const rootRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      zoomOut: zoomOut,
      zoomIn: zoomIn
    }
  })

  // 缩小地图
  function zoomOut() {
    map.zoomOut()
    onZoomOut && onZoomOut(map)
  }

  // 放大地图
  function zoomIn() {
    map.zoomIn()
    onZoomIn && onZoomIn(map)
  }

  return (
    <div
      style={style}
      ref={rootRef}
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
}

export default forwardRef(ZoomControl)
