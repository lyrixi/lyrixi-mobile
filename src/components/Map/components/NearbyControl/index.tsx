import React, { forwardRef, useImperativeHandle, useEffect, useState, useRef } from 'react'
import type { MapContainerAPI } from './../MapContainer'

import getTabs from './utils/getTabs'
import Current from './Current'
import Toggle from './Toggle'
import Tabs from './Tabs'
import Main from './Main'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading } from 'lyrixi-mobile'
测试使用-end */

interface MapValue {
  name?: string
  address?: string
  longitude?: number | string
  latitude?: number | string
  type?: string
  [key: string]: unknown
}

interface QueryNearbyResult {
  status: string
  list?: unknown[]
  message?: string
  [key: string]: unknown
}

export interface NearbyControlProps {
  value?: MapValue
  radius?: number
  readOnly?: boolean
  nearbyVisible?: boolean
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

// 附近推荐
const Nearby = forwardRef<
  {
    element: HTMLDivElement | null
    getElement: () => HTMLDivElement | null
    reload: () => void
  } | null,
  NearbyControlProps
>(({ value, radius, readOnly, nearbyVisible = true, map, onChange, onSuccess, onError }, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)


  const [result, setResult] = useState<QueryNearbyResult | null>(null)

  const [tab, setTab] = useState(getTabs()[0])


  useEffect(() => {
    if (
      !nearbyVisible ||
      readOnly ||
      !tab?.name ||
      !value?.longitude ||
      !value?.latitude ||
      Loading.exists()
    )
      return
    if (!map) return
    void loadData()
    // eslint-disable-next-line
  }, [JSON.stringify(tab), JSON.stringify(value)])


  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      reload: loadData
    }
  })


  async function loadData() {
    if (!map) return
    const loadMsg = LocaleUtil.locale('搜索中', 'lyrixi_9bc4c05af0d6d8e8fcad313f7614006b')
    Loading.show({
      content: typeof loadMsg === 'string' ? loadMsg : '…'
    })
    const newResult = (await map.queryNearby({
      map: map,
      keyword: (tab as { id?: string; name?: string }).id || tab.name,
      longitude: value?.longitude,
      latitude: value?.latitude,
      type: value?.type,
      radius: radius
    })) as QueryNearbyResult
    Loading.hide()

    setResult(newResult)

    const contentElement = rootRef.current?.querySelector<HTMLElement>(
      '.lyrixi-map-nearbyControl-main'
    )
    if (contentElement) {
      contentElement.scrollTop = 0
    }

    if (newResult.status === 'success') {
      onSuccess?.(newResult)
    } else {
      onError?.(newResult)
    }
  }


  return (
    <div className="lyrixi-map-nearbyControl" ref={rootRef}>
      <Current
        map={map}
        readOnly={readOnly}
        value={value}
        onChange={(item) => {
          onChange && onChange(item)
        }}
      />

      {!nearbyVisible || readOnly ? null : (
        <>
          <Toggle />

          <div className="lyrixi-map-nearbyControl-body">
            <Tabs tab={tab} onChange={setTab} />

            <Main
              result={result}
              value={value}
              onChange={(item: Record<string, unknown>) => {
                if (map) {
                  map.panTo({
                    longitude: item.longitude as number | string,
                    latitude: item.latitude as number | string,
                    type: item.type as string | undefined
                  })
                }
                onChange && onChange(item)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
})
export default Nearby
