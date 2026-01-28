import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 导航
function Navigation({
  // Value & Display Value
  type,
  longitude,
  latitude,
  name,
  address,

  // Element
  map
}) {
  if (!longitude || !latitude || typeof map?.openLocation !== 'function') return null
  return (
    <span
      className="lyrixi-map-navigation-button"
      // Events
      onClick={() =>
        map.openLocation({
          map,
          type,
          longitude,
          latitude,
          name,
          address
        })
      }
    >
      {/* Element: Icon */}
      <i className="lyrixi-map-navigation-button-icon"></i>

      {/* Element: Text */}
      <span className="lyrixi-map-navigation-button-text">
        {LocaleUtil.locale('导航', 'lyrixi_056f2d7df6e6b64625c3a2d27ce07b05')}
      </span>
    </span>
  )
}
export default Navigation
