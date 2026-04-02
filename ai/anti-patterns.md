# Anti Patterns (STRICTLY FORBIDDEN)

## 不要这样做

- 不要用原生 `<button>` 代替 `Button`
- 不要用 `<div onClick>` 充当按钮
- 不要在页面里随意堆原生布局元素替代现有组件
- 不要在已存在 `lyrixi-*` 全局样式类时手写重复样式
- 不要在用户已指定 `lyrixi-mobile` 的前提下引入其它 UI 库

## 应优先替代的原生写法

- `<button>` → `Button`
- `ul/li` 风格列表 → `List` / `List.Item`
- 搜索栏自造输入框 → `ToolBar.Search` 或 `Input.Search`
- 自造弹层 → `Modal` / `ActionSheet` / `ToolBar.Dropdown`
- 自造表单容器 → `Form` + `Form.Item`

## 反例

```jsx
<div>
  <input />
  <button>Submit</button>
</div>
```

## 正例

```jsx
<Page>
  <Page.Main>
    <Form>
      <Form.Item label="用户名">
        <Input.Text />
      </Form.Item>
      <Button color="primary">提交</Button>
    </Form>
  </Page.Main>
</Page>
```
