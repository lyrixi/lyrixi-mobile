import React, { useState } from 'react'
import _ from 'lodash'
import { Page, Divider, DatePicker, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom Title</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Custom Title"
            titleRender={(value) => {
              return DatePicker.getTitle(value, 'YYYY年MM月DD日 周ddd')
            }}
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>min & max</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="min & max"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onOk</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Limit"
            value={value}
            onChange={setValue}
            onOk={(newValue) => {
              Toast.show({ content: 'validate failed' })
              return false
            }}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
