import React, { useRef, useState } from 'react'
import { Layout } from 'seedsui-react'
import listData from './listData'
// import List from 'library/components/ListV2'
import List from './../../List'

export default () => {
  const listRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(listRef.current)
  return (
    <Layout className="full">
      <Layout.Main>
        <List
          ref={listRef}
          checkable
          allowClear
          multiple={true}
          value={value}
          list={listData}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          // Item 配置
          itemLayout="vertical"
        />
      </Layout.Main>
    </Layout>
  )
}
