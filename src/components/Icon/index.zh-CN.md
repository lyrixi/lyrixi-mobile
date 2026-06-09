---
group:
  title: 通用
  order: 1
order: 1
title: Icon
toc: content
---

# Icon

图标组件，用于显示图标。

## 何时使用

- 需要显示图标时
- 需要自定义图标样式时
- 需要在按钮、输入框等组件中使用图标时

## 代码演示

<code src="./demos/Icon.tsx"></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| svg | SVG 图标（SVGR 组件） | `ComponentType<SVGProps<SVGSVGElement>>` | - |
| disabled | 是否禁用 | `boolean` | - |
| color | 颜色；SVG 需 currentColor | `string` | - |
| backgroundColor | 背景颜色 | `string` | - |
| size | 尺寸；SVG 模式为容器宽高 | `IconSize \| string \| number` | `'m'` |
| radius | 圆角 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| className | 附加类名（不用于选字形） | `string` | - |
| onClick | 点击 | `MouseEventHandler<HTMLElement>` | - |
| onTouchStart | 触摸开始 | `TouchEventHandler<HTMLElement>` | - |

> `svg` 为必填。详见 [ICON-SVG-MIGRATION.zh-CN.md](./ICON-SVG-MIGRATION.zh-CN.md)。

### Ref

| 属性 | 说明 | 类型 |
|------|------|------|
| element | 根元素 | `HTMLElement \| null`（svg 模式为 span，兼容模式为 i） |
| getElement | 获取根元素 | () => `HTMLElement \| null` |

### 图标资源

从主包 `Icons` 取用：

通过 `Icon` 传入 `Icons` 上的 SVGR 组件（推荐，可设 size、color 等）：

```tsx
import { Icon, Icons } from 'lyrixi-mobile'

<Icon svg={Icons.Close} />
```

源文件位于 `src/icons/`，由 `src/icons/index.ts` 统一导出。

