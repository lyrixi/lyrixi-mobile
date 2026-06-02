# ToolBar Example

以下示例位于本目录 `demos/`（由 `src/components/ToolBar/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { ToolBar } from 'lyrixi-mobile'`

## demos/ToolBar.tsx

```tsx
import { useState, useRef } from 'react'

import { LocaleUtil, Page, Flex, ToolBar, Card, Icon, FooterBar, type ActionSheetItem, type ToolBarDropdownRef, type ToolBarFilterRef, type ToolBarItem, Icons } from 'lyrixi-mobile'

export default function ToolBarDemo() {
  const dropdownRef = useRef<ToolBarDropdownRef | null>(null)
  const filterRef = useRef<ToolBarFilterRef | null>(null)
  const [, setMainElement] = useState<HTMLElement | null>(null)
  const [dateRange, setDateRange] = useState<(Date | null)[] | null>(null)
  const [item, setItem] = useState<ToolBarItem | null>(null)
  const [actionSheetItem, setActionSheetItem] = useState<ActionSheetItem | null>(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [filledSearchActive, setFilledSearchActive] = useState(false)

  function renderDropdownModal(ctx: { open: boolean | null; onClose: () => void }) {
    const onClose = ctx.onClose
    return (
      <div>
        <div style={{ height: '300px' }}>Modal Content</div>
        <FooterBar>
          <FooterBar.Button
            block
            backgroundColor="default"
            onClick={() => {
              if (typeof onClose === 'function') onClose()
              else dropdownRef.current?.close()
            }}
          >
            {LocaleUtil.locale('取消', 'lyrixi.cancel')}
          </FooterBar.Button>
          <FooterBar.Button
            block
            color="white"
            backgroundColor="primary"
            onClick={() => {
              console.log('ok')
            }}
          >
            {LocaleUtil.locale('确定', 'lyrixi.ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    )
  }

  return (
    <Page>
      <Page.Main
        ref={(current) => {
          if (!current?.element) return
          setMainElement(current.element)
        }}
      >
        <Card>
          <Card.Header>Dropdown</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.Dropdown
                left={12}
                color="primary"
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown left
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={renderDropdownModal} ref={dropdownRef}>
                Dropdown ref
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={renderDropdownModal}>Dropdown modal</ToolBar.Dropdown>

              <ToolBar.Dropdown
                right={12}
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown right
              </ToolBar.Dropdown>
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>DateRange</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.DateRange
                arrowRender={({ open }) => {
                  if (open) {
                    return '^'
                  }
                  return '>'
                }}
                placeholder={'DateRange'}
                value={dateRange}
                onChange={(newDateRange) => {
                  console.log('修改:', newDateRange)
                  setDateRange(newDateRange)
                }}
              />
              <ToolBar.DateRange
                placeholder="DateRange"
                value={dateRange}
                onChange={(newDateRange) => {
                  console.log('修改:', newDateRange)
                  setDateRange(newDateRange)
                }}
              />
              <ToolBar.DateRange
                placeholder="DateRange"
                value={dateRange}
                onChange={(newDateRange) => {
                  console.log('修改:', newDateRange)
                  setDateRange(newDateRange)
                }}
              />
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.List
                left={12}
                placeholder="List"
                value={item}
                onChange={(v) => setItem(Array.isArray(v) ? (v[0] ?? null) : (v ?? null))}
                list={[
                  {
                    disabled: true,
                    id: '',
                    name: 'Disabled'
                  },
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
              />
              <ToolBar.List
// ... 其余见 demos/ToolBar.tsx 全文
```

## demos/ToolBarDropdown.tsx

```tsx
import { useRef } from 'react'

import { Page, ToolBar, Button, type ToolBarDropdownRef } from 'lyrixi-mobile'

export default function ToolBarDropdownDemo() {
  const dropdownRef = useRef<ToolBarDropdownRef | null>(null)

  return (
    <Page>
      <Page.Header>
        <ToolBar>
          <ToolBar.Dropdown
            left={12}
            color="primary"
            modalRender={() => {
              return <div style={{ height: '300px' }}>Modal Content</div>
            }}
          >
            Dropdown left
          </ToolBar.Dropdown>

          <ToolBar.Dropdown modalRender={() => {
            return <div style={{ height: '300px' }}>Modal Content</div>
          }} ref={dropdownRef}>
            Dropdown ref
          </ToolBar.Dropdown>

          <ToolBar.Dropdown
            right={12}
            modalRender={() => {
              return <div style={{ height: '300px' }}>Modal Content</div>
            }}
          >
            Dropdown right
          </ToolBar.Dropdown>
        </ToolBar>
        <Page.Main>
          <Button
            onClick={() => {
              dropdownRef.current?.open()
            }}
          >
            Click to open dropdown
          </Button>
        </Page.Main>
      </Page.Header>
    </Page>
  )
}
```

## demos/ToolBarButton.tsx

```tsx
import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarButtonDemo() {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Button>
          ToolBar.Button
        </ToolBar.Button>
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarSearch.tsx

```tsx
import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarSearchDemo() {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Search placeholder="Search" value="" onSearch={() => {}} />
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarSearchActive.tsx

```tsx
import { useState } from 'react'

import { Page, ToolBar, Card } from 'lyrixi-mobile'

export default function ToolBarSearchActiveDemo() {
  const [keyword, setKeyword] = useState('')
  const [keywordComposition, setKeywordComposition] = useState('')

  return (
    <Page>
      <Page.Main>
        <Card style={{ marginBottom: '16px' }}>
          <Card.Header>普通示例</Card.Header>
          <Card.Main>
            <ToolBar.SearchActive
              value={keyword}
              placeholder="搜索"
              onChange={(val) => setKeyword(val)}
              onSearch={(val) => console.log('搜索:', val)}
              onCancel={() => setKeyword('')}
              allowClear
            />
            {keyword ? (
              <div style={{ padding: '12px', fontSize: '14px', color: '#666' }}>
                当前关键词: {keyword}
              </div>
            ) : null}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>enableCompositionEnd 示例（输入法落字后触发 onChange）</Card.Header>
          <Card.Main>
            <ToolBar.SearchActive
              value={keywordComposition}
              enableCompositionEnd
              placeholder="可输入中文测试，落字后触发"
              onChange={(val) => {
                console.log('ToolBar.SearchActive onChange:', val)
                setKeywordComposition(val)
              }}
              onSearch={(val) => console.log('搜索:', val)}
              onCancel={() => setKeywordComposition('')}
              allowClear
            />
            {keywordComposition ? (
              <div style={{ padding: '12px', fontSize: '14px', color: '#666' }}>
                当前关键词: {keywordComposition}
              </div>
            ) : null}
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarDateRange.tsx

```tsx
import { useState } from 'react'

import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarDateRangeDemo() {
  const [dateRange, setDateRange] = useState<(Date | null)[] | null>([new Date(), new Date()])
  return (
    <Page>
      <Page.Main>
        <ToolBar.DateRange
          value={dateRange}
          onChange={(newDateRange) => {
            console.log('修改:', newDateRange)
            setDateRange(newDateRange)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarList.tsx

```tsx
import { useState } from 'react'

import { Page, ToolBar, type ToolBarItem } from 'lyrixi-mobile'

export default function ToolBarListDemo() {
  const [item, setItem] = useState<ToolBarItem | null>({
    disabled: true,
    id: '',
    name: 'Disabled'
  })

  return (
    <Page>
      <Page.Main>
        <ToolBar.List
          value={item}
          onChange={(v) => setItem(Array.isArray(v) ? (v[0] ?? null) : (v ?? null))}
          list={[
            {
              disabled: true,
              id: '',
              name: 'Disabled'
            },
            {
              id: '1',
              name: 'Option1'
            },
            {
              id: '2',
              name: 'Option2'
            }
          ]}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarActionSheet.tsx

```tsx
import { useState } from 'react'

import { Page, ToolBar, type ActionSheetItem } from 'lyrixi-mobile'

export default function ToolBarActionSheetDemo() {
  const [item, setItem] = useState<ActionSheetItem | null>({
    disabled: true,
    id: '',
    name: 'Disabled'
  })

  return (
    <Page>
      <Page.Main>
        <ToolBar.ActionSheet
          value={item}
          onChange={(v) => setItem(v ?? null)}
          list={[
            {
              disabled: true,
              id: '',
              name: 'Disabled'
            },
            {
              id: '1',
              name: 'Option1'
            },
            {
              id: '2',
              name: 'Option2'
            }
          ]}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/ToolBarFilter.tsx

```tsx
import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarFilterDemo() {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Filter>
          {/* ToolBar.Filter 示例内容 */}
        </ToolBar.Filter>
      </Page.Main>
    </Page>
  )
}
```
