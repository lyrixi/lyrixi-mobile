# Message Example

以下示例位于本目录 `demos/`（由 `src/components/Message/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Message } from 'lyrixi-mobile'`

## demos/Message.tsx

```tsx
import { Page, Message, Button, Icon, Icons } from 'lyrixi-mobile'

export default function MessageDemo() {
  const handleOpenMessage = () => {
    Message.open({
      iconRender: () => <Icon svg={Icons.Config} size="80" color="primary" />,
      title: 'Title',
      content: <div>Content</div>,
      buttonsLayout: 'vertical',
      buttons: [
        {
          name: 'Button 1',
          onClick: () => {
            console.log('Button 1 clicked')
            return true
          }
        },
        {
          name: 'Button 2',
          className: 'lyrixi-primary',
          onClick: () => {
            console.log('Button 2 clicked')
            return true
          }
        }
      ]
    })
  }

  const handleOpenHorizontalMessage = () => {
    Message.open({
      iconRender: () => <Icon svg={Icons.Config} size="80" color="primary" />,
      title: 'Horizontal Layout',
      content: <div>This message uses horizontal button layout</div>,
      buttonsLayout: 'horizontal',
      buttons: [
        {
          name: 'Cancel',
          onClick: () => {
            console.log('Cancel clicked')
            return true
          }
        },
        {
          name: 'Confirm',
          className: 'lyrixi-primary',
          onClick: () => {
            console.log('Confirm clicked')
            return true
          }
        }
      ]
    })
  }

  const handleOpenSimpleMessage = () => {
    Message.open({
      title: 'Simple Message',
      content: <div>This is a simple message without icon</div>,
      buttons: [
        {
          name: 'OK',
          className: 'lyrixi-primary',
          onClick: () => {
            console.log('OK clicked')
            return true
          }
        }
      ]
    })
  }

  const handleCloseMessage = () => {
    Message.close()
  }

  const handleOpenMultipleMessages = () => {
    Message.open({
      title: 'First Message',
      content: <div>This message will be replaced in 3 seconds</div>,
      buttons: [
        {
          name: 'OK',
          className: 'lyrixi-primary',
          onClick: () => true
        }
      ]
    })

    setTimeout(() => {
      Message.open({
        title: 'Second Message',
        content: <div>This message will close in 3 seconds</div>,
        buttons: [
          {
            name: 'OK',
            className: 'lyrixi-primary',
            onClick: () => true
          }
        ]
      })
    }, 3000)

    setTimeout(() => {
      Message.close()
    }, 6000)
  }

  return (
    <Page>
      <Page.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button className="lyrixi-flex" color="primary" onClick={handleOpenMessage}>
            Open Message (Vertical)
          </Button>

          <Button className="lyrixi-flex" color="secondary" onClick={handleOpenHorizontalMessage}>
            Open Message (Horizontal)
          </Button>

          <Button className="lyrixi-flex" color="default" onClick={handleOpenSimpleMessage}>
            Open Simple Message
          </Button>

          <Button className="lyrixi-flex" color="danger" onClick={handleCloseMessage}>
            Close Current Message
          </Button>

          <Button className="lyrixi-flex" color="warning" onClick={handleOpenMultipleMessages}>
            Open Multiple Messages (3s replace, 3s close)
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/MessageModal.tsx

```tsx
import { useState } from 'react'

import { Page, Message, Button, Icon, Icons } from 'lyrixi-mobile'

export default function MessageModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Page>
        <Page.Main>
          <Button className="lyrixi-flex" color="primary" onClick={() => setOpen(true)}>
            Open Message.Modal
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal
        open={open}
        onClose={() => setOpen(false)}
        iconRender={() => <Icon svg={Icons.Config} size="80" color="primary" />}
        title="Title"
        content="Content"
        buttonsLayout="vertical"
        buttons={[
          {
            name: 'Button1',
            onClick: () => true
          },
          {
            name: 'Button2',
            className: 'lyrixi-primary',
            onClick: () => true
          }
        ]}
      />
    </>
  )
}
```

## demos/MessageCombo.tsx

```tsx
import { Icon, Page, Message, Button, Icons } from 'lyrixi-mobile'

export default function ComboDemo2() {
  const handleOpenMessage = () => {
    Message.open({
      iconRender: () => <Icon svg={Icons.Config} size="80" color="primary" />,
      title: 'Title',
      content: <div>Content</div>,
      buttonsLayout: 'vertical',
      buttons: [
        {
          name: 'Button1',
          onClick: () => {
            console.log('Button1 clicked')
            return true
          }
        },
        {
          name: 'Button2',
          className: 'lyrixi-primary',
          onClick: () => {
            console.log('Button2 clicked')
            return true
          }
        }
      ]
    })
  }

  return (
    <Page>
      <Page.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Using Message.Combo component */}
          <div>
            <h3>Using Message.Combo Component</h3>
            <Message.Combo
              iconRender={() => (
                <Icon svg={Icons.Config} className="lyrixi-color-primary" size="80" />
              )}
              title="Title"
              content={<div>Content</div>}
              buttonsLayout="vertical"
              buttons={[
                {
                  id: 'button1',
                  name: 'Button1',
                  onClick: () => {
                    return true
                  }
                },
                {
                  id: 'button2',
                  name: 'Button2',
                  className: 'lyrixi-primary',
                  onClick: () => {
                    return true
                  }
                }
              ]}
            >
              <Button className="lyrixi-flex" color="primary">
                Click to show message (Combo)
              </Button>
            </Message.Combo>
          </div>

          {/* Using Message.open() API */}
          <div>
            <h3>Using Message.open() API</h3>
            <Button className="lyrixi-flex" color="secondary" onClick={handleOpenMessage}>
              Click to show message (API)
            </Button>
          </div>
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/MessageMain.tsx

```tsx
import { useState } from 'react'

import { Page, Message, Button, Icon, Icons } from 'lyrixi-mobile'

export default function MessageMainDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            Open Message.Main
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main
          iconRender={() => <Icon svg={Icons.Config} size="80" color="primary" />}
          title="Title"
          content="Message.Main renders header, body and footer together."
          buttons={[
            {
              name: 'Close',
              className: 'lyrixi-primary',
              onClick: () => {
                setOpen(false)
                return false
              }
            }
          ]}
          onButtonClick={async (button, e) => {
            const result = button.onClick ? await button.onClick(e) : undefined
            if (result !== false) {
              setOpen(false)
            }
          }}
        />
      </Message.Modal>
    </>
  )
}
```

## demos/MessageHeader.tsx

```tsx
import { useState } from 'react'

import { Button, Message, Page } from 'lyrixi-mobile'

export default function MessageHeaderDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Header
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>头部内容</Message.Header>
        <Message.Main>主体</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
```

## demos/MessageFooter.tsx

```tsx
import { useState } from 'react'

import { Button, Message, Page } from 'lyrixi-mobile'

export default function MessageFooterDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Footer
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>取消</Message.Button>
          <Message.Button color="primary" onClick={() => setOpen(false)}>确定</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
```

## demos/MessageIcon.tsx

```tsx
import { useState } from 'react'

import { Button, Icon, Icons, Message, Page } from 'lyrixi-mobile'

export default function MessageIconDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Icon
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Icon>
            <Icon svg={Icons.Config} size="80" color="primary" />
          </Message.Icon>
          <Message.Title>标题</Message.Title>
        </Message.Header>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
```

## demos/MessageTitle.tsx

```tsx
import { useState } from 'react'

import { Button, Message, Page } from 'lyrixi-mobile'

export default function MessageTitleDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Title
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Title>Message.Title 标题示例</Message.Title>
        </Message.Header>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
```

## demos/MessageButton.tsx

```tsx
import { useState } from 'react'

import { Button, Message, Page } from 'lyrixi-mobile'

export default function MessageButtonDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Button
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button block onClick={() => setOpen(false)}>Message.Button 示例</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
```
