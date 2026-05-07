import React from 'react'

import type { NearbyControlMainProps } from './types'

// 内库使用-start
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { Result } from 'lyrixi-mobile'
测试使用-end */



// 附近结果
function Main({ result, onChange }: NearbyControlMainProps) {
  if (!result) {
    return null
  }
  const status = typeof result.status === 'string' ? result.status : ''
  const list = result.list
  const message = typeof result.message === 'string' ? result.message : undefined
  return (
    <div className="lyrixi-map-nearbyControl-main">
      {status && status !== 'success' && (
        <Result className="lyrixi-map-main-result" status={status} title={message} />
      )}
      {status === 'success' &&
        Array.isArray(list) &&
        (list as Record<string, unknown>[]).map((item, index) => {
          return (
            <div
              className="lyrixi-map-nearbyControl-item"
              key={index}
              data-nearby-item-id={`${String(item.longitude)},${String(item.latitude)}`}
              onClick={() => {
                onChange?.(item)
              }}
            >
              <div className="lyrixi-map-nearbyControl-item-content">
                <p className="lyrixi-map-nearbyControl-item-content-title">
                  {item.name as React.ReactNode}
                </p>
                <p className="lyrixi-map-nearbyControl-item-content-description">
                  {typeof item.address === 'string' ? item.address : ''}
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export type { NearbyControlMainProps } from './types'
export default Main
