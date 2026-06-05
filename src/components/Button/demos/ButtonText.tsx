import React from 'react'
import { Page, Divider, Button, Icons, ButtonColor, ButtonVariant } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonTextDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Text 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.solid} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>按钮文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>主要按钮</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.danger} radius="m" style={buttonStyle}>
            <Button.Text>危险按钮</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 自定义样式</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.solid} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text style={{ fontWeight: 'bold' }}>加粗文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text style={{ fontSize: '18px' }}>大号文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Text style={{ color: '#ff6b6b' }}>自定义颜色</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 与 Button.Icon 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.solid} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Ok} />
            <Button.Text>确认</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>删除</Button.Text>
            <Button.Icon svg={Icons.Close}></Button.Icon>
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Search}></Button.Icon>
            <Button.Text>搜索</Button.Text>
            <Button.Icon svg={Icons.ArrowRight}></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Text 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button size="xs" radius="xs" variant={ButtonVariant.solid} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>小号按钮</Button.Text>
          </Button>
          <Button size="s" radius="s" variant={ButtonVariant.solid} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>小按钮</Button.Text>
          </Button>
          <Button size="m" radius="m" variant={ButtonVariant.solid} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>中等按钮</Button.Text>
          </Button>
          <Button size="l" radius="l" variant={ButtonVariant.solid} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>大按钮</Button.Text>
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
