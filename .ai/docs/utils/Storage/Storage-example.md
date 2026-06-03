# Storage Example

以下示例位于本目录 `demos/`（由 `src/utils/Storage/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Storage } from 'lyrixi-mobile'`

## demos/Storage.tsx

```tsx
import { useState } from 'react'

import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

function errMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

export default function StorageDemo() {
  const [key, setKey] = useState('demo-storage-key')
  const [value, setValue] = useState('demo-storage-value')
  const [result, setResult] = useState('')

  const handleConfig = () => {
    Storage.config({
      // types: ['localStorage']
      types: ['indexedDB', 'localStorage', 'webSQL']
    })
    setResult('配置成功: 使用 indexedDB, localStorage, webSQL')
  }

  const handleSetItem = async () => {
    try {
      await Storage.setItem(key, value)
      setResult('设置成功')
    } catch (error: unknown) {
      setResult(`设置失败: ${errMessage(error)}`)
    }
  }

  const handleGetItem = async () => {
    try {
      const data = await Storage.getItem(key)
      setResult(`获取结果: ${JSON.stringify(data)}`)
    } catch (error: unknown) {
      setResult(`获取失败: ${errMessage(error)}`)
    }
  }

  const handleGetKeys = async () => {
    try {
      const keys = await Storage.getKeys()
      setResult(`所有键: ${JSON.stringify(keys)}`)
    } catch (error: unknown) {
      setResult(`获取失败: ${errMessage(error)}`)
    }
  }

  const handleGetItems = async () => {
    try {
      const items = await Storage.getItems()
      setResult(`所有数据: ${JSON.stringify(items)}`)
    } catch (error: unknown) {
      setResult(`获取失败: ${errMessage(error)}`)
    }
  }

  const handleRemoveItem = async () => {
    try {
      await Storage.removeItem(key)
      setResult('删除成功')
    } catch (error: unknown) {
      setResult(`删除失败: ${errMessage(error)}`)
    }
  }

  const handleClear = async () => {
    try {
      await Storage.clear()
      setResult('清空成功')
    } catch (error: unknown) {
      setResult(`清空失败: ${errMessage(error)}`)
    }
  }

  return (
    <Page>
      <Page.Main>
        <Divider>Storage (LocalForage) 示例</Divider>

        <Card>
          <Divider>表单录入</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="键名">
              <Input.Text
                placeholder="请输入键名"
                value={key}
                onChange={(v) => setKey(v)}
              />
            </Form.Item>
            <Form.Item name="value" label="值">
              <Input.Text
                placeholder="请输入值"
                value={value}
                onChange={(v) => setValue(v)}
              />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>操作按钮</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleConfig}
            >
              配置驱动类型
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetItem}
            >
              设置数据
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetItem}
            >
              获取数据
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetKeys}
            >
              获取所有键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetItems}
            >
              获取所有数据
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveItem}
            >
              删除指定键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClear}
            >
// ... 其余见 demos/Storage.tsx 全文
```

## demos/useCacheState.tsx

```tsx
import { Storage, Page, Button } from 'lyrixi-mobile'

import type { StorageDemoCacheState } from './Storage.demos.types'

export default function UseCacheStateDemo() {
  const [data, setData] = Storage.useCacheState<StorageDemoCacheState>(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Page>
      <Page.Main>
        <h1>Cache State</h1>
        <p>{JSON.stringify(data)}</p>
        <Button
          className="lyrixi-flex lyrixi-primary"
          onClick={() => {
            setData({ name: 'morpheus' })
          }}
        >
          Set Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            setData(null)
          }}
        >
          Remove Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            alert(JSON.stringify(data))
          }}
        >
          Get Cache
        </Button>
      </Page.Main>
    </Page>
  )
}
```

## demos/localStorage.tsx

```tsx
import { useState } from 'react'

import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default function LocalStorageDemo() {
  const [key, setKey] = useState('demo-key')
  const [value, setValue] = useState('demo-value')
  const [result, setResult] = useState('')

  const handleSetLocalStorage = () => {
    const success = Storage.setLocalStorage(key, value)
    setResult(`设置成功: ${success}`)
  }

  const handleGetLocalStorage = () => {
    const data = Storage.getLocalStorage(key)
    setResult(`获取结果: ${JSON.stringify(data)}`)
  }

  const handleGetLocalStorageKeys = () => {
    const keys = Storage.getLocalStorageKeys()
    setResult(`所有键: ${JSON.stringify(keys)}`)
  }

  const handleGetLocalStorages = () => {
    const storages = Storage.getLocalStorages()
    setResult(`所有数据: ${JSON.stringify(storages)}`)
  }

  const handleRemoveLocalStorage = () => {
    const success = Storage.removeLocalStorage(key)
    setResult(`删除成功: ${success}`)
  }

  const handleRemoveLocalStorages = () => {
    const success = Storage.removeLocalStorages((k) => k !== null && k.startsWith('demo-'))
    setResult(`批量删除成功: ${success}`)
  }

  const handleClearLocalStorage = () => {
    const success = Storage.clearLocalStorage()
    setResult(`清空成功: ${success}`)
  }

  return (
    <Page>
      <Page.Main>
        <Divider>LocalStorage 示例</Divider>

        <Card>
          <Divider>表单录入</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="键名">
              <Input.Text placeholder="请输入键名" value={key} onChange={(v) => setKey(v)} />
            </Form.Item>
            <Form.Item name="value" label="值">
              <Input.Text placeholder="请输入值" value={value} onChange={(v) => setValue(v)} />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>操作按钮</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetLocalStorage}
            >
              设置 LocalStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorage}
            >
              获取 LocalStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorageKeys}
            >
              获取所有键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorages}
            >
              获取所有数据
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveLocalStorage}
            >
              删除指定键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveLocalStorages}
            >
              批量删除 (demo-*)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClearLocalStorage}
            >
              清空所有
            </Button>
          </div>
        </Card>

        {result && (
          <Card>
            <Divider>执行结果</Divider>
            <div
              style={{
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                wordBreak: 'break-all',
                margin: '0 12px'
              }}
            >
              <strong>结果:</strong> {result}
            </div>
          </Card>
        )}
      </Page.Main>
    </Page>
  )
}
```

## demos/sessionStorage.tsx

```tsx
import { useState } from 'react'

import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default function SessionStorageDemo() {
  const [key, setKey] = useState('demo-session-key')
  const [value, setValue] = useState('demo-session-value')
  const [result, setResult] = useState('')

  const handleSetSessionStorage = () => {
    const success = Storage.setSessionStorage(key, value)
    setResult(`设置成功: ${success}`)
  }

  const handleGetSessionStorage = () => {
    const data = Storage.getSessionStorage(key)
    setResult(`获取结果: ${JSON.stringify(data)}`)
  }

  const handleGetSessionStorageKeys = () => {
    const keys = Storage.getSessionStorageKeys()
    setResult(`所有键: ${JSON.stringify(keys)}`)
  }

  const handleGetSessionStorages = () => {
    const storages = Storage.getSessionStorages()
    setResult(`所有数据: ${JSON.stringify(storages)}`)
  }

  const handleRemoveSessionStorage = () => {
    const success = Storage.removeSessionStorage(key)
    setResult(`删除成功: ${success}`)
  }

  const handleRemoveSessionStorages = () => {
    const success = Storage.removeSessionStorages(
      (k) => k !== null && k.startsWith('demo-session-')
    )
    setResult(`批量删除成功: ${success}`)
  }

  const handleClearSessionStorage = () => {
    const success = Storage.clearSessionStorage()
    setResult(`清空成功: ${success}`)
  }

  return (
    <Page>
      <Page.Main>
        <Divider>SessionStorage 示例</Divider>

        <Card>
          <Divider>表单录入</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="键名">
              <Input.Text placeholder="请输入键名" value={key} onChange={(v) => setKey(v)} />
            </Form.Item>
            <Form.Item name="value" label="值">
              <Input.Text placeholder="请输入值" value={value} onChange={(v) => setValue(v)} />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>操作按钮</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetSessionStorage}
            >
              设置 SessionStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorage}
            >
              获取 SessionStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorageKeys}
            >
              获取所有键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorages}
            >
              获取所有数据
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveSessionStorage}
            >
              删除指定键
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveSessionStorages}
            >
              批量删除 (demo-session-*)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClearSessionStorage}
            >
              清空所有
            </Button>
          </div>
        </Card>

        {result && (
          <Card>
            <Divider>执行结果</Divider>
            <div
              style={{
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                wordBreak: 'break-all',
                margin: '0 12px'
              }}
            >
              <strong>结果:</strong> {result}
            </div>
          </Card>
        )}
      </Page.Main>
    </Page>
  )
}
```

## demos/Storage.demos.types.ts

```ts
export type StorageDemoCacheState = { name: string } | null
```
