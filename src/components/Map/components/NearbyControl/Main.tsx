import React from 'react'

// 内库使用-start
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { Result } from 'lyrixi-mobile'
测试使用-end */

// 附近结果
function Main({
  // Value & Display Value
  result,
  // {status: 'empty' | 'error' | 'success', list, message}

  // Events
  onChange
}) {
  if (!result) {
    return null
  }
  return (
    <div className="lyrixi-map-nearbyControl-main">
      {result.status !== 'success' && (
        <Result className="lyrixi-map-main-result" status={result.status} title={result.message} />
      )}
      {result?.status === 'success' &&
        result?.list?.map((item, index) => {
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
