import React, { useState } from 'react'
import _ from 'lodash'
import { Page, DatePicker, DateUtil, Message, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  // const [value, setValue] = useState([new Date(), null])
  // const [value, setValue] = useState([null, null])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Year</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              // allowClear

              type="year"
              placeholder="Year"
              ranges={null}
              value={value}
              onChange={(newValue) => {
                console.log(newValue)
                setValue(newValue)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Date</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Time</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Datetime</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Week</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Quick Select</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              placeholder="Quick Select"
              value={value}
              onChange={(newValue) => {
                console.log(newValue)
                setValue(newValue)
              }}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Limit</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              min={new Date()}
              max={DateUtil.add(new Date(), 30)}
              placeholder="Limit"
              ranges={null}
              value={value}
              onChange={(newValue) => {
                console.log(newValue)
                setValue(newValue)
              }}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onOk</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              min={new Date()}
              max={DateUtil.add(new Date(), 30)}
              placeholder="onOk"
              ranges={null}
              value={value}
              onChange={(newValue) => {
                console.log(newValue)
                setValue(newValue)
              }}
              onOk={(newValue) => {
                Toast.show({ content: 'validate failed' })
                return false
              }}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Step</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
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
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
