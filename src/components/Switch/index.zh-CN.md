---
group:
  title: 数据录入
  order: 2
order: 1
title: Switch
toc: content
---

# Switch

开关组件，用于表示开启/关闭状态。

## 何时使用

- 需要表示开启/关闭状态时
- 需要用户快速切换某个功能时
- 需要表示布尔值状态时

## 示例

<code src="./demos/demo1.jsx"></code>

## Switch

### 属性

| 属性     | 说明         | 类型                                         | 默认值 |
| -------- | ------------ | -------------------------------------------- | ------ |
| readOnly | 是否只读     | `boolean`                                    | -      |
| disabled | 是否禁用     | `boolean`                                    | -      |
| checked  | 是否开启     | `boolean`                                    | -      |
| on       | 开启状态文本 | `ReactNode`                                  | -      |
| off      | 关闭状态文本 | `ReactNode`                                  | -      |
| size     | 开关尺寸     | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'` | `'m'`  |
| onChange | 状态变化回调 | `(checked: boolean) => void`                 | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
