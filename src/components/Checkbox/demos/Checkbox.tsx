import React, { useState } from 'react'
import { Page, Card, Icon, Checkbox, Flex } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Variants</Card.Header>
          <Card.Main>
            <Flex gap="l">
              <Checkbox variant="solid" checked={value} onChange={setValue}>
                solid
              </Checkbox>
              <Checkbox variant="text" checked={value} onChange={setValue}>
                text
              </Checkbox>
              <Checkbox variant="outlined" checked={value} onChange={setValue}>
                outlined
              </Checkbox>
              <Checkbox variant="filled" checked={value} onChange={setValue}>
                filled
              </Checkbox>
            </Flex>
            <Flex gap="l" style={{ marginTop: '10px' }}>
              <Checkbox disabled variant="solid" checked={value} onChange={setValue}>
                solid
              </Checkbox>
              <Checkbox disabled variant="text" checked={value} onChange={setValue}>
                text
              </Checkbox>
              <Checkbox disabled variant="outlined" checked={value} onChange={setValue}>
                outlined
              </Checkbox>
              <Checkbox disabled variant="filled" checked={value} onChange={setValue}>
                filled
              </Checkbox>
            </Flex>
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
              iconPosition=right
            </Checkbox>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
