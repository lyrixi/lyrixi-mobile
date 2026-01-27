import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
import Loading from './../../../Loading'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, Toast } from 'lyrixi-mobile'
测试使用-end */

// 定位控件
function LocationControl(
  {
    // Style
    style,
    className,

    // Element
    map,

    // Events
    onChange
  },
  ref
) {
  // 容器
  const rootRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current,
      update: location
    }
  })

  // 定位
  function location() {
    // eslint-disable-next-line
    return new Promise(async (resolve) => {
      Loading.show({
        content: LocaleUtil.locale('定位中...', 'noKey_2c4006447f62bffd57686aabbdc3f5dd')
      })
      // 当前位置
      let result = await map.getLocation({ type: 'wgs84' })
      result = await map.getAddress(result)

      // Location success but value no change
      if (result.longitude && result.latitude) {
        map.panTo(result)
      }

      resolve(result)
      Loading.hide()
    })
  }

  // 点击定位
  async function handleLocation() {
    let result = await location()
    // 定位出错
    if (result.status === 'error') {
      Toast.show({ content: result.message })
      return
    }
    // 视图更新
    if (onChange) onChange(result)
  }

  return (
    <div
      ref={rootRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-map-locationControl', className)}
      // Events
      onClick={handleLocation}
    >
      {/* Element: Icon */}
      <div className="lyrixi-map-locationControl-icon"></div>
    </div>
  )
}

export default forwardRef(LocationControl)
