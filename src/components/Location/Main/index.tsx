import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Footer from './Choose/Footer'
import Preview from './Preview'
import Choose from './Choose'


import type { LocationMainProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import type { MapContainerAPI } from './../../Map/types'
// 内库使用-end

const Main = forwardRef<unknown, LocationMainProps>(
  (
    {
      value,
      cacheExpires,
      open,
      autoLocation = true,
      nearbyVisible,
      className,
      style,
      id,
      mapConfig,
      getLocation,
      getAddress,
      onChange,
      onOk,
      onClear
    },
    ref
  ) => {
    const mainRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<MapContainerAPI | null>(null)

    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current,
        ...(mapRef.current || {})
      }
    })

    return (
      <>
        <div
          ref={mainRef}
          id={id}
          style={style}
          className={DOMUtil.classNames('lyrixi-map-main', className)}
        >
          {open === 'preview' && (
            <Preview
              ref={mapRef}
              value={value}
              mapConfig={mapConfig}
            />
          )}

          {open === 'choose' && (
            <Choose
              ref={mapRef}
              value={value}
              cacheExpires={cacheExpires}
              autoLocation={autoLocation}
              nearbyVisible={nearbyVisible}
              mapConfig={mapConfig}
              getLocation={getLocation}
              getAddress={getAddress}
              onChange={(newValue) => {
                onChange && onChange(newValue)
              }}
            />
          )}
        </div>
        {(onOk || onClear) && open === 'choose' ? (
          <Footer
            onOk={
              onOk
                ? () => {
                  console.log('选择标注:')
                  onOk?.(value ?? null)
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
