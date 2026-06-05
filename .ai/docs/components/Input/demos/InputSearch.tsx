import React, { useState } from 'react'

import { Page, Input } from 'lyrixi-mobile'

export default function InputSearchDemo() {
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
