import React, { useState } from 'react'
import Page from 'lyrixi-mobile/components/Page'
import DatePicker from 'lyrixi-mobile/components/DatePicker'
import Card from 'lyrixi-mobile/components/Card'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>结合输入框和日期选择器</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="date"
              placeholder="请选择日期"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
