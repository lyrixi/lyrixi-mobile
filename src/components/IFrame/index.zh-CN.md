---
group:
  title: 数据展示
  order: 5
order: 1
title: IFrame
toc: content
---

# IFrame

内联框架组件，用于嵌入其他页面。

## 何时使用

- 需要嵌入其他页面时
- 需要显示外部内容时
- 需要隔离内容时

## 使用方法

```bash
const iframeRef = useRef(null)

<IFrame
  ref={iframeRef}
  src={`目标页面`}
  data={{
    onOk: (result, { historyCount } = {}) => {
      if (typeof historyCount === 'number') {
        iframeRef.current?.contentWindow?.history?.go(-historyCount)
      }
      setTimeout(() => {
        onOk && onOk(result)
      }, 100)
    }
  }}
/>
```

目标页面

```bash
// 对接客户控件的新增客户场景
if (typeof window.frameElement?.data?.onOk === 'function') {
  window.frameElement.data.onOk('', { historyCount: 2 })
  return
}
```

## API

### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| src       | 页面地址   | `string` | -      |
| data      | 数据       | `object` | -      |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

### Ref

| 属性       | 说明       | 类型                      |
| ---------- | ---------- | ------------------------- |
| element    | 根元素     | `HtmlIFrameElement`       |
| getElement | 获取根元素 | () => `HtmlIFrameElement` |
