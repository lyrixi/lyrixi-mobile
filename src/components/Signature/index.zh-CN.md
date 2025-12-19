---
group:
  title: 数据录入
  order: 2
order: 1
title: Signature
toc: content
---

# Signature

签名组件，用于手写签名。

## 何时使用

- 需要手写签名时
- 需要电子签名时
- 需要保存签名图片时

## 代码演示

<code src="./demos/Main/index.jsx"></code>

## API

### 属性

| 属性            | 说明       | 类型     | 默认值   |
| --------------- | ---------- | -------- | -------- |
| suffix          | 图片格式   | `string` | `'png'`  |
| quality         | 图片质量   | `number` | `0.92`   |
| style           | 自定义样式 | `object` | -        |
| color           | 画笔颜色   | `string` | `'#000'` |
| backgroundColor | 背景颜色   | `string` | `'#fff'` |
| lineWidth       | 线条宽度   | `number` | `3`      |

### Ref

| 属性       | 说明        | 类型                            |
| ---------- | ----------- | ------------------------------- | --- |
| element    | 根元素      | `HtmlDivElement`                |
| getElement | 获取根元素  | () => `HtmlDivElement`          |
| getBase64  | 获取 Base64 | `() => Promise<string \| null>` | -   |
| clear      | 清除签名    | `() => void`                    |

## Signature.Combo

签名组合组件，结合输入框和签名。

### 何时使用

- 需要结合输入框和签名时

### 代码演示

<code src="./demos/Combo/index.jsx"></code>

### API

#### 属性

同 Signature 组件属性，以及输入框相关属性。

#### Ref

同 Signature 组件 Ref。

## Signature.Modal

签名模态框组件。

### 何时使用

- 需要以模态框形式显示签名时

### 代码演示

<code src="./demos/Modal/index.jsx"></code>

### API

#### 属性

同 Signature 组件属性。

#### Ref

同 Signature 组件 Ref。

## Signature.Main

签名主组件。

### 何时使用

- 需要直接使用签名主组件时

### 代码演示

<code src="./demos/Main/index.jsx"></code>

### API

#### 属性

同 Signature 组件属性。

#### Ref

同 Signature 组件 Ref。
