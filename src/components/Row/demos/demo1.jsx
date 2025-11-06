import React from 'react'

import { Page, Divider, Row } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>Each row has twenty-four columns</Divider>
        <Row>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>
      </Page.Main>
    </Page>
  )
}
