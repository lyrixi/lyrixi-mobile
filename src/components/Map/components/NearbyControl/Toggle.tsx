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
        e.currentTarget?.closest('.lyrixi-map-nearbyControl')?.classList?.toggle('lyrixi-active')
      }}
    >
      <span className="lyrixi-map-nearbyControl-toggle-label">
        {LocaleUtil.locale('附近推荐', 'lyrixi_3aba5f5a87c8f6d38b25588aeff77e6b')}
      </span>
      <i className="lyrixi-map-nearbyControl-toggle-arrow"></i>
    </div>
  )
}
export default Toggle
