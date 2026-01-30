---
group:
  title: 导航
  order: 6
order: 1
title: NavBar
toc: content
---

# NavBar

导航栏组件，用于显示页面导航。

## 何时使用

- 需要显示页面导航时
- 需要显示标题和操作按钮时
- 需要在页面顶部显示导航栏时

## 代码演示

<code src="./demos/NavBar.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 导航栏内容 | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## NavBar.Title

导航栏标题组件。

### 何时使用

- 需要在导航栏中显示标题时

### 代码演示

<code src="./demos/NavBarTitle.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 标题内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## NavBar.Button

导航栏按钮组件。

### 何时使用

- 需要在导航栏中显示按钮时

### 代码演示

<code src="./demos/NavBarButton.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                 | 默认值 |
| --------- | ---------- | -------------------- | ------ |
| style     | 自定义样式 | `object`             | -      |
| className | 自定义类名 | `string`             | -      |
| children  | 按钮内容   | `ReactNode`          | -      |
| onClick   | 点击事件   | `(e: Event) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
