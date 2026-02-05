---
group:
  title: 数据录入
  order: 2
order: 1
title: Transfer
toc: content
---

# Transfer

穿梭框组件，用于在两栏之间移动元素。

## 何时使用

- 需要在两栏之间移动元素时
- 需要选择多个选项时
- 需要管理已选和未选项时

## 代码演示

<code src="./demos/Transfer.jsx"></code>

## API

### 属性

| 属性       | 说明       | 类型                                      | 默认值 |
| ---------- | ---------- | ----------------------------------------- | ------ |
| value      | 选中的值   | `Array<{id: string, [key: string]: any}>` | -      |
| list       | 选项列表   | `Array<{id: string, [key: string]: any}>` | -      |
| titles     | 标题数组   | `[string, string]`                        | -      |
| open       | 是否展开   | `boolean`                                 | -      |
| allowClear | 允许清除   | `boolean`                                 | -      |
| style      | 自定义样式 | `object`                                  | -      |
| className  | 自定义类名 | `string`                                  | -      |
| onChange   | 变化事件   | `(value: Array) => void`                  | -      |

### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| mainElement    | 主元素     | `HTMLDivElement`       |
| getMainElement | 获取主元素 | () => `HTMLDivElement` |

## Transfer.Combo

穿梭框组合组件，结合输入框和穿梭框。

### 何时使用

- 需要结合输入框和穿梭框时

### 代码演示

<code src="./demos/Combo/index.jsx"></code>

### API

#### 属性

同 Transfer 组件属性。

#### Ref

同 Transfer 组件 Ref。

## Transfer.Modal

穿梭框模态框组件。

### 何时使用

- 需要以模态框形式显示穿梭框时

### 代码演示

<code src="./demos/Modal/index.jsx"></code>

### API

#### 属性

同 Transfer 组件属性。

#### Ref

同 Transfer 组件 Ref。

## Transfer.Main

穿梭框主组件。

### 何时使用

- 需要直接使用穿梭框主组件时

### 代码演示

<code src="./demos/Main/index.jsx"></code>

### API

#### 属性

同 Transfer 组件属性。

#### Ref

同 Transfer 组件 Ref。
