# Lyrixi UI Patterns

## 登录页 / Login Page

- 使用 `Page` 作为页面容器
- 使用 `Form` + `Input.Text` / `Input.Password`
- 使用 `Button` 作为提交操作
- 如需卡片包裹，使用 `Card`

推荐组合：

```jsx
<Page>
  <Page.Main>
    <Form>
      <Form.Item label="用户名">
        <Input.Text />
      </Form.Item>
      <Form.Item label="密码">
        <Input.Password />
      </Form.Item>
      <Button color="primary" block>登录</Button>
    </Form>
  </Page.Main>
</Page>
```

## 列表页 / List Page

- 使用 `Page.Header` 放搜索/筛选
- 使用 `ToolBar` 组合搜索、筛选、日期、下拉
- 使用 `Page.Main` 放 `List` 或 `ListPagination`
- 通过 `formatPayload` / `formatResult` / `formatViewItem` 组织列表逻辑

推荐组合：

```jsx
<Page>
  <Page.Header>
    <ToolBar>
      <ToolBar.Search />
      <ToolBar.Filter />
    </ToolBar>
  </Page.Header>
  <Page.Main>
    <ListPagination />
  </Page.Main>
</Page>
```

## 表单页 / Form Page

- 使用 `Page.Main` 放 `Form`
- 使用 `Form.Item` 管理字段
- 常见字段使用：
  - `Input.Text`
  - `Input.Number`
  - `Select.Combo`
  - `DatePicker.Combo`
  - `Switch`
- `Page.Footer` 放保存/取消操作

## 详情页 / Detail Page

- 使用 `Page.Main` 放展示内容
- 有数据错误或空态时使用 `Result`
- 如有审批、确认操作，使用 `Page.Footer` + `FooterBar`

## 工具栏 / ToolBar

- 顶部工具区优先使用 `ToolBar`
- 常见组合：
  - `ToolBar.Search` + `ToolBar.Filter`
  - `ToolBar.List` + `ToolBar.ActionSheet`
  - `ToolBar.Dropdown` + `FooterBar`

## 浮层 / Overlay

- 简单动作选择：`ActionSheet`
- 复杂筛选面板：`ToolBar.Dropdown` 或 `ToolBar.Filter`
- 确认/取消操作区优先使用 `FooterBar`
