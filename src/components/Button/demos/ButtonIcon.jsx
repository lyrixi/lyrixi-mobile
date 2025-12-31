import React from 'react'

import { Page, Divider, Button } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default () => {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Icon 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-check"></Button.Icon>
          </Button>
          <Button color="primary" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-close"></Button.Icon>
          </Button>
          <Button color="danger" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-delete"></Button.Icon>
          </Button>
          <Button color="success" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-success"></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button size="xs" radius="xs" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="xs" className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
          <Button size="s" radius="s" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="s" className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
          <Button size="m" radius="m" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="m" className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
          <Button size="l" radius="l" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="l" className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
          <Button size="xl" radius="xl" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="xl" className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 圆形按钮</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            size="32"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-check"></Button.Icon>
          </Button>
          <Button size="40" radius="100%" sizeEqual color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
          </Button>
          <Button size="48" radius="100%" sizeEqual color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-setting"></Button.Icon>
          </Button>
          <Button size="56" radius="100%" sizeEqual color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Icon size="xl" className="lyrixi-iconfont lyrixi-iconfont-add"></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 不同颜色</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-heart"></Button.Icon>
          </Button>
          <Button color="white" backgroundColor="link" borderColor="link" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-link"></Button.Icon>
          </Button>
          <Button color="white" backgroundColor="warning" borderColor="warning" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-warning"></Button.Icon>
          </Button>
          <Button color="white" backgroundColor="danger" borderColor="danger" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-delete"></Button.Icon>
          </Button>
          <Button color="white" backgroundColor="success" borderColor="success" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-success"></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 与 Button.Text 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-check"></Button.Icon>
            <Button.Text>确认</Button.Text>
          </Button>
          <Button color="primary" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Text>删除</Button.Text>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-close"></Button.Icon>
          </Button>
          <Button color="default" backgroundColor="white" border="solid" radius="m" style={buttonStyle}>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-search"></Button.Icon>
            <Button.Text>搜索</Button.Text>
          </Button>
          <Button color="default" backgroundColor="white" border="solid" radius="m" style={buttonStyle}>
            <Button.Text>更多</Button.Text>
            <Button.Icon className="lyrixi-iconfont lyrixi-iconfont-arrow-right"></Button.Icon>
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}

