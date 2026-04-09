# 编辑页示例

## 模板类型

编辑页模板，适合新增、编辑、表单校验与提交类页面。

## 适用场景

- 新增页
- 编辑页
- 带表单校验与提交的页面

## 推荐业务目录结构

```text
EditPage/
├── index.jsx
├── api/
│   ├── index.js
│   ├── cacheConfig.js
│   ├── queryData/
│   │   └── index.js
│   ├── validateData/
│   │   ├── index.js
│   │   └── scrollToErrorElement.js
│   └── saveData/
│       ├── index.js
│       └── serverData.js
└── Footer/
    └── index.jsx
```

## 库内参考实现

仅用于帮助 AI 理解该模板来源，不代表业务项目必须使用相同目录：

- `lyrixi-mobile/src/examples/Edit/demos/Cache`
- `lyrixi-mobile/src/examples/Edit/demos/Common`

其中目录结构优先参考 `Cache`，字段组织与表单写法可参考 `Common`。

## 结构职责

- `index.jsx`
  - 页面入口。
  - 负责 `Form.useForm()`、初始化加载、提交保存、错误结果展示。
- `api/queryData`
  - 返回初始化数据，通常形如 `{ baseData, formData }`。
- `api/validateData`
  - 校验表单并返回可提交数据；校验失败时直接中断。
- `api/saveData`
  - 统一提交逻辑。
- `api/cacheConfig`
  - 表单缓存与滚动位置缓存配置。
- `Footer/index.jsx`
  - 保存/取消按钮区。

## 入口页规范写法

```jsx
// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import {
  Storage,
  LocaleUtil,
  Toast,
  Page,
  Result,
  Form,
  Input,
  Select,
  Picker,
  Switch,
  Checkbox,
  Selector,
  DatePicker,
  Cascader,
  Location,
  Signature
} from 'lyrixi-mobile'

// 内部组件导入
import { cacheConfig, queryData, validateData, saveData } from './api'
import Footer from './Footer'

const locale = LocaleUtil.locale

const Edit = () => {
  const [form] = Form.useForm()
  const tokenRef = useRef('' + Date.now())
  const [result, setResult] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const data = await queryData()
    setResult(data)
    if (data?.formData) {
      form.setFieldsValue(data.formData)
    }
  }

  async function handleSave() {
    const data = await validateData({ form })
    if (!data) return

    const result = await saveData({
      baseData: result?.data?.baseData,
      data,
      token: tokenRef.current
    })

    if (result.code === '1') {
      Toast.show({ content: locale('提交成功!') })
    } else if (result.code === '2') {
      Toast.show({ content: result.message || locale('请勿重复提交!') })
    } else {
      tokenRef.current = '' + Date.now()
      Toast.show({ content: result.message || locale('提交失败!') })
    }
  }

  return (
    <Page>
      <Page.Main>
        <Form form={form} style={{ marginLeft: '12px' }}>
          <Form.Item
            name="input"
            label={locale('Input')}
            rules={[
              {
                required: true,
                message: locale('Input cannot be empty')
              }
            ]}
          >
            <Input.Text placeholder={locale('Please input')} maxLength={50} />
          </Form.Item>
          <Form.Item name="select" label={locale('Select')}>
            <Select.Combo
              placeholder={locale('Please select')}
              list={[
                { id: '1', name: 'Option1' },
                { id: '2', name: 'Option2' }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item name="picker" label={locale('Picker')}>
            <Picker.Combo
              placeholder={locale('Please select')}
              list={[
                { id: '1', name: 'Option1' },
                { id: '2', name: 'Option2' }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item name="switch" valuePropName="checked" label={locale('Switch')}>
            <Switch />
          </Form.Item>
          <Form.Item name="date" label={locale('Date')}>
            <DatePicker.Combo type="date" placeholder={locale('Please select')} allowClear />
          </Form.Item>
        </Form>
      </Page.Main>

      <Footer onOk={handleSave} />

      {result?.status && <Result status={result.status} title={result.message} />}
    </Page>
  )
}
```

## api/index.js 规范写法

```js
import cacheConfig from './cacheConfig'
import queryData from './queryData'
import validateData from './validateData'
import saveData from './saveData'

export { cacheConfig, queryData, validateData, saveData }
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

## 强约束

- 编辑页优先使用 `Form.useForm()`。
- 初始化接口优先返回 `{ baseData, formData }`。
- 提交前先走 `validateData({ form })`。
- 保存接口优先走 `saveData({ baseData, data, token })`。
- 防重复提交优先使用 `tokenRef`。
- 页面底部操作区拆到 `Footer`。
