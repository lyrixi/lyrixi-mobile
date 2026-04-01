---
name: overlay-patterns
description: >
  Defines common overlay (Modal, ActionSheet, DropdownModal, Filter panels) usage patterns in this repo. Use when generating or refactoring code that combines ToolBar, Filter, Dropdown, Modal, and ActionSheet.
---

# 浮层组合规范（Modal / ActionSheet / Dropdown / Filter 等）

本 skill 规范本项目中各种「浮层型组件」的典型组合方式，重点包括：

- `Modal`
- `ActionSheet`
- `ToolBar.Dropdown` + Modal
- `ToolBar.Filter` 侧边筛选面板
- 与 `ToolBar`、列表页的联动

---

## 1. 何时使用本 skill

启用时机：

- 用户想要：
  - 在 ToolBar 里加「更多筛选」、「条件面板」、「排序/操作弹层」；
  - 在列表行/按钮上点击后打开 Modal 或 ActionSheet；
  - 做一个有「确认 / 取消」按钮的弹出层。
- 涉及组件：
  - `Modal` / `ActionSheet`
  - `ToolBar.Dropdown`、`ToolBar.ActionSheet`、`ToolBar.Filter`
  - 以及它们之间的组合。

不用于：

- 只是简单的 `Toast` / `Message` / `Loading` 提示。

---

## 2. 通用约定

1. **只用已有组件，不新造弹层**
   - 优先用：
     - `Modal`
     - `ActionSheet`
     - `ToolBar.Dropdown`（内部使用 DropdownModal）
     - `ToolBar.ActionSheet`
     - `ToolBar.Filter`（侧边筛选面板）

2. **统一 Footer 操作区**
   - 常用模式：使用 `FooterBar` 来放置「取消 / 确定」按钮：

```jsx
import { FooterBar, LocaleUtil } from 'lyrixi-mobile'

function getModalFooter({ close }) {
  return (
    <FooterBar>
      <FooterBar.Button
        block
        backgroundColor="default"
        onClick={close}
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
  )
}
```

---

## 3. ToolBar.Dropdown + Modal 面板模式

该模式已在 `src/components/ToolBar/demos/ToolBar.jsx` 中使用。

### 3.1 推荐结构

- 用 `ToolBar.Dropdown` 包裹一个标签/按钮；
- 通过 `modalRender` 渲染内容区域（包含 FooterBar 操作区）；
- 用 `ref` 控制开关作为兜底。

### 3.2 示例

```jsx
import { LocaleUtil, ToolBar, FooterBar } from 'lyrixi-mobile'
import React, { useRef } from 'react'

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

<ToolBar>
  <ToolBar.Dropdown
    left={12}
    color="primary"
    modalRender={() => <div style={{ height: '300px' }}>Modal Content</div>}
  >
    Dropdown left
  </ToolBar.Dropdown>

  <ToolBar.Dropdown modalRender={getDropdownModalNode} ref={dropdownRef}>
    Dropdown ref
  </ToolBar.Dropdown>
</ToolBar>
```

要点：

- 左右定位用 `left` / `right`；
- 内容区高度通过内联 `style` 或自定义组件控制；
- 关闭逻辑优先使用 `close` 回调，无则使用 `ref.current.close()`。

---

## 4. ToolBar.ActionSheet / ActionSheet 列表操作

### 4.1 ToolBar.ActionSheet（工具栏上的列表选择）

适合用在工具栏中作为「下拉式操作/筛选」：

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

### 4.2 独立 ActionSheet（非 ToolBar 内）

如果需要在页面中以按钮触发 ActionSheet，而非放在 ToolBar 内，可以：

- 使用 `ActionSheet.Combo` 或 `ActionSheet` 本身；
- 保持 list 的数据结构与 ToolBar.ActionSheet 一致（`{ id, name, disabled? }`）。

---

## 5. 侧边筛选面板（ToolBar.Filter）

### 5.1 模式说明

- 在 ToolBar 中放一个 `Filter` 图标按钮；
- 点击后打开一个侧边筛选面板（通常是 Modal/Drawer 风格）；
- 面板内放表单项、筛选条件，底部用 FooterBar 放「重置/确定」。

### 5.2 示例

```jsx
const filterRef = useRef(null)

<ToolBar>
  <ToolBar.Button
    onClick={() => {
      filterRef.current?.open()
    }}
  >
    Click to toggle filter modal
  </ToolBar.Button>
  <ToolBar.Filter
    ref={filterRef}
    sizeEqual
    color="primary"
    icon={<Icon className="lyrixi-iconfont-search" />}
    onReset={() => {
      console.log('reset')
    }}
    onOk={() => {
      console.log('submit')
    }}
    modalRender={() => {
      return <div style={{ height: '300px' }}>Modal Content</div>
    }}
  />
</ToolBar>
```

要点：

- 通过 `ref` 暴露的 `open/close` 方法控制面板；
- `onReset` / `onOk` 回调中执行：
  - 重置筛选条件；
  - 触发列表刷新。

---

## 6. 与列表的联动模式

当浮层用于列表筛选/操作时，推荐模式：

1. ToolBar 中的控件（Dropdown / Filter / List / ActionSheet）更新 **查询参数 state**；
2. 列表 Main 部分（见 `list-control` skill）监听查询参数，调用 `fetchData`；
3. Modal/ActionSheet 关闭时：
   - 若是确认，则更新查询参数并刷新列表；
   - 若是取消，则仅关闭，不改变查询条件。

伪代码：

```jsx
const [queryParams, setQueryParams] = useState({})

function handleFilterOk(newFilters) {
  setQueryParams((prev) => ({
    ...prev,
    filters: newFilters,
    pageNum: 1
  }))
}

// ToolBar 中的 Filter / Dropdown 在 onOk/onChange 中调用 handleFilterOk
// Main 中的 List 使用 list-control skill 中的模式监听 queryParams 并刷新数据
```

---

## 7. 使用建议

当用户描述：

- 「在工具栏里加一个筛选弹层」；
- 「点击某个按钮弹出一个带确定/取消的配置面板」；
- 「希望列表上方有一个下拉面板控制更多条件」；

优先：

1. 选择合适组件：
   - 工具栏上的复杂面板：`ToolBar.Dropdown` + `modalRender`；
   - 简单双列选项或动作：`ToolBar.ActionSheet`；
   - 侧边筛选：`ToolBar.Filter` + `ref.open()`；
2. 使用 `FooterBar` 统一底部按钮区；
3. 将确认操作与列表 `queryParams` 更新、数据刷新关联起来。 

