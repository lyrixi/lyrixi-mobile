import React, { useRef, useState } from 'react'
import { Page, ListAsync } from 'lyrixi-mobile'
import listData from './listData'

export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState<Record<string, unknown> | Record<string, unknown>[] | null>(null)

  console.log(mainRef.current)
  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        loadData={({ previousResult, action }) => {
          console.log({ previousResult, action })
          return Promise.resolve({
            status: 'noMore', // empty、error、moreError、noMore、loading
            message: 'No more data',
            list: listData
          })
        }}
        onChange={(v) => {
          console.log(v)
          setValue(v)
        }}
      />
    </Page>
  )
}
