import React, { useState, useRef, useEffect, type ComponentProps } from 'react'
import { Page, Location } from 'lyrixi-mobile'

type MainVal = ComponentProps<typeof Location.Main>['value']

export default () => {
  const mainRef = useRef<React.ComponentRef<typeof Location.Main> | null>(null)
  const [value, setValue] = useState<MainVal>(null)

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
          key: '4KFq5IGKQM1c6vkVhgIpAYFu',
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
