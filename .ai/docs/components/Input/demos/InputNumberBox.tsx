import React, { useState } from 'react'
import { Page, MathUtil, Divider, Card, Input } from 'lyrixi-mobile'

export default function InputNumberBoxDemo() {
  const [value, setValue] = useState('2.10')
  const [stepValue, setStepValue] = useState('1.0')
  return (
    <Page>
      <Page.Main>
        <Divider>Size XS</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            size="xs"
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
            size="s"
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
            size="m"
            placeholder="Size m"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
            formatter={(num: string) => {
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
            size="l"
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
            size="xl"
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

        <Divider>Step</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            placeholder="step 0.1"
            value={stepValue}
            onChange={setStepValue}
            step={0.1}
            precision={1}
            min={0}
            trim={true}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
