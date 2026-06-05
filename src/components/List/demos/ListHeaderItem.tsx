import React, { useState } from 'react'
import { Page, List, Card } from 'lyrixi-mobile'
import listData from './listData'

import type { ListDemoHeaderItemRow } from './List.demos.types'

export default function ListHeaderItemDemo() {
  const [singleValue, setSingleValue] = useState<ListDemoHeaderItemRow | ListDemoHeaderItemRow[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List.HeaderItem（分组标题）</Card.Header>
          <Card.Main>
            <List.HeaderItem title="Group Title" description="Group Description" />
            <List
              list={listData}
              value={singleValue}
              onChange={(v) => setSingleValue(v)}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
