import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Form from 'lyrixi-mobile/components/Form'
import Input from 'lyrixi-mobile/components/Input'
import Button from 'lyrixi-mobile/components/Button'

export default function LoginExample() {
  return (
    <Page>
      <Page.Main>
        <Form>
          <Form.Item label="用户名" required>
            <Input.Text placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" required>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Button color="primary" block>
            登录
          </Button>
        </Form>
      </Page.Main>
    </Page>
  )
}
