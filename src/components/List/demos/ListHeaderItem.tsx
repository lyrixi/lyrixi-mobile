import React, { useState } from 'react'
import { Page, List, Card } from 'lyrixi-mobile'
import listData from './listData'

export default () => {
  const [singleValue, setSingleValue] = useState(null)

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
              onChange={setSingleValue}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
