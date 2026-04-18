import React, { useState } from 'react'
import { Page, ToolBar } from 'lyrixi-mobile'

export default () => {
  const [item, setItem] = useState({
    disabled: true,
    id: '',
    name: 'Disabled'
  })

  return (
    <Page>
      <Page.Main>
        <ToolBar.List
          value={item}
          onChange={setItem}
          list={[
            {
              disabled: true,
              id: '',
              name: 'Disabled'
            },
            {
              id: '1',
              name: 'Option1'
            },
            {
              id: '2',
              name: 'Option2'
            }
          ]}
        />
      </Page.Main>
    </Page>
  )
}
