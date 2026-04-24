import React, { useState } from 'react'
import { Page, ToolBar } from 'lyrixi-mobile'

type Item = { id: string; name: string; disabled?: boolean }

export default function ToolBarActionSheetDemo() {
  const [item, setItem] = useState<Item | null>({
    disabled: true,
    id: '',
    name: 'Disabled'
  })

  return (
    <Page>
      <Page.Main>
        <ToolBar.ActionSheet
          value={item}
          onChange={(v) => setItem((v as Item) ?? null)}
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
