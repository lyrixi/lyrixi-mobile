# Lyrixi AI Guidelines

## 强约束

- 优先使用 `lyrixi-mobile` 已有组件与工具，不要重复造轮子。
- 优先使用 barrel import：
  - `import { Button, Page } from 'lyrixi-mobile'`
  - `import { DOMUtil, DateUtil } from 'lyrixi-mobile'`
- 只有在用户明确要求，或当前文件已经统一使用子路径导入时，才使用：
  - `lyrixi-mobile/components/X`
  - `lyrixi-mobile/utils/X`
- 在用户明确要求使用 `lyrixi-mobile` 时，不要引入其它 UI 库。
- 页面必须以 `<Page>` 为壳，根据场景使用：
  - `<Page.Header>`
  - `<Page.Main>`
  - `<Page.Footer>`

## 组件选择原则

- 布局：`Page`、`Card`、`Flex`、`Row`、`SafeArea`
- 导航：`NavBar`、`TabBar`、`FooterBar`、`ToolBar`
- 表单：`Form`、`Input.*`、`Select`、`DatePicker`、`Checkbox`、`Switch`
- 展示：`List`、`ListPagination`、`Result`、`Skeleton`、`Loading`
- 反馈：`Modal`、`ActionSheet`、`Toast`、`Message`

## 工具选择原则

- className 合并：`DOMUtil.classNames`
- 日期处理：`DateUtil`
- 存储：`Storage`
- 网络请求：`Request`
- 国际化：`LocaleUtil.locale`

## 导入规范

推荐：

```jsx
import { Page, Button, DOMUtil } from 'lyrixi-mobile'
```

也允许：

```jsx
import Page from 'lyrixi-mobile/components/Page'
import Button from 'lyrixi-mobile/components/Button'
import DOMUtil from 'lyrixi-mobile/utils/DOMUtil'
```

## 值结构约定

- 单选值通常为：`{ id, name }`
- 多选值通常为：`Array<{ id, name }>`
- 列表数据通常为：`[{ id, name, ... }]`
- 通过 `onChange` / `onSelect` 更新值

## 页面模板约定

- 列表页：`Page.Header` 放搜索/筛选，`Page.Main` 放 `ListPagination`
- 详情页：`Page.Main` 放 `Card/Form` 或 `Result`，`Page.Footer` 放操作
- 编辑页：`Page.Main` 放 `Form`，`Page.Footer` 放保存/取消
