import React, { useState } from 'react'
import { Page, ToolBar } from 'lyrixi-mobile'

import type { ToolBarDemoListItem } from './ToolBar.demos.types'

export default function ToolBarListDemo() {
  const [item, setItem] = useState<ToolBarDemoListItem | null>({
    disabled: true,
    id: '',
    name: 'Disabled'
  })

  return (
    <Page>
      <Page.Main>
        <ToolBar.List
          value={item}
          onChange={(v) => setItem((v as ToolBarDemoListItem) ?? null)}
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
