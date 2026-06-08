import React, { useState } from 'react'
import { Page, Card, Divider, Input, Icon, Icons } from 'lyrixi-mobile'

export default function InputRateDemo() {
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
          <Divider>Size S</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="s" value={value} onChange={setValue} />
          <Divider>Size M</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="m" value={value} onChange={setValue} />
          <Divider>Size L</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="l" value={value} onChange={setValue} />
          <Divider>Size XL</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="xl" value={value} onChange={setValue} />
          <Divider>Size XXL</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="xxl" value={value} onChange={setValue} />
          <Divider>Size XXXL</Divider>
          <Input.Rate style={{ margin: '0 12px' }} size="xxxl" value={value} onChange={setValue} />
        </Card>
        <Card>
          <Divider>Icon</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            svg={Icons.CircleQuestion}
            // iconRender={() => <Icon svg={Icons.CircleQuestion} size="s" />}
            value={value}
            onChange={setValue}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
