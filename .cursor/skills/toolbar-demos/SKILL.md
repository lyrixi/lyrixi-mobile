---
name: toolbar-demos
description: >
  Guides generation of ToolBar demos and usage code for lyrixi-mobile in this repo. Use when the user wants to create or modify ToolBar-based UIs (Dropdown, DateRange, List, ActionSheet, Button, Filter, Search, SearchActive) with accurate props and typical combinations.
---

# ToolBar Demos & Usage (src/components/ToolBar)

This skill teaches how to use `ToolBar` and its subcomponents **in this project**, based on existing demos like `src/components/ToolBar/demos/ToolBar.jsx`.

## When to use this skill

- The user says they want to:
  - “用 ToolBar 做一个筛选/搜索/排序区域”
  - “在页面顶部放一个带下拉、日期、列表筛选的工具栏”
  - “基于 ToolBar 写一个 demo”
- The code is:
  - Under `src/components/ToolBar/demos/` (demos), or
  - A page `Header` / 顶部工具区域（通常在 `Page.Header` 或 `Page.Main` 顶部）、
  - Importing `ToolBar` from `lyrixi-mobile`.

Do **not** use this skill for unrelated layout or non-ToolBar navigation.

---

## General rules

1. **Imports**
   - In demos and business code, prefer barrel import:
     - `import { LocaleUtil, Page, Flex, ToolBar, Card, Icon, FooterBar } from 'lyrixi-mobile'`
   - Follow project-wide rules in `ai/README.md` and related AI files:
     - Use only existing components (do not invent new primitives).
     - Use `LocaleUtil.locale` for user-facing text where appropriate.

2. **Basic structure**
   - A typical demo structure:
     - Wrap in `<Page>` → `<Page.Main>`.
     - Use `<Card>` blocks to group examples.
     - Place `<ToolBar>` inside `Card.Main`.
   - Example skeleton:

```jsx
export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Title</Card.Header>
          <Card.Main>
            <ToolBar>
              {/* ToolBar content here */}
            </ToolBar>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

3. **State & refs**
   - Use `useState` / `useRef` as in existing demo:
     - `const [item, setItem] = useState(null)`
     - `const [dateRange, setDateRange] = useState(null)`
     - `const [search, setSearch] = useState('')`
     - `const dropdownRef = useRef(null)`
     - `const filterRef = useRef(null)`
   - For Dropdown filter side panels, keep a `ref` to control open/close.

---

## ToolBar.Dropdown

### When to use

- Top toolbar with a button that opens a dropdown modal panel.
- For generic “more filters / options” panels, often combined with `FooterBar` buttons.

### Typical usage

- Simple inline modal:

```jsx
<ToolBar.Dropdown
  left={12}
  color="primary"
  modalRender={() => <div style={{ height: '300px' }}>Modal Content</div>}
>
  Dropdown left
</ToolBar.Dropdown>
```

- Reusable modal content with `FooterBar` and close control:

```jsx
const dropdownRef = useRef(null)

function getDropdownModalNode({ open, close } = {}) {
  return (
    <div>
      <div style={{ height: '300px' }}>Modal Content</div>
      <FooterBar>
        <FooterBar.Button
          block
          backgroundColor="default"
          onClick={() => {
            typeof close === 'function' ? close() : dropdownRef.current.close()
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

<ToolBar.Dropdown modalRender={getDropdownModalNode} ref={dropdownRef}>
  Dropdown ref
</ToolBar.Dropdown>
```

- Right-aligned dropdown:

```jsx
<ToolBar.Dropdown
  right={12}
  modalRender={() => <div style={{ height: '300px' }}>Modal Content</div>}
>
  Dropdown right
</ToolBar.Dropdown>
```

---

## ToolBar.DateRange

### When to use

- In list headers to select a date range for query parameters.

### Typical usage

- Basic:

```jsx
const [dateRange, setDateRange] = useState(null)

<ToolBar.DateRange
  placeholder="DateRange"
  value={dateRange}
  onChange={(newDateRange, { rangeId }) => {
    console.log('修改:', newDateRange)
    setDateRange(newDateRange)
  }}
/>
```

- With custom arrow and format:

```jsx
<ToolBar.DateRange
  arrowRender={({ open }) => (open ? '^' : '>')}
  placeholder="DateRange"
  format="MM-DD"
  value={dateRange}
  onChange={(newDateRange, { rangeId }) => {
    console.log('修改:', newDateRange)
    setDateRange(newDateRange)
  }}
/>
```

---

## ToolBar.List & ToolBar.ActionSheet

### When to use

- `ToolBar.List`: list-type selector in toolbar (e.g. sort, simple filters).
- `ToolBar.ActionSheet`: action sheet style selector.

### Typical usage (List)

```jsx
const [item, setItem] = useState(null)

<ToolBar.List
  left={12}
  placeholder="List"
  value={item}
  onChange={setItem}
  list={[
    { disabled: true, id: '', name: 'Disabled' },
    { id: '1', name: 'Option1' },
    { id: '2', name: 'Option2' }
  ]}
/>
```

### Typical usage (ActionSheet)

```jsx
const [item, setItem] = useState(null)

<ToolBar.ActionSheet
  placeholder="List"
  value={item}
  onChange={setItem}
  list={[
    { disabled: true, id: '', name: 'Disabled' },
    { id: '1', name: 'Option1' },
    { id: '2', name: 'Option2' }
  ]}
/>
```

---

## ToolBar.Button, Filter, Search, SearchActive

### ToolBar.Button

- Used for icon buttons or simple text buttons in the bar:

```jsx
<ToolBar.Button sizeEqual onClick={() => console.log(1)}>
  <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode" />
</ToolBar.Button>
```

- Combine multiple buttons with `Flex.Compact`:

```jsx
<Flex.Compact separator={<div style={{ width: '2px' }} />}>
  <ToolBar.Button>1</ToolBar.Button>
  <ToolBar.Button>2</ToolBar.Button>
  <ToolBar.Button>3</ToolBar.Button>
</Flex.Compact>
```

### ToolBar.Filter

- Standard filter icon button opening a side-modal:

```jsx
const filterRef = useRef(null)

<ToolBar.Filter
  ref={filterRef}
  sizeEqual
  color="primary"
  icon={<Icon className="lyrixi-iconfont-search" />}
  onReset={() => console.log('reset')}
  onOk={() => console.log('submit')}
  modalRender={() => <div style={{ height: '300px' }}>Modal Content</div>}
/>
```

### ToolBar.Search

- Simple search input in toolbar:

```jsx
const [search, setSearch] = useState('')

<ToolBar.Search
  value={search}
  onSearch={(value) => {
    console.log('search:', value)
  }}
/>
```

- Readonly search that opens active search:

```jsx
<ToolBar.Search
  value={search}
  readOnly
  onClick={() => {
    setSearchActive(true)
  }}
/>
```

### ToolBar.SearchActive

- Full-screen/active search bar, typically toggled by `searchActive` state:

```jsx
{searchActive ? (
  <ToolBar.SearchActive
    value={search}
    onSearch={(keyword) => {
      setSearch(keyword)
      console.log('search keyword:' + keyword)
      setSearchActive(false)
    }}
    onBlur={() => {
      setSearchActive(false)
    }}
  />
) : (
  // Normal ToolBar contents, including ToolBar.Search + Filter + Buttons
)}
```

---

## Combined patterns

When the user describes a toolbar in natural language (e.g. “左边是搜索，中间是排序，右边是筛选和更多操作”), prefer composing from these blocks:

- Left: `ToolBar.Search` or `ToolBar.List`
- Middle: `ToolBar.List` / `ToolBar.ActionSheet` (sort, quick filters)
- Right: `ToolBar.Filter`, `ToolBar.Dropdown`, and/or icon `ToolBar.Button`

Always:

- Place them inside a single `<ToolBar>` block.
- Use `Flex.Compact` where grouping multiple adjacent buttons or selectors.

