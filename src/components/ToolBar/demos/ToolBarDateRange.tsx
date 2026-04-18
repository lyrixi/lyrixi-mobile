// @ts-nocheck
import React, { useState } from 'react'
import { Page, ToolBar } from 'lyrixi-mobile'

export default () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()])
  return (
    <Page>
      <Page.Main>
        <ToolBar.DateRange
          value={dateRange}
          // allowClear={true}
          onChange={(newDateRange, { rangeId }) => {
            console.log('修改:', newDateRange)
            setDateRange(newDateRange)
            // setDateRangeId(rangeId)
          }}
        />
      </Page.Main>
    </Page>
  )
}
