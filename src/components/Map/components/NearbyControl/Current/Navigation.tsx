import React from 'react'

import type { NavigationProps } from './types'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */


// 导航
function Navigation({ type, longitude, latitude, name, address, map }: NavigationProps) {
  if (!longitude || !latitude) return null
  const open = map?.openLocation
  if (typeof open !== 'function') return null
  return (
    <span
      className="lyrixi-map-navigation-button"
      onClick={() =>
        open({
          map,
          type,
          longitude,
          latitude,
          name,
          address
        } as Record<string, unknown>)
      }
    >
      <i className="lyrixi-map-navigation-button-icon"></i>
      <span className="lyrixi-map-navigation-button-text">
        {LocaleUtil.locale('导航', 'lyrixi_056f2d7df6e6b64625c3a2d27ce07b05')}
      </span>
    </span>
  )
}

export type { NavigationProps } from './types'
export default Navigation
