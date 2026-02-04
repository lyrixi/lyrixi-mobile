import React, { useState, useRef, useEffect } from 'react'
import { Page, Location } from 'lyrixi-mobile'

export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    // 延迟设置值
    setTimeout(() => {
      setValue({
        address: '江苏省南京市雨花台区玉兰路98号',
        value: '江苏省南京市雨花台区玉兰路98号',
        longitude: 118.7979252979065,
        latitude: 31.968667296242337,
        type: 'gcj02'
      })
    }, 5000)
  }, [])

  return (
    <Page>
      <Location.Main
        ref={mainRef}
        open="choose"
        style={{ height: '400px' }}
        autoLocation={false}
        // 可以用全局设置window.MapLoaderConfig代替
        mapConfig={{
          key: 'bmap key',
          type: 'bmap'
        }}
        value={value}
        onChange={(val) => {
          console.log('修改:', val)
          setValue(val)
        }}
      />
    </Page>
  )
}
