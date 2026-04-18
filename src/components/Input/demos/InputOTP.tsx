import React, { useState, useRef } from 'react'
import { Page, Input, Card, Divider, FooterBar } from 'lyrixi-mobile'

export default () => {
  const inputRef = useRef(null)
  const [value, setValue] = useState(['1', '2', '3', '4', '5', '6'])

  const handleComplete = (completedValue) => {
    console.log('OTP输入完成:', completedValue)
  }

  return (
    <Page>
      <Page.Main>
        <Card style={{ marginTop: '20px' }}>
          <Divider>数值类型</Divider>
          <Input.OTP
            type="number"
            value={value}
            onChange={(val) => {
              console.log('数值类型得到的值:', val)
              setValue(val)
            }}
            onComplete={(val) => console.log('数值类型完成:', val)}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>4位数字</Divider>
          <Input.OTP
            maxLength={4}
            value={value}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
            onComplete={(val) => console.log('4位完成:', val)}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>8位数字</Divider>
          <Input.OTP
            maxLength={8}
            value={value}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
            onComplete={(val) => console.log('8位完成:', val)}
          />
        </Card>

        <Card>
          <Divider>文本类型</Divider>
          <Input.OTP
            ref={inputRef}
            type="text"
            value={value}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
            onComplete={handleComplete}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>禁用状态</Divider>
          <Input.OTP
            value={['1', '2', '3', '4', '5', '6']}
            disabled={true}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>只读状态</Divider>
          <Input.OTP
            value={['6', '5', '4', '3', '2', '1']}
            readOnly={true}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>
      </Page.Main>
      <Page.Footer>
        <FooterBar type="text">
          <FooterBar.Button onClick={() => inputRef.current?.focus()}>
            聚焦第一个输入框
          </FooterBar.Button>
          <FooterBar.Button onClick={() => inputRef.current?.blur()}>
            失焦所有输入框
          </FooterBar.Button>
        </FooterBar>
      </Page.Footer>
    </Page>
  )
}
