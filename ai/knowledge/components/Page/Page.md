# Page

页面级布局容器。列表页场景最常用的是：

- `Page`
- `Page.Header`
- `Page.Main`
- `Page.Footer`

## Usage

```tsx
<Page>
  <Page.Header>
    <Header />
  </Page.Header>
  <Page.Main>
    <Main />
  </Page.Main>
</Page>
```

也允许直接把主体放在 `Page` 下：

```tsx
<Page>
  <Header />
  <Main />
</Page>
```

当页面需要滚动、下拉刷新、触底加载时，优先使用 `Page.Main` 承载主内容区。
