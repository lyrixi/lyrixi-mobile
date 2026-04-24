import React from 'react'
import type { ReactNode } from 'react'

// 内库使用-start
import Result from './../../../Result'
// 内库使用-end

/* 测试使用-start
import { Result } from 'lyrixi-mobile'
测试使用-end */

export interface MainProps {
  result: Record<string, unknown> | null
  value?: unknown
  onChange?: (item: Record<string, unknown>) => void
}

// 附近结果
function Main({ result, onChange }: MainProps) {
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
                onChange && onChange(item)
              }}
            >
              <div className="lyrixi-map-nearbyControl-item-content">
                <p className="lyrixi-map-nearbyControl-item-content-title">
                  {item.name as ReactNode}
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
export default Main
