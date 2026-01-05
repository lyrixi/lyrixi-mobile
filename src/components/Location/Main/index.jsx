import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Footer from './Choose/Footer'
import Preview from './Preview'
import Choose from './Choose'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

// 地图标注
const Main = forwardRef(
  (
    {
      // Value & Display Value
      value, // {latitude: '纬度', longitude: '经度', value: '地址'}

      // Status
      open, // 显示类型: preview、choose
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
      onChange,
      onOk,
      onClear
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
      <>
        {/* Element: Map Container */}
        <div
          ref={mainRef}
          // Element
          id={id}
          // Style
          style={style}
          className={DOMUtil.classNames('lyrixi-map-main', className)}
        >
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
        {onOk || onClear ? (
          <Footer
            onOk={
              onOk
                ? () => {
                    console.log('选择标注:')
                    onOk?.(value)
                  }
                : null
            }
            onClear={
              onClear
                ? () => {
                    console.log('清空标注:')
                    onOk?.(null)
                  }
                : null
            }
          />
        ) : null}
      </>
    )
  }
)

export default Main
