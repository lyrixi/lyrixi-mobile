import React, { useState } from 'react'
import { Page, DatePicker, DateUtil, Card, Toast, type DatePickerRangeComboProps } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState<(Date | null)[] | null>(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Year</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              type="year"
              placeholder="Year"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              type="month"
              placeholder="Month"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
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
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
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
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
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
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
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
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Title</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              type="date"
              placeholder="Custom Title"
              titleRender={(value) => {
                return DatePicker.getTitle(value, 'YYYY年MM月DD日 周ddd')
              }}
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
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
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>min & max</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              min={DateUtil.add(new Date(), 2)}
              max={DateUtil.add(new Date(), 30)}
              placeholder="min & max"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onOk</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              placeholder="onOk"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              onOk={(newValue) => {
                Toast.show({ content: 'Use onOk to stop' })
                return false
              }}
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>startDisabled & endDisabled</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              placeholder="startDisabled & endDisabled"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              startDisabled
              endDisabled
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>rangesVisible</Card.Header>
          <Card.Main>
            <DatePicker.RangeCombo
              placeholder="rangesVisible"
              value={value}
              onChange={setValue as DatePickerRangeComboProps['onChange']}
              rangesVisible
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

