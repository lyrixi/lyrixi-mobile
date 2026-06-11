import React, { useState } from 'react'
import { Page, Divider, Input } from 'lyrixi-mobile'

export default function InputAutoSizeDemo() {
  const [value, setValue] = useState('')
  const [sizeValue, setSizeValue] = useState('')
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <Input.AutoSize
          placeholder="AutoSize"
          style={{ maxHeight: '100px', backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />

        <Divider>Formatter</Divider>
        <Input.AutoSize
          placeholder="AutoSize"
          formatter={(newValue: string) => {
            return '$' + newValue
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />

        <Divider>尺寸 size</Divider>
        <Input.AutoSize
          size="xs"
          placeholder="size xs"
          value={sizeValue}
          allowClear
          onChange={setSizeValue}
          className="lyrixi-border"
        />
        <Input.AutoSize
          size="s"
          placeholder="size s"
          value={sizeValue}
          allowClear
          onChange={setSizeValue}
          style={{ marginTop: '12px' }}
          className="lyrixi-border"
        />
        <Input.AutoSize
          size="m"
          placeholder="size m"
          value={sizeValue}
          allowClear
          onChange={setSizeValue}
          style={{ marginTop: '12px' }}
          className="lyrixi-border"
        />
        <Input.AutoSize
          size="l"
          placeholder="size l"
          value={sizeValue}
          allowClear
          onChange={setSizeValue}
          style={{ marginTop: '12px' }}
          className="lyrixi-border"
        />
        <Input.AutoSize
          size="xl"
          placeholder="size xl"
          value={sizeValue}
          allowClear
          onChange={setSizeValue}
          style={{ marginTop: '12px' }}
          className="lyrixi-border"
        />
      </Page.Main>
    </Page>
  )
}
