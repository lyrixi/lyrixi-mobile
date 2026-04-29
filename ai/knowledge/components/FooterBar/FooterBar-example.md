# FooterBar Example

底部操作条容器。列表页筛选弹层、页面底部固定动作区都适合使用：

- `FooterBar`
- `FooterBar.Button`

## 只有按钮

```tsx
<FooterBar>
  <FooterBar.Button block backgroundColor="default" onClick={onClose}>
    取消
  </FooterBar.Button>
  <FooterBar.Button block color="white" backgroundColor="primary" onClick={onConfirm}>
    确定
  </FooterBar.Button>
</FooterBar>
```

## 按钮列表

```tsx
<FooterBar>
  <FooterBar.Button block backgroundColor="default" onClick={onClose}>
    取消
  </FooterBar.Button>
  <FooterBar.Button block color="white" backgroundColor="primary" onClick={onConfirm}>
    确定
  </FooterBar.Button>
</FooterBar>
```
