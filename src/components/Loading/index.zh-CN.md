---
group:
  title: 反馈
  order: 4
order: 1
title: Loading
toc: content
---

# Loading

加载中组件，用于显示加载状态。

## 何时使用

- 需要显示加载状态时
- 需要显示数据加载中时
- 需要显示操作进行中时

## 代码演示

<code src="./demos/Loading/index.jsx"></code>

## API

### Loading.show

显示 Loading。

#### 参数

| 参数          | 说明       | 类型          | 默认值 |
| ------------- | ---------- | ------------- | ------ |
| portal        | 挂载节点   | `HTMLElement` | -      |
| id            | Loading ID | `string`      | -      |
| maskClassName | 遮罩类名   | `string`      | -      |
| maskStyle     | 遮罩样式   | `object`      | -      |
| className     | 内容类名   | `string`      | -      |
| style         | 内容样式   | `object`      | -      |
| content       | 提示内容   | `string`      | -      |
| onOpen        | 打开事件   | `() => void`  | -      |

#### 返回值

无返回值。

### Loading.hide

隐藏 Loading。

#### 参数

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| id   | Loading ID | `string` | -      |

#### 返回值

无返回值。

### Loading.exists

检查 Loading 是否存在。

#### 参数

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| id   | Loading ID | `string` | -      |

#### 返回值

| 类型      | 说明             |
| --------- | ---------------- |
| `boolean` | 是否存在 Loading |

## Loading.SpinFade

旋转淡入淡出加载动画组件。

### 何时使用

- 需要显示旋转淡入淡出加载动画时

### 代码演示

<code src="./demos/Loading/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

## Loading.Ouroboros

衔尾蛇加载动画组件。

### 何时使用

- 需要显示衔尾蛇加载动画时

### 代码演示

<code src="./demos/Loading/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

## Loading.BallWave

球波加载动画组件。

### 何时使用

- 需要显示球波加载动画时

### 代码演示

<code src="./demos/Loading/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |
