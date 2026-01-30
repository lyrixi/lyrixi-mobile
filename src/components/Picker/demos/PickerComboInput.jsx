import React, { useState } from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Picker from 'lyrixi-mobile/components/Picker'
import Card from 'lyrixi-mobile/components/Card'

export default () => {
  const [value, setValue] = useState(null)
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>结合输入框和选择器</Card.Header>
          <Card.Main>
            <Picker.Combo
              list={list}
              value={value}
              onChange={setValue}
              placeholder="请选择"
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
