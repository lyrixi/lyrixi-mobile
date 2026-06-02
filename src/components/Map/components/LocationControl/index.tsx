import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import type { MapContainerAPI } from '../../types'

import type { MapLocationControlProps, MapLocationControlRef } from '../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Loading from './../../../Loading'
import Toast from './../../../Toast'
import Icon from '../../../Icon'
import Icons from '../../../../icons'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, Toast } from 'lyrixi-mobile'
测试使用-end */

function isErrorResult(
  v: unknown
): v is { status: 'error' | string; message?: string } {
  return (
    typeof v === 'object' &&
    v !== null &&
    'status' in v &&
    (v as { status: unknown }).status === 'error'
  )
}

// 定位控件
const LocationControl = forwardRef<MapLocationControlRef, MapLocationControlProps>(
  ({ style, className, map, onChange }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)

  /* eslint-disable @typescript-eslint/no-use-before-define -- location 声明在下方，与既有结构一致 */
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      update: location
    }
  })

  function location(): Promise<unknown> {
    // eslint-disable-next-line
    return new Promise(async (resolve) => {
      if (!map) {
        resolve({ status: 'error', message: 'no map' })
        return
      }
      const msg = LocaleUtil.locale('定位中...', 'lyrixi_2c4006447f62bffd57686aabbdc3f5dd')
      Loading.show({
        content: typeof msg === 'string' ? msg : '…'
      })
      let result: unknown = await map.getLocation({ type: 'wgs84' })
      result = await map.getAddress(result as Parameters<MapContainerAPI['getAddress']>[0])
      if (
        result &&
        typeof result === 'object' &&
        'longitude' in result &&
        'latitude' in result &&
        (result as { longitude?: unknown; latitude?: unknown }).longitude &&
        (result as { longitude?: unknown; latitude?: unknown }).latitude
      ) {
        map.panTo(result as Parameters<MapContainerAPI['panTo']>[0])
      }
      resolve(result)
      Loading.hide()
    })
  }
  /* eslint-enable @typescript-eslint/no-use-before-define */

  async function handleLocation() {
    const result = await location()
    if (isErrorResult(result) && result.message) {
      Toast.show({ content: result.message })
      return
    }
    if (onChange) onChange(result)
  }

  return (
    <div
      ref={rootRef}
      style={style}
      className={DOMUtil.classNames('lyrixi-map-locationControl', className)}
      onClick={handleLocation}
    >
      <Icon svg={Icons.Location} size="m" className="lyrixi-map-locationControl-icon" />
    </div>
  )
})

export default LocationControl
