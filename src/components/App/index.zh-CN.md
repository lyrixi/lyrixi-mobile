---
group:
  title: 通用
  order: 1
order: 1
title: App
toc: content
---

# App

应用组件，用于应用初始化和配置。

## 何时使用

- 需要应用初始化时
- 需要配置全局设置时
- 需要启用日志、调试等功能时

## 代码演示

<code src="./demos/App.jsx"></code>

## API

### 属性

| 属性          | 说明       | 类型                                                           | 默认值 |
| ------------- | ---------- | -------------------------------------------------------------- | ------ |
| enableLogger  | 启用日志   | `boolean`                                                      | `true` |
| bridgeConfig  | 桥接配置   | `object`                                                       | `null` |
| backdoor      | 后门元素   | `HTMLElement`                                                  | `null` |
| preload       | 预加载函数 | `() => Promise<boolean \| string>`                             | `null` |
| loadingRender | 加载中渲染 | `() => ReactNode`                                              | -      |
| map           | 地图配置   | `{onSuccess: function, onError: function, [key: string]: any}` | `{}`   |
| children      | 应用内容   | `ReactNode`                                                    | -      |

### Ref

无 Ref 方法。
