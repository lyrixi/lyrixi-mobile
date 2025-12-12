import React, { useState } from 'react'
import _ from 'lodash'
import { Page, Divider, DatePicker, DateUtil, Message, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  // const [value, setValue] = useState([new Date(), null])
  // const [value, setValue] = useState([null, null])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.RangeCombo
            // allowClear
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Quick Select</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Quick Select"
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Limit</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="Limit"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onBeforeOk</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="onBeforeOk"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            onBeforeOk={(newValue) => {
              Toast.show({ content: 'validate failed' })
              return false
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            title="Custom Title"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
