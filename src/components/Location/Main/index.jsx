import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Preview from './Preview'
import Choose from './Choose'

// 地图标注
const Main = forwardRef(
  (
    {
      // Value & Display Value
      value, // {latitude: '纬度', longitude: '经度', value: '地址'}

      // Status
      open, // 显示类型: preview、choose
      allowClear,
      autoLocation = true,

      // Style
      className,
      style,

      // Element
      id,
      config,
      getLocation,
      getAddress,

      // Events
      onChange
    },
    ref
  ) => {
    const mainRef = useRef(null)
    const mapRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current,
        ...mapRef.current
      }
    })

    return (
      <div
        ref={mainRef}
        // Element
        id={id}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-map-main', className)}
      >
        {/* Element: Map Container */}
        <div className="lyrixi-map-main-map">
          {/* Element: Preview */}
          {open === 'preview' && (
            <Preview
              ref={mapRef}
              // Value & Display Value
              value={value}
              // Element
              config={config}
            />
          )}

          {/* Element: Choose */}
          {open === 'choose' && (
            <Choose
              ref={mapRef}
              // Value & Display Value
              value={value}
              // Status
              autoLocation={autoLocation}
              // Element
              config={config}
              getLocation={getLocation}
              getAddress={getAddress}
              // Events
              onChange={(newValue) => {
                onChange && onChange(newValue)
              }}
            />
          )}
        </div>
      </div>
    )
  }
)

export default Main
