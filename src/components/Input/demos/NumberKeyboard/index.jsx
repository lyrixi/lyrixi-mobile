import React, { useEffect, useState, useRef } from 'react'
import { Page, MathUtil, Input, Card, Divider } from 'lyrixi-mobile'

export default () => {
  const numberKeyboardRef = useRef(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('NumberKeyboard ref:', numberKeyboardRef.current)
  }, [])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>小数和负数</Divider>
          <Input.NumberKeyboard
            ref={numberKeyboardRef}
            placeholder="小数和负数"
            value={value}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>小数(无负数)</Divider>
          <Input.NumberKeyboard
            placeholder="小数(无负数)"
            value={value}
            min={0}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>负数(无小数)</Divider>
          <Input.NumberKeyboard
            placeholder="负数(无小数)"
            value={value}
            precision={0}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>无负数, 无小数</Divider>
          <Input.NumberKeyboard
            placeholder="无负数, 无小数"
            value={value}
            precision={0}
            min={0}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>格式化显示</Divider>
          <Input.NumberKeyboard
            placeholder="千分位格式化"
            value={value}
            formatter={(currentValue) => {
              return currentValue ? MathUtil.thousands(currentValue) : ''
            }}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>禁用状态</Divider>
          <Input.NumberKeyboard
            placeholder="禁用状态"
            value="123"
            disabled={true}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>只读状态</Divider>
          <Input.NumberKeyboard
            placeholder="只读状态"
            value="456"
            readOnly={true}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
