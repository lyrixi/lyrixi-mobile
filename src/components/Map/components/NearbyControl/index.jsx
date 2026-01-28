import React, { forwardRef, useImperativeHandle, useEffect, useState, useRef } from 'react'

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

// 附近推荐
function Nearby(
  {
    // Value & Display Value
    value, // {name: '', address: '', longitude: '', latitude: ''}

    // Style
    radius,

    // Status
    readOnly,

    // Element
    map,

    // Events
    onChange,
    onSuccess,
    onError
  },
  ref
) {
  // 容器
  const rootRef = useRef(null)

  const [result, setResult] = useState(null)
  const [tab, setTab] = useState(getTabs()[0])

  // 节点
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      reload: loadData
    }
  })

  // 初始化、切换tab更新附近的点
  useEffect(() => {
    // 只读、参数不全、加载中则不加载数据
    if (readOnly || !tab?.name || !value?.longitude || !value?.latitude || Loading.exists()) return

    loadData()
    // eslint-disable-next-line
  }, [JSON.stringify(tab), JSON.stringify(value)])

  // 获取附近的点
  async function loadData() {
    Loading.show({
      content: LocaleUtil.locale('搜索中', 'lyrixi_9bc4c05af0d6d8e8fcad313f7614006b')
    })
    let newResult = await map.queryNearby({
      map: map,
      keyword: tab.id || tab.name,
      longitude: value?.longitude,
      latitude: value?.latitude,
      type: value?.type,
      radius: radius
    })
    Loading.hide()

    // 刷新列表
    setResult(newResult)

    // 重置滚动条
    let contentElement = rootRef.current?.querySelector?.('.lyrixi-map-nearbyControl-main')
    if (contentElement) {
      contentElement.scrollTop = 0
    }

    if (newResult.status === 'success') {
      onSuccess && onSuccess(newResult)
    } else {
      onError && onError(newResult)
    }
  }

  return (
    <div className="lyrixi-map-nearbyControl" ref={rootRef}>
      {/* Element: Current */}
      <Current
        // Element
        map={map}
        // Status
        readOnly={readOnly}
        // Value & Display Value
        value={value}
        // Events
        onChange={(item) => {
          onChange && onChange(item)
        }}
      />

      {readOnly ? null : (
        <>
          {/* Element: Toggle */}
          <Toggle />

          {/* Element: Body */}
          <div className="lyrixi-map-nearbyControl-body">
            {/* Element: Tabs */}
            <Tabs
              // Value & Display Value
              tab={tab}
              // Events
              onChange={setTab}
            />

            {/* Element: Main */}
            <Main
              // Value & Display Value
              result={result}
              value={value}
              // Events
              onChange={(item) => {
                map.panTo({ longitude: item.longitude, latitude: item.latitude, type: item.type })
                onChange && onChange(item)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}
export default forwardRef(Nearby)
