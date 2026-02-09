# lyrixi-mobile — Guide for AI Code Assistants

This file helps AI (Cursor, Copilot, etc.) generate correct code when users use **lyrixi-mobile**. Please follow these rules when suggesting code.

## Package overview

- **lyrixi-mobile** is a React 19 mobile UI library: components + utils.
- **Docs (full API & demos):** https://lyrixi.github.io/lyrixi-mobile  
  When unsure about a component's props or subcomponents, prefer checking the online docs.

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

- **Layout:** Page, Card, Flex, Row, Modal, ActionSheet, Float, SafeArea
- **Nav:** NavBar, TabBar, IndexBar, Steps, FooterBar
- **Form:** Form, Input (Text, Number, Password, Search, etc.), Button, Checkbox, Switch, Picker, Select, Cascader, DatePicker, Selector, Transfer, Signature
- **Display:** Typography, Icon, Badge, Divider, Result, Empty, Skeleton, Loading, Progress, Toast, Message, Tooltip, NoticeBar, Accordion, List, PaginationList
- **Data:** Calendar, Table, Timeline
- **Other:** App, Combo, Chat, Attach, AttachUploader, Media, MediaUploader, Location, Map, Keyboard, IFrame, VideoPlayer, QRCode, Share, ToolBar

Subcomponents are used as `Component.Sub` (e.g. `Input.Text`, `DatePicker.Combo`, `Page.Main`). Check docs when unsure.

## Utils (use these instead of ad-hoc helpers)

- **DOMUtil** — classNames, preventDefault, getEventPosition
- **DateUtil** — format, add, compare, diff
- **MathUtil** — variableSize
- **ArrayUtil** — deepTree, flattenTree, searchDeepTree
- **ObjectUtil** — isEmpty, randomUUID
- **Storage** — getItem, setItem, removeItem, useCacheState
- **Request** — get, post, formatResponse, formatError
- **LocaleUtil**, **Logger**, **Device**, **Clipboard**, **AssetUtil**, **EventUtil**, **GeoUtil**, **HistoryUtil**, **Debugger**, **FullScreen**, **Bridge**

Import path pattern: `lyrixi-mobile/utils/UtilName`.

## Do not

- Create new React components for UI that the library already provides (use the list above).
- Use other UI libraries (antd, MUI, etc.) when the user chose lyrixi-mobile.
- Prefer subpath imports (`lyrixi-mobile/components/X`, `lyrixi-mobile/utils/X`); barrel `from 'lyrixi-mobile'` is also valid.
- Implement class names / date formatting / storage by hand when DOMUtil / DateUtil / Storage exist.

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
