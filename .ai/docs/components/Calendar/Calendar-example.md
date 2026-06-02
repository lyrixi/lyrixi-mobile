# Calendar Example

以下示例位于本目录 `demos/`（由 `src/components/Calendar/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Calendar } from 'lyrixi-mobile'`

## demos/Calendar.tsx

```tsx
import { useState, type ReactNode } from 'react'

import { App, Page, Calendar, DateUtil, Card, Divider, Button } from 'lyrixi-mobile'

export default function CalendarDemo() {
  const [singleValue, setSingleValue] = useState<Date | null>(null)
  const [multipleValue, setMultipleValue] = useState<Date[]>([])
  const [rangeValue, setRangeValue] = useState<Date | null>(null)

  // 区间选中
  function formatRangeValue(value: Date | null) {
    if (value == null) {
      return null
    }
    const weekDates = DateUtil.getWeekDates(value, 'Monday')
    return Array.isArray(weekDates) && weekDates.length ? [weekDates[0], weekDates[6]] : null
  }

  const onSingleChange = (
    v: Date | Date[] | null | undefined,
    _c: { currentDate: Date; action: 'select' | 'clear' }
  ) => {
    setSingleValue(v as Date | null)
  }
  const onMultiChange = (
    v: Date | Date[] | null | undefined,
    _c: { currentDate: Date; action: 'select' | 'clear' }
  ) => {
    setMultipleValue((Array.isArray(v) ? v : []) as Date[])
  }

  return (
    <App language={'zh_CN'}>
      <Page>
        <Page.Main>
          <Divider>Select</Divider>
          <Card>
            <Card.Header>Calendar default (selectionMode 默认 single)</Card.Header>
            <Card.Main>
              <Calendar value={singleValue} onChange={onSingleChange} />
            </Card.Main>
          </Card>

          <Card>
            <Card.Header>selectionMode: multiple（多选，value 为 Date[]）</Card.Header>
            <Card.Main>
              <Calendar
                selectionMode="multiple"
                value={multipleValue}
                onChange={onMultiChange}
              />
            </Card.Main>
          </Card>

          <Card>
            <Card.Header>selectionMode: range（范围选，value 为 [Date, Date]，用法参考 DatePicker.WeekMain）</Card.Header>
            <Card.Main>
              <Calendar
                selectionMode="range"
                weekStart="Monday"
                value={formatRangeValue(rangeValue)}
                onChange={(
                  nextRange: Date | Date[] | null | undefined,
                  { currentDate, action }: { currentDate: Date; action: 'select' | 'clear' }
                ) => {
                  console.log('rangeValue:', nextRange, { currentDate, action })
                  if (action === 'clear') {
                    setRangeValue(null)
                  } else {
                    setRangeValue(currentDate)
                  }
                }}
              />
            </Card.Main>
          </Card>

          <Card>
            <Card.Header>allowClear false</Card.Header>
            <Card.Main>
              <Calendar allowClear={false} value={singleValue} onChange={onSingleChange} />
            </Card.Main>
          </Card>

          <Divider>view</Divider>
          <Card>
            <Card.Header>type: week</Card.Header>
            <Card.Main>
              <Calendar type="week" value={singleValue} onChange={onSingleChange} />
            </Card.Main>
          </Card>

          <Card>
            <Card.Header>weekStart: Monday</Card.Header>
            <Card.Main>
              <Calendar
                selectionMode="range"
                weekStart="Monday"
                value={singleValue}
                onChange={onSingleChange}
              />
            </Card.Main>
          </Card>

          <Divider>draggable</Divider>
          <Card>
            <Card.Header>Draggable: horizontal only (仅水平拖动)</Card.Header>
            <Card.Main>
              <Calendar draggable={['horizontal']} value={singleValue} onChange={onSingleChange} />
            </Card.Main>
          </Card>

          <Card>
            <Card.Header>Draggable: vertical only (仅垂直拖动)</Card.Header>
            <Card.Main>
              <Calendar draggable={['vertical']} value={singleValue} onChange={onSingleChange} />
            </Card.Main>
          </Card>


          <Divider>Custom render</Divider>
          <Card>
            <Card.Header>Custom Header Render (自定义头部渲染)</Card.Header>
            <Card.Main>
              <Calendar
                headerRender={({
                  title,
                  onPreviousMonth,
                  onNextMonth,
                  onPreviousYear,
                  onNextYear
                }): ReactNode => {
                  return (
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}
                    >
                      <Button onClick={onPreviousYear}>Previous Year</Button>
                      <Button onClick={onPreviousMonth}>Previous Month</Button>
                      <span>{title ?? ''}</span>
                      <Button onClick={onNextMonth}>Next Month</Button>
                      <Button onClick={onNextYear}>Next Year</Button>
                    </div>
                  )
                }}
                value={singleValue}
                onChange={onSingleChange}
              />
            </Card.Main>
          </Card>

          <Card>
// ... 其余见 demos/Calendar.tsx 全文
```

## demos/CalendarHeader.tsx

```tsx
import { useState } from 'react'

import { Page, Calendar, DateUtil } from 'lyrixi-mobile'

export default function CalendarHeaderDemo() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <Page>
      <Page.Main>
        <Calendar
          value={value}
          onChange={(v, _c) => {
            setValue(v as Date | null)
          }}
          headerRender={({ drawDate, onPreviousMonth, onNextMonth, onPreviousYear, onNextYear }) => (
            <Calendar.Header
              onPreviousMonth={onPreviousMonth}
              onNextMonth={onNextMonth}
              onPreviousYear={onPreviousYear}
              onNextYear={onNextYear}
            >
              {drawDate ? DateUtil.format(drawDate, 'YYYY年MM月') : ''}
            </Calendar.Header>
          )}
        />
      </Page.Main>
    </Page>
  )
}
```
