# lyrixi-mobile — Guide for AI Code Assistants

This file helps AI (Cursor, Copilot, etc.) generate correct code when users use **lyrixi-mobile**. Please follow these rules when suggesting code.

## Package overview

- **lyrixi-mobile** is a React 19 mobile UI library: components + utils.
- **Docs (full API & demos):** https://lyrixi.github.io/lyrixi-mobile  
  When unsure about a component's props or subcomponents, prefer checking the online docs.
- **Generating a full page (列表/详情/编辑)?** Prefer the library’s **Page templates (典型页面)** structure and code style; see that section below and the reference repo: https://github.com/lyrixi/lyrixi-mobile/tree/main/src/pages

## Import rules (required)

### 1. Import style

Both styles work; the library **recommends subpath imports** for consistency and explicit dependencies.

```js
// ✅ Recommended — subpath (component / util)
import Button from 'lyrixi-mobile/components/Button'
import Page from 'lyrixi-mobile/components/Page'
import Input from 'lyrixi-mobile/components/Input'
import Form from 'lyrixi-mobile/components/Form'
import Modal from 'lyrixi-mobile/components/Modal'
import DatePicker from 'lyrixi-mobile/components/DatePicker'
import Card from 'lyrixi-mobile/components/Card'
import Flex from 'lyrixi-mobile/components/Flex'

import DOMUtil from 'lyrixi-mobile/utils/DOMUtil'
import DateUtil from 'lyrixi-mobile/utils/DateUtil'
import Storage from 'lyrixi-mobile/utils/Storage'
```

```js
// ✅ Also valid — barrel import (tree-shaking works)
import { Button, Page, DOMUtil, DateUtil } from 'lyrixi-mobile'
```

### 2. Styles — user must import once (e.g. in app entry)

```js
// Less
import 'lyrixi-mobile/assets/index.less'

// Or CSS
import 'lyrixi-mobile/assets/index.css'
```

## Components (use these, do not invent new UI primitives)

Source: `src/components/` (one folder = one export, e.g. `lyrixi-mobile/components/Button`).

- **Layout:** Page, Card, Flex, Row, Modal, ActionSheet, Float, SafeArea
- **Nav:** NavBar, TabBar, IndexBar, Steps, FooterBar
- **Form:** Form, Input (Text, Number, Password, Search, etc.), Button, Checkbox, Switch, Picker, Select, Cascader, DatePicker, Selector, Transfer, Signature
- **Display:** Text, Icon, Badge, Divider, Result, Skeleton, Loading, Progress, Toast, Message, Tooltip, NoticeBar, Accordion, List, ListAsync, ListPagination, Stamp
- **Data:** Calendar
- **Other:** App, Combo, Chat, Attach, AttachUploader, Media, MediaUploader, Location, Map, Keyboard, IFrame, VideoPlayer, QRCode, ToolBar, Amount

Subcomponents are used as `Component.Sub` (e.g. `Input.Text`, `DatePicker.Combo`, `Page.Main`). Check docs when unsure.

## Utils (use these instead of ad-hoc helpers)

Source: `src/utils/` (one folder = one export, e.g. `lyrixi-mobile/utils/DOMUtil`).

- **DOMUtil** — classNames, preventDefault, getEventPosition, variables
- **DateUtil** — format, add, compare, diff, startOrEnd
- **MathUtil** — variableSize
- **ArrayUtil** — deepTree, flattenTree, searchDeepTree, getDeepTreeNode, setDeepTreeNode, etc.
- **ObjectUtil** — isEmpty, randomUUID
- **Storage** — getItem, setItem, removeItem, useCacheState
- **Request** — get, post, formatResponse, formatError
- **AssetUtil** — loadImage, loadJs, getFileExtension
- **LocaleUtil**, **Logger**, **Device**, **Clipboard**, **EventUtil**, **GeoUtil**, **HistoryUtil**, **Debugger**, **FullScreen**, **Bridge**, **Theme**

Import path pattern: `lyrixi-mobile/utils/UtilName`.

## Code conventions

- **Visible text:** Wrap user-facing strings with `LocaleUtil.locale('key')` or the project’s locale helper (e.g. `locale('Example')`). Do not pass a second argument as key; keys are managed by the project’s translate step.
- **Component files:** Use `.jsx` for React components.
- **Component props:** Prefer destructured props (e.g. `function Foo({ style, className })`) instead of `...props`. When adding or suggesting props, follow the library’s grouping:
  - **Value & display:** `value`, `placeholder`, `list`, etc.
  - **Status:** `disabled`, `readOnly`, `open`, `visible`, `maskClosable`, `multiple`, `allowClear`, `checkable`, `editable`, etc.
  - **Style:** `style`, `className`, `modalStyle`, `modalClassName`, `maskStyle`, `maskClassName`, etc.
  - **Elements:** names ending in `Render` or `Node` (e.g. `itemRender`, `comboRender`, `leftIconNode`).
  - **Validate:** `precision`, `trim`, `max`, `min`, `maxLength`, `maxSize`.
  - **Events:** `onChange`, `onSelect`, `onClose`, `onOpen`, `onError`, `onSuccess`, `onCancel`, `onOk`, etc.
- **Controlled value shape:** Single value often `{ id, name }`; multiple value is array of same shape. List data: `[{ id, name, ... }]`. Use `onChange` / `onSelect` for updates.

## Global styles (prefer over custom CSS)

Prefer the library’s utility classes and variables so UI stays consistent. Use **DOMUtil.classNames** to combine them.

- **Colors:** `.lyrixi-color-primary`, `.lyrixi-color-default`, `.lyrixi-color-auxiliary`, `.lyrixi-color-placeholder`, `.lyrixi-color-danger`, `.lyrixi-bg-white`, `.lyrixi-bg-primary`, etc.
- **Font:** `.lyrixi-font-size-m`, `.lyrixi-font-size-s`, `.lyrixi-font-weight-bold`, `.lyrixi-ellipsis`, `.lyrixi-nowrap`, `.lyrixi-nowrap2`.
- **Layout:** `.lyrixi-flex`, `.lyrixi-flex-1`, `.lyrixi-flex-vertical`, `.lyrixi-flex-center`, `.lyrixi-flex-between`, `.lyrixi-flex-middle`, `.lyrixi-flex-middlecenter`.
- **Spacing:** `.lyrixi-padding-horizontal-m`, `.lyrixi-padding-vertical-s`, `.lyrixi-margin-horizontal-m`, etc. (sizes: xxxs, xxs, xs, s, m, l, xl, xxl).
- **Radius:** `.lyrixi-radius-m`, `.lyrixi-radius-s`, etc.
- **Border:** `.lyrixi-border`, `.lyrixi-border-t`, `.lyrixi-border-b`, `.lyrixi-basketline`.
- **Other:** `.lyrixi-hide`, `.lyrixi-overflow-hidden`, `.lyrixi-width-full`, `.lyrixi-clearfix`.

Full list: see docs “全局样式” / global-styles.

## Page templates (典型页面) — use when user asks to generate a page

When the user says **「基于 lyrixi-mobile 生成一个页面」** or **「用 lyrixi-mobile 写一个列表页/详情页/编辑页」**, **prioritize** the library’s reference page structure and code style below. The library provides standard templates for **列表页 (List)**、**详情页 (Detail)**、**新增/编辑页 (Edit)**; match their folder layout, API pattern, and style.

**Reference code (full source):**  
https://github.com/lyrixi/lyrixi-mobile/tree/main/src/pages  

**Doc (模板):**  
https://lyrixi.github.io/lyrixi-mobile (see 模板 → 列表/详情/编辑)

### 1. List page (列表页)

- **Folder:** `Header/` (search/filter), `Main/` (list), optional `Footer/`; entry `index.jsx` composes them. Optional `api/` (queryData), `utils/`.
- **Layout:** `<Page>` → `<Page.Header>` (e.g. ToolBar.Search + Filter) + `<Page.Main>` (e.g. ListPagination). State in `index.jsx` (e.g. `queryParams`), pass `queryParams` / `onSearch` to Header and Main.
- **Import order:** 第三方库 → 项目内部 → 内部组件 → 样式/资源. Use `LocaleUtil.locale` for all visible text.
- **Reference:** `src/pages/List/demos/Common` (Header + Main + formatPayload/formatResult/formatViewItem in Main).

### 2. Detail page (详情页)

- **Folder:** `api/` (e.g. queryData, approveData), `Footer/` (e.g. approve button); entry `index.jsx` loads data and renders Form/Card + Footer.
- **Layout:** `<Page>` → `<Page.Main>` (Card + Form read-only or Text) + `<Page.Footer>`. Use `const [result, setResult] = useState(null)`; after `queryData()` set `setResult({ data })` or `setResult({ status, message })` for error; render `<Result status={result.status} title={result.message} />` when error/empty.
- **Reference:** `src/pages/Detail/demos/Form` (queryData, approveData, Footer, Result).

### 3. Edit / Add page (新增编辑页)

- **Folder:** `api/` (queryData, validateData, saveData, optional cacheConfig), `Footer/` (save/cancel); entry `index.jsx` with Form.
- **Layout:** `<Page>` → `<Page.Main>` (Form with Form.Item + various Input/Select/DatePicker etc.) + `<Page.Footer>` (FooterBar with onOk). Use `Form.useForm()`, `validateData({ form })`, `saveData({ baseData, data, token })`; handle code `'1'` success, `'2'` duplicate, else error; show Toast and optional Result. Use `tokenRef` to prevent duplicate submit.
- **API pattern:** `api/queryData` (return `{ baseData, formData }`), `api/validateData` (return validated data or false), `api/saveData` (return `{ code, message }`). Optional `api/localData`, `api/serverData` for transform.
- **Reference:** `src/pages/Edit/demos/Cache` (queryData, validateData, saveData, cacheConfig, Footer, Form, Result).

### Shared conventions for all page types

- **Import order:** 第三方库 (React, lyrixi-mobile) → 内部组件 (./Header, ./Main, ./api) → 样式/资源. Use `const locale = LocaleUtil.locale` and `locale('文案')` for every user-facing string.
- **Page shell:** Always wrap in `<Page>`; use `<Page.Header>`, `<Page.Main>`, `<Page.Footer>` as needed. Use library components only (no ad-hoc layout components).
- **Data/error:** Use `result` state with `{ data }` or `{ status, message }`; render full-screen `<Result status={result.status} title={result.message} />` when status is error/empty/500.
- **High cohesion:** Keep each block (Header, Main, Footer) in its own folder; parent `index.jsx` holds state and passes `onXX` handlers.

**Suggested user prompt when asking AI to generate a page:**  
「基于 lyrixi-mobile 生成一个 [列表页/详情页/编辑页]，结构和代码风格参考 lyrixi-mobile 的典型页面（见 node_modules/lyrixi-mobile/AI.md 的 Page templates 小节，或 https://github.com/lyrixi/lyrixi-mobile/tree/main/src/pages）。」

## Do not

- Create new React components for UI that the library already provides (use the list above).
- Use other UI libraries (antd, MUI, etc.) when the user chose lyrixi-mobile.
- Prefer subpath imports (`lyrixi-mobile/components/X`, `lyrixi-mobile/utils/X`); barrel `from 'lyrixi-mobile'` is also valid.
- Implement class names / date formatting / storage by hand when DOMUtil / DateUtil / Storage exist.
- Use `...props` in component signatures; destructure named props instead.
- Use inline styles or custom CSS for spacing/color/layout when a `.lyrixi-*` class exists.

## Minimal example

```jsx
import 'lyrixi-mobile/assets/index.less'
import Page from 'lyrixi-mobile/components/Page'
import Button from 'lyrixi-mobile/components/Button'

export default function App() {
  return (
    <Page>
      <Page.Main>
        <Button color="primary">OK</Button>
      </Page.Main>
    </Page>
  )
}
```

For full API and demos: https://lyrixi.github.io/lyrixi-mobile
