import React, { useState } from 'react'
import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default () => {
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
    const success = Storage.removeLocalStorages((key) => key.startsWith('demo-'))
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
              <Input.Text
                placeholder="请输入键名"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="value" label="值">
              <Input.Text
                placeholder="请输入值"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
