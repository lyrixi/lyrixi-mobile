# Page

页面级布局容器。列表页场景最常用的是：

- `Page`
- `Page.Header`
- `Page.Main`
- `Page.Footer`

## 完整布局示例

安全区`safeArea`: 默认需要安全区, 用于苹果或安卓手机空出系统的操作横条区域, `Page`和`Page.Footer`只能有一个加`safeArea`, 有`Page.Footer`时, 则`Page`不加此属性

```tsx
<Page safeArea>
  <Page.Header>{/* 头部 */}</Page.Header>
  <Page.Main>{/* 身体 */}</Page.Main>
  <Page.Footer safeArea>{/* 底部 */}</Page.Footer>
</Page>
```
