import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Footer from './Choose/Footer'
import Preview from './Preview'
import Choose from './Choose'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import type { MapContainerAPI, MapContainerProps } from './../../Map/components/MapContainer'
// 内库使用-end

interface LocationValue {
  latitude?: number | string
  longitude?: number | string
  type?: string
  address?: string
  value?: string
  [key: string]: unknown
}

interface MainProps {
  value?: LocationValue | null
  cacheExpires?: number
  open?: string
  autoLocation?: boolean
  nearbyVisible?: boolean
  className?: string
  style?: React.CSSProperties
  id?: string
  mapConfig?: Record<string, unknown>
  getLocation?: MapContainerProps['getLocation']
  getAddress?: MapContainerProps['getAddress']
  onChange?: (newValue: LocationValue | null) => void
  onOk?: ((value: LocationValue | null) => void) | null
  onClear?: (() => void) | null
}

const Main = forwardRef<unknown, MainProps>(
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
