import React, { useRef, useState } from 'react'
import { Page, ListAsync } from 'lyrixi-mobile'
import listData from './../listData'
import VConsole from 'vconsole'

new VConsole()
export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(mainRef.current)
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Layout vertical</Page.Header>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        // pagination
        value={value}
        loadData={({ previousResult, action }) => {
          console.log({ previousResult, action })
          return {
            status: 'noMore', // empty、error、moreError、noMore、loading
            message: 'No more data',
            list: listData
          }
        }}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />
    </Page>
  )
}
