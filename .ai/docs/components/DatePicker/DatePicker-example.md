# DatePicker Example

以下示例位于本目录 `demos/`（由 `src/components/DatePicker/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { DatePicker } from 'lyrixi-mobile'`

## demos/DatePickerCombo.tsx

```tsx
import { useState } from 'react'

import { Page, DatePicker, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default function DatePickerComboDemo() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Year</Card.Header>
          <Card.Main>
            <DatePicker.Combo type="year" placeholder="Year" value={value} onChange={(v) => setValue(v ?? null)} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month</Card.Header>
          <Card.Main>
            <DatePicker.Combo
              type="month"
              placeholder="Month"
              value={value}
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
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
              onChange={(v) => setValue(v ?? null)}
              onOk={(newValue) => {
                Toast.show({ content: 'Use onOk to stop' })
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
```

## demos/DatePickerComboInput.tsx

```tsx
import { useState } from 'react'

import { Card, DatePicker, Page } from 'lyrixi-mobile'

export default function DatePickerComboInputDemo() {
  const [value, setValue] = useState<Date | null>(null)
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
              onChange={(v) => setValue(v ?? null)}
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/DatePickerRangeCombo.tsx

```tsx
import { useState } from 'react'

import { Page, DatePicker, DateUtil, Card, Toast, type DatePickerRangeComboProps } from 'lyrixi-mobile'

export default function DatePickerRangeComboDemo() {
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
// ... 其余见 demos/DatePickerRangeCombo.tsx 全文
```

## demos/DatePickerMultipleCombo.tsx

```tsx
import { useState } from 'react'

import { DatePicker, Toast, type DatePickerMultipleValue } from 'lyrixi-mobile'

export default function DatePickerMultipleComboDemo() {
  const [mulValue, setMulValue] = useState<DatePickerMultipleValue>([
    {
      id: 'start',
      description: 'Start',
      value: new Date()
      // disabled: true
    },
    {
      id: 'middle',
      description: 'Middle',
      value: new Date()
    },
    {
      id: 'end',
      description: 'End',
      value: new Date()
    }
  ])

  return (
    <>
      <DatePicker.MultipleCombo
        placeholder="Please select MultipleCombo"
        value={mulValue}
        // year | quarter | month | date | time | datetime | week
        type="datetime"
        onChange={(newValue) => {
          console.log(newValue)
          if (newValue) setMulValue(newValue)
        }}
        allowClear
        min={new Date()}
        hourStep={5}
        minuteStep={5}
        onOk={(newValue) => {
          Toast.show({ content: 'Use onOk to stop' })
          return false
        }}
      />
    </>
  )
}
```

## demos/DatePickerWeekCombo.tsx

```tsx
import { useRef, useState } from 'react'

import { DatePicker, type DatePickerWeekComboRef } from 'lyrixi-mobile'

export default function DatePickerWeekComboDemo() {
  const date1Ref = useRef<DatePickerWeekComboRef | null>(null)
  const date2Ref = useRef<DatePickerWeekComboRef | null>(null)
  const [value, setValue] = useState<Date | null>(null)

  return (
    <>
      <DatePicker.WeekCombo
        ref={date1Ref}
        className="lyrixi-border-b"
        placeholder="Please select WeekCombo"
        type="datetime"
        allowClear
        onBeforeOpen={() => {
          if (document.querySelector('.lyrixi-mask.lyrixi-active')) {
            date1Ref.current?.close?.()
            date2Ref.current?.close?.()
            return false
          }
          return true
        }}
        maskStyle={{
          zIndex: 999
        }}
        onChange={(newValue) => {
          setValue(newValue ?? null)
        }}
        value={value}
      />
    </>
  )
}
```

## demos/DatePickerTypeSwitcher.tsx

```tsx
import { useState } from 'react'

import { Page, Card, DatePicker, LocaleUtil, type DatePickerTypeSwitcherValue } from 'lyrixi-mobile'

const quickSelectList = [
  {
    type: 'date',
    id: 'yesterday',
    name: LocaleUtil.locale('昨'),
    value: new Date('2026-03-05')
  },
  {
    type: 'date',
    id: 'today',
    name: LocaleUtil.locale('今'),
    value: new Date('2026-03-06')
  },
  {
    type: 'date',
    id: 'tomorrow',
    name: LocaleUtil.locale('明'),
    value: new Date('2026-03-07')
  }
]

export default function DatePickerTypeSwitcherDemo() {
  const [value, setValue] = useState<unknown>(undefined)
  const [quickValue, setQuickValue] = useState<unknown>(undefined)
  const [collapsedValue, setCollapsedValue] = useState<unknown>(undefined)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>日期类型切换（日/月/季/年/周）</Card.Header>
          <Card.Main>
            <DatePicker.TypeSwitcher
              value={value as DatePickerTypeSwitcherValue | undefined}
              types={[
                {
                  type: 'date',
                  id: 'date',
                  name: LocaleUtil.locale('日', 'datetype_unit_date')
                },
                {
                  type: 'month',
                  id: 'month',
                  name: LocaleUtil.locale('月', 'datetype_unit_month')
                },
                {
                  type: 'quarter',
                  id: 'quarter',
                  name: LocaleUtil.locale('季', 'datetype_unit_quarter')
                },
                {
                  type: 'year',
                  id: 'year',
                  name: LocaleUtil.locale('年', 'datetype_unit_year')
                },
                {
                  type: 'week',
                  id: 'week',
                  name: LocaleUtil.locale('周', 'datetype_unit_week')
                }
              ]}
              onChange={(newValue: unknown) => {
                console.log('修改:', newValue)
                setValue(newValue)
              }}
              pickerComboClassName="lyrixi-flex lyrixi-flex-justify-flex-start"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>快捷选择（昨/今/明）</Card.Header>
          <Card.Main>
            <DatePicker.TypeSwitcher
              value={quickValue as DatePickerTypeSwitcherValue | undefined}
              types={quickSelectList}
              onChange={(newValue: unknown) => {
                console.log('快捷选择:', newValue)
                setQuickValue(newValue)
              }}
              pickerComboClassName="lyrixi-flex lyrixi-flex-justify-flex-start"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>下拉模式（switcherType=&quot;dropdown&quot;）</Card.Header>
          <Card.Main>
            <DatePicker.TypeSwitcher
              switcherType="dropdown"
              value={collapsedValue as DatePickerTypeSwitcherValue | undefined}
              types={[
                {
                  type: 'date',
                  id: 'date',
                  name: LocaleUtil.locale('日', 'datetype_unit_date')
                },
                {
                  type: 'month',
                  id: 'month',
                  name: LocaleUtil.locale('月', 'datetype_unit_month')
                },
                {
                  type: 'quarter',
                  id: 'quarter',
                  name: LocaleUtil.locale('季', 'datetype_unit_quarter')
                },
                {
                  type: 'year',
                  id: 'year',
                  name: LocaleUtil.locale('年', 'datetype_unit_year')
                },
                {
                  type: 'week',
                  id: 'week',
                  name: LocaleUtil.locale('周', 'datetype_unit_week')
                }
              ]}
              onChange={(newValue: unknown) => {
                console.log('下拉模式:', newValue)
                setCollapsedValue(newValue)
              }}
              pickerComboClassName="lyrixi-flex lyrixi-flex-justify-flex-start"
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/DatePickerRangeSelector.tsx

```tsx
import { useState } from 'react'

import { Page, DatePicker, DateUtil, Card } from 'lyrixi-mobile'

export default function DatePickerRangeSelectorDemo() {
  const [rangeId1, setRangeId1] = useState<string | null>(null)
  const [value1, setValue1] = useState<(Date | null)[]>([new Date(), new Date()])

  const [rangeId2, setRangeId2] = useState<string | null>(null)
  const [value2, setValue2] = useState<(Date | null)[] | null>(null)

  const [rangeId3, setRangeId3] = useState<string | null>(null)
  const [value3, setValue3] = useState<(Date | null)[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>基础用法</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              rangeId={rangeId1}
              value={value1}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                if (newValue) setValue1(newValue)
                setRangeId1(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>自定义范围 (ranges)</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              ranges={{
                今日: [new Date(), new Date()],
                近7日: [DateUtil.add(new Date(), -6, 'day'), new Date()],
                近30日: [DateUtil.add(new Date(), -29, 'day'), new Date()],
                本月: [
                  DateUtil.startOrEnd(new Date(), 'month', 'start'),
                  DateUtil.startOrEnd(new Date(), 'month', 'end')
                ],
                上月: [
                  DateUtil.startOrEnd(DateUtil.add(new Date(), -1, 'month'), 'month', 'start'),
                  DateUtil.startOrEnd(DateUtil.add(new Date(), -1, 'month'), 'month', 'end')
                ]
              }}
              rangeId={rangeId2}
              value={value2}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                setValue2(newValue)
                setRangeId2(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>日期类型 (type)</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              type="datetime"
              rangeId={rangeId3}
              value={value3}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                setValue3(newValue)
                setRangeId3(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>最小/最大日期 (min/max)</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              min={DateUtil.add(new Date(), -30, 'day')}
              max={new Date()}
              rangeId={rangeId1}
              value={value1}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                if (newValue) setValue1(newValue)
                setRangeId1(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>禁用开始/结束日期 (startDisabled/endDisabled)</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              startDisabled
              endDisabled
              rangeId={rangeId1}
              value={value1}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                if (newValue) setValue1(newValue)
                setRangeId1(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>时间步长 (hourStep/minuteStep)</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              type="datetime"
              hourStep={2}
              minuteStep={15}
              rangeId={rangeId3}
              value={value3}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
                setValue3(newValue)
                setRangeId3(rangeId ?? null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onOk 事件</Card.Header>
          <Card.Main>
            <DatePicker.RangeSelector
              allowClear
              rangeId={rangeId1}
              value={value1}
              onChange={(newValue, meta) => {
                const rangeId = meta?.rangeId
                console.log('修改:', newValue, rangeId)
// ... 其余见 demos/DatePickerRangeSelector.tsx 全文
```
