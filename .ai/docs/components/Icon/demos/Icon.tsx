import React from 'react'
import { Page, Divider, Icon, Icons } from 'lyrixi-mobile'

const iconStyle = {
  margin: 'var(--lyrixi-space-m)'
}

const iconWithBgStyle = {
  ...iconStyle,
  padding: '4px'
}

const sizeSamples = ['xxxxs', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
const colorSamples = ['primary', 'info', 'danger', 'success', 'warning']

const builtinIconEntries = Object.entries(Icons) as Array<
  [string, (typeof Icons)[keyof typeof Icons]]
>

const builtinIconGridStyle = {
  marginTop: 'var(--lyrixi-space-l)',
  display: 'flex',
  flexWrap: 'wrap' as const
}

const builtinIconItemStyle = {
  display: 'inline-flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  width: '80px',
  margin: 'var(--lyrixi-space-s)'
}

export default function IconDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Icon 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Icon svg={Icons.Close} size="xxxs" color="primary" style={iconStyle} />
          <Icon svg={Icons.Search} size="xxxs" color="primary" style={iconStyle} />
          <Icon svg={Icons.Ok} size="xxxs" color="success" style={iconStyle} />
          <Icon svg={Icons.Trash} size="xxxs" color="danger" style={iconStyle} />
          <Icon svg={Icons.Config} size="xxxs" color="default" style={iconStyle} />
        </div>

        <Divider>Icon 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          {sizeSamples.map((size) => (
            <Icon key={size} svg={Icons.Close} size={size} color="primary" style={iconStyle} />
          ))}
        </div>

        <Divider>Icon 带背景与圆角</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Icon
            svg={Icons.Ok}
            size="xs"
            color="white"
            backgroundColor="primary"
            radius="m"
            style={iconWithBgStyle}
          />
          <Icon
            svg={Icons.Search}
            size="xs"
            color="white"
            backgroundColor="primary"
            radius="100%"
            style={iconWithBgStyle}
          />
          <Icon
            svg={Icons.Config}
            size="xs"
            color="white"
            backgroundColor="info"
            radius="100%"
            style={iconWithBgStyle}
          />
          <Icon
            svg={Icons.Plus}
            size="xs"
            color="white"
            backgroundColor="success"
            radius="100%"
            style={iconWithBgStyle}
          />
        </div>

        <Divider>Icon 不同颜色</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          {colorSamples.map((color) => (
            <Icon key={color} svg={Icons.Close} size="xxxs" color={color} style={iconStyle} />
          ))}
        </div>

        <Divider>Icon 可点击与禁用</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Icon
            svg={Icons.Reload}
            size="xs"
            color="primary"
            style={iconStyle}
            onClick={() => console.log('icon clicked')}
          />
          <Icon svg={Icons.Reload} size="xxxs" color="primary" disabled style={iconStyle} />
        </div>

        <Divider>Icon 内置 Icons</Divider>
        <div style={builtinIconGridStyle}>
          {builtinIconEntries.map(([name, svg]) => (
            <div key={name} style={builtinIconItemStyle}>
              <Icon svg={svg} size="xxxs" color="primary" />
              <span className="lyrixi-font-size-xs lyrixi-color-auxiliary">{name}</span>
            </div>
          ))}
        </div>
      </Page.Main>
    </Page>
  )
}
