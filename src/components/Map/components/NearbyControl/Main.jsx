import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { Result, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 附近结果
function Main({
  // Value & Display Value
  list,

  // Events
  onChange
}) {
  // 错误信息
  let status = '500'
  let message = typeof list === 'string' ? list : null
  if (Array.isArray(list) && list.length === 0) {
    status = 'empty'
    message = LocaleUtil.locale('暂无数据', 'lyrixi_no_data')
  }
  return (
    <div className="lyrixi-map-nearbyControl-main">
      {message && <Result className="lyrixi-map-main-result" status={status} title={message} />}
      {Array.isArray(list) &&
        list.length &&
        list.map((item, index) => {
          return (
            <div
              className="lyrixi-map-nearbyControl-item"
              key={index}
              data-nearby-item-id={`${item.longitude},${item.latitude}`}
              onClick={(e) => {
                onChange && onChange(item)
              }}
            >
              <div className="lyrixi-map-nearbyControl-item-content">
                <p className="lyrixi-map-nearbyControl-item-content-title">{item.name}</p>
                <p className="lyrixi-map-nearbyControl-item-content-description">
                  {item.address || ''}
                </p>
              </div>
              {/* <Checkbox
                checked={
                  active?.latitude &&
                  active?.latitude === item?.latitude &&
                  active?.longitude === item?.longitude
                }
              /> */}
            </div>
          )
        })}
    </div>
  )
}
export default Main
