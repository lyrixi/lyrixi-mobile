import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 导航
function Navigation({
  // 自定义导航
  map,
  // 终点位置
  type,
  longitude,
  latitude,
  name,
  address
}) {
  if (!longitude || !latitude || typeof map?.openLocation !== 'function') return null
  return (
    <span
      className="lyrixi-map-navigation-button"
      onClick={() =>
        map.openLocation({
          map,
          // 终点位置
          type,
          longitude,
          latitude,
          name,
          address
        })
      }
    >
      <i className="lyrixi-map-navigation-button-icon"></i>
      <span className="lyrixi-map-navigation-button-text">
        {LocaleUtil.locale('导航', 'lyrixi_navigation')}
      </span>
    </span>
  )
}
export default Navigation
