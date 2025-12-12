import React, { useState } from 'react'
import _ from 'lodash'
import { DatePicker, Page, DateUtil, LocaleUtil } from 'lyrixi-mobile'

export default () => {
  const [rangeId, setRangeId] = useState(null)
  const [value, setValue] = useState([new Date(), new Date()])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">日期快捷选择</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <DatePicker.RangeSelector
          // style={{ padding: 0 }}
          allowClear
          // min={new Date('2023-08-08')}
          // max={new Date()}
          rangeId={rangeId}
          value={value}
          onChange={(newValue, { rangeId }) => {
            console.log('修改:', newValue, rangeId)
            setValue(newValue)
            setRangeId(rangeId)
          }}
        />
      </Page.Main>
    </Page>
  )
}
