import React, { useState, useRef, useEffect } from 'react'
import { Page, Input, ObjectUtil } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('keyword')

  return (
    <Page>
      <Page.Main>
        <Input.Search
          trim
          precision={2}
          placeholder="Search"
          value={value}
          allowClear
          onSearch={(val) => {
            console.log(val)
            setValue(val)
          }}
        />
        Your search keyword: {value}
      </Page.Main>
    </Page>
  )
}
