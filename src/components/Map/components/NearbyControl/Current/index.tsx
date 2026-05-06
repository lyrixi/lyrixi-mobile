import React, { forwardRef } from 'react'
import Navigation from './Navigation'

import type { CurrentProps } from './types'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */


// 当前位置
const Current = forwardRef<HTMLDivElement, CurrentProps>(({ value, readOnly, map, onChange }, ref) => {
  return (
    <div
      ref={ref}
      className="lyrixi-map-nearbyControl-item"
      onClick={() => {
        map?.panTo?.({ longitude: value?.longitude, latitude: value?.latitude, type: value?.type })
        if (!readOnly) {
          onChange?.(value)
        }
      }}
    >
      <div className="lyrixi-map-nearbyControl-item-content">
        <div className="lyrixi-map-nearbyControl-item-content-title">
          <div className="lyrixi-flex-1">
            {value?.name ||
              LocaleUtil.locale('当前位置', 'lyrixi_5eac11b4b636ca69e08fa158ca2cc13d')}
          </div>
          <Navigation
            map={map}
            type={value?.type}
            name={value?.name}
            longitude={value?.longitude}
            latitude={value?.latitude}
            address={value?.address as string | undefined}
          />
        </div>

        <div className="lyrixi-map-nearbyControl-item-content-description">
          <div className="lyrixi-flex-1">{value?.address || ''}</div>
        </div>
      </div>
    </div>
  )
})

export type { CurrentProps, MapValue } from './types'
export default Current
