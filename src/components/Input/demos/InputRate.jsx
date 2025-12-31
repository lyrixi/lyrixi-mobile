import React, { useState } from 'react'
import { Page, Card, Divider, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(3)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Common</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            value={value}
            // disabled
            onChange={(val) => {
              console.log(val)
              setValue(val)
            }}
          />
        </Card>

        <Card>
          <Divider>ReadyOnly</Divider>
          <Input.Rate style={{ margin: '0 12px' }} value={value} readOnly />
        </Card>

        <Card>
          <Divider>Disabled</Divider>
          <Input.Rate style={{ margin: '0 12px' }} value={value} disabled />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <Input.Rate style={{ margin: '0 12px' }} step={0.1} value={value} onChange={setValue} />
        </Card>
        <Card>
          <Divider>Min and Max</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            min={1}
            max={8}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Icon</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            iconRender={() => <i className="lyrixi-icon lyrixi-iconfont-circle-question" />}
            value={value}
            onChange={setValue}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
