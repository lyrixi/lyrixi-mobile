# Icon SVG 迁移说明

> **Icon 仅支持 SVG**：须传入 `svg`（SVGR 组件）。iconfont / `children` 已移除。

## 新用法

```tsx
import { Icon, Icons } from 'lyrixi-mobile'

<Icon svg={Icons.Close} size="m" color="primary" onClick={handleClick} />
```

组件库内部在 `// 内库使用-start` 中 `import Icons from '../../icons'`，使用 `Icons.Close` 等。

图标源文件：`src/icons/*.svg`，由 `src/icons/index.ts` 仅 `export default`；主包 `export { default as Icons } from './icons'`。按 PascalCase 使用，如 `Icons.Close`、`Icons.Search`。

## 传入 `svg` 后不再生效的用法

| 属性 / 用法 | 说明 |
|-------------|------|
| **children** | 不会渲染；图标内容仅来自 `svg` |
| **className 选图标** | `lyrixi-iconfont-xxx` 等类名**不会**再显示字形，仅作布局/状态类 |
| **size 的 fontSize** | 只设置容器 **width / height**，不再设置 `fontSize` / `lineHeight` |
| **color** | 仅当 SVG 路径使用 `currentColor`（或 `fill="currentColor"`）时，继承 `color` 有效 |

## 仍支持的属性（svg 模式）

| 属性 | 说明 |
|------|------|
| disabled | 禁用样式与事件 |
| color | 主题色 token 或自定义颜色 |
| backgroundColor | 容器背景 |
| size | xxs ~ xxxl 或自定义尺寸 |
| radius | 圆角 |
| style / className | 自定义（className 不用于选字形） |
| onClick / onTouchStart | 事件 |
| ref | 指向容器 `span.lyrixi-icon` |

## Message.open 图标

`icon`、`title`、`content` 均支持 `ReactNode`（由 ReactDOM 渲染）：

```tsx
import { Message, Icon, Icons } from 'lyrixi-mobile'

Message.open({
  icon: <Icon svg={Icons.Config} size="80" color="primary" />,
  title: 'Title',
  content: <div>Content</div>
})
```

全局同时仅存在一个 `Message.open` 实例；`Message.close()` 会关闭它。

## 迁移完成（阶段二）

- 全库组件与 demo 已改用 `<Icon svg={Icons.*} />`
- 已移除 `assets/global/icon.less` 及全局 `@import`
