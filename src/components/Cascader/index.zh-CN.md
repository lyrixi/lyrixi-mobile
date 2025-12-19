---
group:
  title: 数据录入
  order: 2
order: 1
title: Cascader
toc: content
---

# Cascader

级联选择器组件，用于多级数据选择。

## 何时使用

- 需要多级数据选择时
- 需要地区选择时
- 需要分类选择时
- 需要树形数据选择时

## 示例

### Cascader.Combo

<code src="./demos/Combo/index.jsx"></code>

### Cascader.DistrictCombo

<code src="./demos/DistrictCombo/index.jsx"></code>

## Cascader.Main

### 属性

| 属性          | 说明         | 类型                     | 默认值 |
| ------------- | ------------ | ------------------------ | ------ |
| open          | 是否可见     | `boolean`                | `true` |
| searchVisible | 搜索是否可见 | `boolean`                | -      |
| value         | 当前值       | `array`                  | -      |
| allowClear    | 是否允许清除 | `boolean`                | -      |
| onChange      | 变化回调     | `(value: array) => void` | -      |
| onReLoad      | 重新加载回调 | `() => void`             | -      |
| list          | 数据列表     | `array`                  | -      |
| loadData      | 加载数据函数 | `function`               | -      |
| optionProps   | 选项属性     | `object`                 | `{}`   |
| tabbar        | 标签栏配置   | `object`                 | -      |

### Ref

| 属性           | 说明             | 类型                                |
| -------------- | ---------------- | ----------------------------------- |
| mainElement    | 主容器元素       | `HtmlDivElement`                    |
| getMainElement | 获取主容器元素   | () => `HtmlDivElement`              |
| update         | 更新数据         | `() => void`                        |
| updateIsLeaf   | 设置叶子节点标识 | `(list: array, id: string) => void` |
