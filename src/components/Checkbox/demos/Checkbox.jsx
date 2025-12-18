import React, { useState } from 'react'
import { Page, Card, Icon, Checkbox } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Common</Card.Header>
          <Card.Main>
            <Checkbox checked={value} onChange={setValue}>
              Common
            </Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom</Card.Header>
          <Card.Main>
            <Checkbox
              checked={value}
              onChange={setValue}
              iconRender={({ checked }) => {
                if (!checked) return <Icon />
                return <Icon color="primary" className="lyrixi-iconfont-ok" />
              }}
            >
              Custom
            </Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>iconPosition=right</Card.Header>
          <Card.Main>
            <Checkbox checked={value} onChange={setValue} iconPosition="right">
              Common iconPosition=right
            </Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Checked</Card.Header>
          <Card.Main>
            <Checkbox checked={true}>Checked</Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Common Disabled</Card.Header>
          <Card.Main>
            <Checkbox checked={false} disabled>
              Common Disabled
            </Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Checked Disabled</Card.Header>
          <Card.Main>
            <Checkbox checked={true} disabled>
              Checked Disabled
            </Checkbox>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
