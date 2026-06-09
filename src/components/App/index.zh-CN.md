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


## API

### 属性

| 属性          | 说明           | 类型                                                                               | 默认值 |
| ------------- | -------------- | ---------------------------------------------------------------------------------- | ------ |
| bridgeConfig  | 桥接配置       | `AppInitBridgeConfig \| null`                                                       | `null` |
| debugElement  | 调试触发元素   | `HTMLElement \| null`                                                               | `null` |
| preload       | 预加载函数     | `(() => Promise<{ status: string; message?: string }>) \| null`                    | `null` |
| mapConfig     | 地图配置       | `{ type: 'bmap' \| 'amap' \| 'google'; key: string } \| null`                       | `null` |
| language      | 语言配置       | `string \| null`                                                                    | `null` |
| themeConfig   | 主题配置       | `{ fontSize: 'm' \| 'l' \| 'xl' } \| null`                                         | `null` |
| children      | 应用内容       | `ReactNode`                                                                         | -      |
