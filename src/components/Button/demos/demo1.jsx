import React from 'react'

import { Page, Divider, Button, Icon } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default () => {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Color & Background & Border</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button backgroundColor="white" radius="m" style={buttonStyle}>
            backgroundColor="white"
          </Button>
          <Button backgroundColor="white" radius="m" disabled style={buttonStyle}>
            disabled
          </Button>
          <br />
          <Button backgroundColor="default" border="none" radius="m" style={buttonStyle}>
            backgroundColor="default" border="none"
          </Button>
          <Button backgroundColor="default" border="solid" radius="m" style={buttonStyle}>
            backgroundColor="default" border="solid"
          </Button>
          <Button backgroundColor="default" border="dashed" radius="m" style={buttonStyle}>
            backgroundColor="default" border="dashed"
          </Button>
          <br />
          <Button backgroundColor="transparent" border="none" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="none"
          </Button>
          <Button backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="solid"
          </Button>
          <Button backgroundColor="transparent" border="dashed" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" radius="m" style={buttonStyle}>
            color="white" backgroundColor="primary"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="link" radius="m" style={buttonStyle}>
            color="white" backgroundColor="link"
          </Button>
          <br />
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten"
          </Button>
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten" border="solid"
          </Button>
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="link"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="link"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="link"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="warning" radius="m" style={buttonStyle}>
            color="white" backgroundColor="warning"
          </Button>
          <br />
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten"
          </Button>
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten" border="solid"
          </Button>
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="warning"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="warning"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="warning"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="danger" radius="m" style={buttonStyle}>
            color="white" backgroundColor="danger"
          </Button>
          <br />
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten"
          </Button>
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten" border="solid"
          </Button>
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="danger"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="success" radius="m" style={buttonStyle}>
            color="white" backgroundColor="success"
          </Button>
          <br />
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten"
          </Button>
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten" border="solid"
          </Button>
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="success"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <br />

        <Divider>Shape</Divider>
        <div>
          <Button square radius="m" color="white" backgroundColor="primary" style={buttonStyle}>
            Round
          </Button>
          <Button square radius="100%" size="s" style={buttonStyle}>
            <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
          </Button>
          <Button square size="s" radius="m" style={buttonStyle}>
            <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button
            color="white"
            backgroundColor="primary"
            radius="m"
            className="lyrixi-flex"
            style={buttonStyle}
          >
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button color="white" backgroundColor="primary" size="xxs" radius="xxs" style={buttonStyle}>
          primary xxs
        </Button>
        <Button color="white" backgroundColor="primary" size="xs" radius="xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button color="white" backgroundColor="primary" size="s" radius="s" style={buttonStyle}>
          primary s
        </Button>
        <Button color="white" backgroundColor="primary" size="m" radius="m" style={buttonStyle}>
          primary m
        </Button>
        <Button color="white" backgroundColor="primary" size="l" radius="l" style={buttonStyle}>
          primary l
        </Button>
        <Button color="white" backgroundColor="primary" size="xl" radius="xl" style={buttonStyle}>
          primary xl
        </Button>
      </Page.Main>
    </Page>
  )
}
