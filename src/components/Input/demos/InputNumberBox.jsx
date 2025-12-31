import React, { useState } from 'react'
import { Page, MathUtil, Divider, Card, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('2.10')
  return (
    <Page>
      <Page.Main>
        <Divider>Size XS</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xs"
            placeholder="Size xs"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size S</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-s"
            placeholder="Size s"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size M</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-radius-m"
            placeholder="Size m"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
            formatter={(num) => {
              return '$' + MathUtil.thousands(Number(num).toFixed(2))
            }}
            // onChange={(val) => {
            //   console.log('得到的值:', val)
            //   setValue(val)
            // }}
          />
        </Card>

        <Divider>Size L</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-l"
            placeholder="Size l"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size XL</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xl"
            placeholder="Size xl"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
