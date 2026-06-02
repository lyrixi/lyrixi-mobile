import { Page, Divider, Button, Icons } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonIconDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Icon 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Close} />
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Trash} />
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.CircleOk} />
          </Button>
        </div>

        <Divider>Button.Icon 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            size="xs"
            radius="xs"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="xs" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="s"
            radius="s"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="s" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="m"
            radius="m"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="m" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="l"
            radius="l"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="l" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="xl"
            radius="xl"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="xl" svg={Icons.Search}></Button.Icon>
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
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button
            size="40"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Search} />
          </Button>
          <Button
            size="48"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Config} />
          </Button>
          <Button
            size="56"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Plus} size="xl" />
          </Button>
        </div>

        <Divider>Button.Icon 不同颜色</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.StarFill} />
          </Button>
          <Button
            color="white"
            backgroundColor="info"
            borderColor="info"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.CircleInfo} />
          </Button>
          <Button
            color="white"
            backgroundColor="warning"
            borderColor="warning"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.CircleWarning} />
          </Button>
          <Button
            color="white"
            backgroundColor="danger"
            borderColor="danger"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Trash} />
          </Button>
          <Button
            color="white"
            backgroundColor="success"
            borderColor="success"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.CircleOk} />
          </Button>
        </div>

        <Divider>Button.Icon 与 Button.Text 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Ok} />
            <Button.Text>确认</Button.Text>
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Text>删除</Button.Text>
            <Button.Icon svg={Icons.Close} />
          </Button>
          <Button
            color="default"
            backgroundColor="white"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Search} />
            <Button.Text>搜索</Button.Text>
          </Button>
          <Button
            color="default"
            backgroundColor="white"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Text>更多</Button.Text>
            <Button.Icon svg={Icons.ArrowRight} />
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
