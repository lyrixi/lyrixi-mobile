import React, { forwardRef } from 'react'
import Navigation from './Navigation'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 当前位置
function Current(
  {
    // Value & Display Value
    value,

    // Status
    readOnly,

    // Element
    map,

    // Events
    onChange
  },
  ref
) {
  return (
    <div
      ref={ref}
      className="lyrixi-map-nearbyControl-item"
      // Events
      onClick={(e) => {
        map?.panTo?.({ longitude: value.longitude, latitude: value.latitude, type: value.type })
        if (!readOnly) {
          onChange && onChange(value)
        }
      }}
    >
      {/* Element: Content */}
      <div className="lyrixi-map-nearbyControl-item-content">
        {/* Element: Title */}
        <div className="lyrixi-map-nearbyControl-item-content-title">
          <div className="lyrixi-flex-1">
            {value?.name || LocaleUtil.locale('当前位置', 'lyrixi.current.location')}
          </div>
          {/* Element: Navigation */}
          <Navigation
            // Element
            map={map}
            // Value & Display Value
            type={value?.type}
            longitude={value?.longitude}
            latitude={value?.latitude}
            address={value?.address}
          />
        </div>

        {/* Element: Description */}
        <div className="lyrixi-map-nearbyControl-item-content-description">
          <div className="lyrixi-flex-1">{value?.address || ''}</div>
          {/* <div className="lyrixi-map-nearbyControl-item-checkbox">
            {!readOnly && (
              <Checkbox
                checked={
                  active?.latitude &&
                  active?.latitude === value?.latitude &&
                  active?.longitude === value?.longitude
                }
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default forwardRef(Current)
