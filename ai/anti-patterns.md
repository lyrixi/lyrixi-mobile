# Anti Patterns (STRICTLY FORBIDDEN)

## 1. 不要绕开库内已有组件

- 不要为库里已经提供的 UI 场景再新建一套 React UI 组件。
- 不要在用户明确指定 `lyrixi-mobile` 时引入其它 UI 库，例如 `antd`、`MUI` 等。
- 不要用原生标签或零散 DOM 组合去替代已有组件能力，例如：
  - 原生 `<button>` 替代 `Button`
  - 手写搜索条替代 `ToolBar.Search` / `Input.Search`
  - 手写弹层替代 `Modal` / `ActionSheet` / `ToolBar.Dropdown`
  - 手写表单容器替代 `Form` + `Form.Item`

## 2. 不要绕开库内已有 utils

- 不要手写日期格式化、日期计算；优先使用 `DateUtil`。
- 不要分散地直接实现存储逻辑；优先使用 `Storage`。
- 不要重新造请求封装；优先使用 `Request`。

## 3. 不要违反导入约定

- 不要默认优先使用子路径导入。
- 推荐优先使用 barrel import：
  - `import { Button, Page } from 'lyrixi-mobile'`
  - `import { DOMUtil, DateUtil } from 'lyrixi-mobile'`
- 只有在用户明确要求，或当前文件已经统一使用子路径导入时，才使用：
  - `lyrixi-mobile/components/X`
  - `lyrixi-mobile/utils/X`

## 4. 不要违反代码风格约定

- 不要在组件签名中使用 `...props`；优先显式解构命名 props。
- 不要随意发明不符合库约定的 props 分组方式；应按以下语义组织：
  - Value & display
  - Status
  - Style
  - Elements
  - Validate
  - Events
- 不要忽略受控值结构约定：
  - 单选值通常为 `{ id, name }`
  - 多选值通常为 `Array<{ id, name }>`
  - 列表数据通常为 `[{ id, name, ... }]`

## 5. 不要忽略页面模板

- 当用户要求生成列表页、详情页、新增编辑页时，不要脱离 `ai/examples` 中的页面示例自行发挥结构。
- 不要省略 `<Page>` 页面壳。
- 不要把 Header / Main / Footer 全部塞进一个文件里胡乱实现；优先保持高内聚拆分。

## 6. 不要忽略国际化与文案规范

- 不要直接裸写面向用户的可见文案；优先使用 `LocaleUtil.locale(...)` 或项目 locale helper。
- 不要手动传第二个 locale key 参数作为固定规范，除非项目现有代码明确已经这样写。

## 反例

```jsx
import { Button } from 'antd'

export default function Demo(props) {
  return (
    <div style={{ padding: 12 }}>
      <button onClick={props.onClick}>提交</button>
    </div>
  )
}
```

上面的错误包括：

- 引入了其它 UI 库
- 用了原生 `<button>`
- 用了 `...props`
- 没有使用库内页面/组件结构

## 正例

```jsx
import { Page, Button, LocaleUtil } from 'lyrixi-mobile'

export default function Demo({ onClick }) {
  return (
    <Page>
      <Page.Main className="lyrixi-padding-horizontal-m lyrixi-padding-vertical-m">
        <Button color="primary" onClick={onClick}>
          {LocaleUtil.locale('提交')}
        </Button>
      </Page.Main>
    </Page>
  )
}
```
