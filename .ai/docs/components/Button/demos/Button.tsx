import React from 'react'

import { Page, Divider, Button, Icon, Icons, ButtonColor, ButtonVariant } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

const themeColors = [
  ButtonColor.default,
  ButtonColor.primary,
  ButtonColor.info,
  ButtonColor.warning,
  ButtonColor.danger,
  ButtonColor.success
]

const variants = [
  ButtonVariant.solid,
  ButtonVariant.text,
  ButtonVariant.outlined,
  ButtonVariant.filled,
  ButtonVariant.dashed
]

export default function ButtonDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>variant × color</Divider>
        {themeColors.map((color) => (
          <div key={color} style={{ marginTop: 'var(--lyrixi-space-l)' }}>
            <Divider>{color}</Divider>
            {variants.map((variant) => (
              <Button
                key={`${color}-${variant}`}
                variant={variant}
                color={color}
                radius="m"
                style={buttonStyle}
              >
                {variant}
              </Button>
            ))}
            <Button variant={ButtonVariant.solid} color={color} radius="m" disabled style={buttonStyle}>
              disabled
            </Button>
          </div>
        ))}

        <br />

        <Divider>sizeEqual</Divider>
        <div>
          <Button
            sizeEqual
            radius="100%"
            size="m"
            variant={ButtonVariant.solid}
            color={ButtonColor.default}
            style={buttonStyle}
          >
            <Icon svg={Icons.Search} />
          </Button>
          <Button
            sizeEqual
            size="l"
            radius="l"
            variant={ButtonVariant.solid}
            color={ButtonColor.default}
            style={buttonStyle}
          >
            <Icon svg={Icons.Search} />
          </Button>
        </div>

        <Divider>size</Divider>
        <Button
          size="xs"
          radius="xs"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xs
        </Button>
        <Button
          size="s"
          radius="s"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          s
        </Button>
        <Button
          size="m"
          radius="m"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          m
        </Button>
        <Button
          size="l"
          radius="l"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          l
        </Button>
        <Button
          size="xl"
          radius="xl"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xl
        </Button>
        <Button
          size="xxl"
          radius="xxl"
          variant={ButtonVariant.solid}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xxl
        </Button>

        <Divider>block</Divider>
        <Button block variant={ButtonVariant.solid} color={ButtonColor.primary} radius="m">
          block
        </Button>
      </Page.Main>
    </Page>
  )
}
