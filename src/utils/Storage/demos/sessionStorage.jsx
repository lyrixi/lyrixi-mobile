import React, { useState } from 'react'
import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default () => {
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
    const success = Storage.removeSessionStorages((key) => key.startsWith('demo-session-'))
    setResult(`批量删除成功: ${success}`)
  }

  const handleClearSessionStorage = () => {
    const success = Storage.clearSessionStorage()
    setResult(`清空成功: ${success}`)
  }

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>SessionStorage 示例</Divider>

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
