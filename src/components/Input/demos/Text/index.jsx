import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Page, Divider, Input, Card, Button } from 'lyrixi-mobile'

export default () => {
  const inputTextRef = useRef(null)
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')

  useEffect(() => {
    console.log('Input.Text ref:', inputTextRef.current)
  }, [])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>基础用法</Divider>
          <Input.Text
            ref={inputTextRef}
            placeholder="请输入文本"
            value={value}
            onChange={(val) => {
              console.log('得到的值:', val)
              setValue(val)
            }}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>带清除按钮</Divider>
          <Input.Text placeholder="带清除按钮" value={value2} allowClear onChange={setValue2} />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value2 || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>格式化显示</Divider>
          <Input.Text
            placeholder="格式化显示"
            value={value3}
            formatter={(currentValue) => {
              return currentValue ? '$' + currentValue : ''
            }}
            onChange={setValue3}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value3 || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>最大长度限制</Divider>
          <Input.Text
            placeholder="最多输入10个字符"
            value={value4}
            maxLength={10}
            onChange={setValue4}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value4 || '空'} ({value4.length}/10)
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>禁用状态</Divider>
          <Input.Text
            placeholder="禁用状态"
            value="这是禁用状态的文本"
            disabled={true}
            onChange={setValue5}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>只读状态</Divider>
          <Input.Text
            placeholder="只读状态"
            value="这是只读状态的文本"
            readOnly={true}
            onChange={setValue5}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>带左右图标</Divider>
          <Input.Text
            placeholder="带左右图标"
            value={value5}
            leftIconNode={<span style={{ color: '#999' }}>🔍</span>}
            rightIconNode={({ value }) => {
              return value ? (
                <Input.IconClear onClick={() => setValue5('')} />
              ) : (
                <Input.IconRightArrow />
              )
            }}
            onChange={setValue5}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value5 || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>自动去除空格</Divider>
          <Input.Text
            placeholder="自动去除首尾空格"
            value={value}
            trim={true}
            onChange={setValue}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: "{value || '空'}"
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>操作按钮</Divider>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button onClick={() => inputTextRef.current?.focus()}>聚焦输入框</Button>
            <Button onClick={() => inputTextRef.current?.blur()}>失焦输入框</Button>
            <Button onClick={() => setValue('')}>清空所有值</Button>
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>功能说明</Divider>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
            <p>• 支持文本输入和编辑</p>
            <p>• 支持placeholder提示</p>
            <p>• 支持清除按钮</p>
            <p>• 支持格式化显示</p>
            <p>• 支持最大长度限制</p>
            <p>• 支持左右图标</p>
            <p>• 支持自动去除首尾空格</p>
            <p>• 支持disabled和readOnly状态</p>
            <p>• 支持ref操作（focus、blur等）</p>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
