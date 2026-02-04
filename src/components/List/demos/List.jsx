import React, { useRef, useState } from 'react'
import { Page, List } from 'lyrixi-mobile'
import listData from './data'

export default () => {
  const listRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(listRef.current)
  return (
    <Page className="full">
      <Page.Main>
        <List
          ref={listRef}
          checkable
          checkboxPosition="right"
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
          // checkbox={({ checked }) => {
          //   return <Checkbox checked={checked} />
          // }}
          // true: 默认Card包裹Item
          wrapper={true}
        // wrapper={Wrapper}
        // wrapper={function ({ children }) {
        //   return <div className="list-wrapper-custom">{children}</div>
        // }}
        />
      </Page.Main>
    </Page>
  )
}
