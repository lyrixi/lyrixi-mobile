import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 折叠控件
function Toggle() {
  return (
    <div
      className="lyrixi-map-nearbyControl-toggle"
      onClick={(e) => {
        e.currentTarget?.closest('.map-nearbyControl')?.classList?.toggle('active')
      }}
    >
      <span className="lyrixi-map-nearbyControl-toggle-label">
        {LocaleUtil.locale('附近推荐', 'lyrixi_nearby_recommendation')}
      </span>
      <i className="lyrixi-map-nearbyControl-toggle-arrow"></i>
    </div>
  )
}
export default Toggle
