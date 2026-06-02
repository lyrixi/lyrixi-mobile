# TabBar Example

以下示例位于本目录 `demos/`（由 `src/components/TabBar/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { TabBar } from 'lyrixi-mobile'`

## demos/TabBarTabs.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, TabBar, Icon, Icons, type TabBarItem } from 'lyrixi-mobile'

export default function TabBarTabsDemo() {
  const [value, setValue] = useState<TabBarItem>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarItem) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
        <TabBar.Tabs
          gap={12}
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>OverFlow</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
      </Page.Main>
// ... 其余见 demos/TabBarTabs.tsx 全文
```

## demos/TabBarSlide.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, TabBar, Icon, Icons, type TabBarItem } from 'lyrixi-mobile'

export default function TabBarSlideDemo() {
  const list = [
    {
      id: 'Fruit',
      name: 'Fruit'
    },
    { id: 'Vegetable', name: 'Vegetable', disabled: true },
    { id: 'Animal', name: 'Animal' }
  ]
  const [value, setValue] = useState<TabBarItem>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarItem) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Divider>OverFlow</Divider>
        <TabBar.Slide
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Slide
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Slide
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Slide
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Size s</Divider>
        <TabBar.Slide
          list={list}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
          className="lyrixi-s"
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/TabBarMenus.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, TabBar, Icon, Icons, type TabBarItem } from 'lyrixi-mobile'

export default function TabBarMenusDemo() {
  const [value, setValue] = useState<TabBarItem>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarItem) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
        <TabBar.Tabs
          gap={12}
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>OverFlow</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
      </Page.Main>
// ... 其余见 demos/TabBarMenus.tsx 全文
```

## demos/TabBarGroup.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, TabBar, Icon, Icons, type TabBarItem } from 'lyrixi-mobile'

export default function TabBarGroupDemo() {
  const list = [
    {
      id: 'Fruit',
      name: 'Fruit'
    },
    { id: 'Vegetable', name: 'Vegetable', disabled: true },
    { id: 'Animal', name: 'Animal' }
  ]
  const [value, setValue] = useState<TabBarItem>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarItem) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Divider>OverFlow</Divider>
        <TabBar.Group
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Group
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Group
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Group
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="m" />,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Size s</Divider>
        <TabBar.Group
          list={list}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
          className="lyrixi-s"
        />
      </Page.Main>
    </Page>
  )
}
```
