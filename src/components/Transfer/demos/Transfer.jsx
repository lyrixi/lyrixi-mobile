import React, { useState } from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Transfer from 'lyrixi-mobile/components/Transfer'
import Card from 'lyrixi-mobile/components/Card'

export default () => {
  const [value, setValue] = useState([{ id: '1', name: '选项1' }])
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' },
    { id: '4', name: '选项4' },
    { id: '5', name: '选项5' }
  ]
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Transfer 穿梭框</Card.Header>
          <Card.Main>
            <Transfer.Main
              list={list}
              value={value}
              titles={['待选', '已选']}
              onChange={setValue}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
