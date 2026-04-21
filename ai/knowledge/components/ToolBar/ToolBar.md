# ToolBar

顶部工具条容器。列表页最常见的子组件组合是：

- `ToolBar.Search`
- `ToolBar.SearchActive`
- `ToolBar.Filter`

## Usage

```tsx
<Page.Header>
  <ToolBar>
    <ToolBar.Search
      readOnly
      value={queryParams?.keyword || ''}
      onClick={() => setSearchActive(true)}
    />
    {searchActive && (
      <ToolBar.SearchActive
        value={searchValue}
        onChange={setSearchValue}
        onSearch={(keyword) => {
          onSearch?.({ ...queryParams, keyword })
          setSearchActive(false)
        }}
        onCancel={() => setSearchActive(false)}
      />
    )}
    <ToolBar.Filter modalRender={() => <div>...</div>} />
  </ToolBar>
</Page.Header>
```

列表页里，`ToolBar.Search` 通常作为只读入口，真正输入由 `ToolBar.SearchActive` 承担。
