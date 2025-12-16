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
        <DatePicker.RangeMain
          // style={{ padding: 0 }}
          // allowClear
          // titles={{
          //   custom: '自定义选择',
          //   selector: '快捷选择'
          // }}
          // type="datetime"
          // ranges={{
          //   [LocaleUtil.locale('自定义')]: 10
          // }}
          // ranges={{
          //   ['今日']: [new Date(), new Date()],
          //   ['未来一个月']: [new Date(), DateUtil.add(new Date(), 29)],

          //   ['未来三个月']: [new Date(), DateUtil.add(new Date(), 89)],

          //   ['自定义']: 365
          // }}
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
