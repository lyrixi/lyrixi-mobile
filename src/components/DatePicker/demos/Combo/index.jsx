import React, { useState } from 'react'
import { Page, DatePicker, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Year</Card.Header>
          <Card.Main>
            <DatePicker.Combo type="year" placeholder="Year" value={value} onChange={setValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="month"
              placeholder="Month"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Date</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="date"
              placeholder="Date"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Time</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="time"
              placeholder="Time"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Datetime</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="datetime"
              placeholder="Datetime"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Week</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="week"
              placeholder="Week"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Title</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="date"
              placeholder="Custom Title"
              titleRender={(value) => {
                return DatePicker.getTitle(value, 'YYYY年MM月DD日 周ddd')
              }}
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Step</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              placeholder="Step"
              type="datetime"
              hourStep={5}
              minuteStep={5}
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>min & max</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              min={DateUtil.add(new Date(), 2)}
              max={DateUtil.add(new Date(), 30)}
              placeholder="min & max"
              value={value}
              onChange={setValue}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onOk</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              placeholder="onOk"
              value={value}
              onChange={setValue}
              onOk={(newValue) => {
                Toast.show({ content: 'validate failed' })
                return false
              }}
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
