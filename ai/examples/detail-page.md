# Detail Page Example

来源参考：`src/examples/Detail/demos/Form`

## 推荐目录结构

```text
src/examples/Detail/demos/Form/
├── index.jsx
├── api/
│   ├── index.js
│   ├── queryData/
│   │   └── index.js
│   └── approveData/
│       └── index.js
└── Footer/
    └── index.jsx
```

## 结构职责

- `index.jsx`
  - 页面入口。
  - 负责初始化数据、维护 `result` 状态、处理审批/确认操作。
- `api/queryData`
  - 加载详情数据。
- `api/approveData`
  - 提交审批/确认类动作。
- `Footer/index.jsx`
  - 底部固定操作区。
  - 一般使用 `Page.Footer` + `FooterBar`。

## 入口页规范写法

```jsx
// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import { LocaleUtil, Toast, Divider, Page, Result, Form, Card, Text } from 'lyrixi-mobile'

// 内部组件导入
import { queryData, approveData } from './api'
import Footer from './Footer'

const locale = LocaleUtil.locale

const FormDetail = () => {
  const tokenRef = useRef('' + Date.now())
  const [result, setResult] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const newResult = await queryData()
    setResult(newResult)
  }

  async function handleApprove() {
    const result = await approveData({ token: tokenRef.current })
    if (result.code === '1') {
      Toast.show({
        content: locale('审批通过!')
      })
    } else if (result.code === '2') {
      Toast.show({
        content: result.message || locale('请勿重复提交!')
      })
    } else {
      tokenRef.current = '' + Date.now()
      Toast.show({
        content: result.message || locale('审批失败!')
      })
    }
  }

  return (
    <Page>
      {result?.data && (
        <Page.Main>
          <Card>
            <Divider>Horizontal Layout</Divider>
            <Form style={{ marginLeft: '12px' }}>
              <Form.Item label={locale('Select')}>
                <Text>{Text.getDisplayValue(result?.data?.select)}</Text>
              </Form.Item>
            </Form>
          </Card>
        </Page.Main>
      )}

      <Footer onOk={handleApprove} />

      {result?.status && <Result status={result.status} title={result.message} />}
    </Page>
  )
}
```

## Footer 规范写法

```jsx
import React from 'react'
import { Page, FooterBar, LocaleUtil } from 'lyrixi-mobile'

const locale = LocaleUtil.locale

function Footer({ onOk, onCancel }) {
  return (
    <Page.Footer>
      <FooterBar>
        {onCancel && (
          <FooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {locale('Cancel')}
          </FooterBar.Button>
        )}
        {onOk && (
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {locale('Ok')}
          </FooterBar.Button>
        )}
      </FooterBar>
    </Page.Footer>
  )
}
```

## api/index.js 规范写法

```js
import queryData from './queryData'
import approveData from './approveData'

export { queryData, approveData }
```

## 强约束

- 详情页优先使用 `result` 状态管理“成功数据 / 错误态 / 空态”。
- 数据成功时渲染 `Page.Main`；错误或空态时渲染 `Result`。
- 底部审批、确认、提交操作放到独立 `Footer` 组件中。
- 防重复提交优先用 `tokenRef` 模式。
