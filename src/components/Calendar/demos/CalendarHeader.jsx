import React, { useState } from 'react'
import { Page, Calendar, DateUtil } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Calendar
          value={value}
          onChange={setValue}
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
