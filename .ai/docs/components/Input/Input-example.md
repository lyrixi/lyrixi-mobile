# Input Example

以下示例位于本目录 `demos/`（由 `src/components/Input/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Input } from 'lyrixi-mobile'`

## demos/InputText.tsx

```tsx
import { useState, useRef, useEffect, type ComponentRef } from 'react'

import { Page, Divider, Input, Card, Button } from 'lyrixi-mobile'

export default function InputTextDemo() {
  const inputTextRef = useRef<ComponentRef<typeof Input.Text> | null>(null)
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [valueComposition, setValueComposition] = useState('')

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
            formatter={(currentValue: string) => {
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
            leftIconNode={<span style={{ color: '#999' }}>&lt;</span>}
            rightIconNode={<Input.IconRightArrow />}
            onChange={setValue5}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {value5 || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>enableCompositionEnd（输入法落字后触发 onChange）</Divider>
          <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>
            开启后，中文输入法下打拼音时不会每次按键都触发 onChange，只有选字/回车落字后才触发。
          </div>
          <Input.Text
            placeholder="可输入中文测试，如输入 wang 选「王」"
            value={valueComposition}
            enableCompositionEnd
            onChange={(val) => {
              console.log('enableCompositionEnd 触发:', val)
              setValueComposition(val)
            }}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            当前值: {valueComposition || '空'}
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
            当前值: {value || '空'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>操作按钮</Divider>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button onClick={() => inputTextRef.current?.focus?.()}>聚焦输入框</Button>
            <Button onClick={() => inputTextRef.current?.blur?.()}>失焦输入框</Button>
            <Button onClick={() => setValue('')}>清空所有值</Button>
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>功能说明</Divider>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
// ... 其余见 demos/InputText.tsx 全文
```

## demos/InputNumber.tsx

```tsx
import { useEffect, useState, useRef } from 'react'

import { Page, MathUtil, Input } from 'lyrixi-mobile'
// import VConsole from 'vconsole'

// const vConsole = new VConsole()

export default function InputNumberDemo() {
  const inputNumberRef = useRef(null)
  const [value, setValue] = useState('1a')

  useEffect(() => {
    console.log(inputNumberRef.current)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Input.Number
          ref={inputNumberRef}
          inputMode="numeric"
          // inputMode="decimal"
          // pattern="[0-9]+"
          placeholder="Input"
          value={value}
          // precision={0}
          maxLength={18}
          trim={true}
          allowClear
          clearRender={({ clearable, onClear }) => {
            return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
          }}
          // formatter={(currentValue) => {
          //   return '$' + MathUtil.thousands(currentValue)
          // }}
          onChange={(val) => {
            console.log('得到的值:', val)
            setValue(val)
          }}
        />

        <Input.Number
          value={value}
          onChange={setValue}
          formatter={(currentValue: string) => {
            return '$' + MathUtil.thousands(currentValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/InputNumberBox.tsx

```tsx
import { useState } from 'react'

import { Page, MathUtil, Divider, Card, Input } from 'lyrixi-mobile'

export default function InputNumberBoxDemo() {
  const [value, setValue] = useState('2.10')
  const [stepValue, setStepValue] = useState('1.0')
  return (
    <Page>
      <Page.Main>
        <Divider>Size XS</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xs"
            placeholder="Size xs"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size S</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-s"
            placeholder="Size s"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size M</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-radius-m"
            placeholder="Size m"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
            formatter={(num: string) => {
              return '$' + MathUtil.thousands(Number(num).toFixed(2))
            }}
          // onChange={(val) => {
          //   console.log('得到的值:', val)
          //   setValue(val)
          // }}
          />
        </Card>

        <Divider>Size L</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-l"
            placeholder="Size l"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size XL</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xl"
            placeholder="Size xl"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Step</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            placeholder="step 0.1"
            value={stepValue}
            onChange={setStepValue}
            step={0.1}
            precision={1}
            min={0}
            trim={true}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/InputNumberKeyboard.tsx

```tsx
import { useEffect, useState, useRef } from 'react'

import { Page, MathUtil, Input, Card, Divider } from 'lyrixi-mobile'

export default function InputNumberKeyboardDemo() {
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
              const s = typeof currentValue === 'string' ? currentValue : ''
              return s ? MathUtil.thousands(s) : ''
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
```

## demos/InputPassword.tsx

```tsx
import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputPasswordDemo() {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Password
        placeholder="Select"
        value={value}
        allowClear
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
```

## demos/InputPasswordStrength.tsx

```tsx
import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputPasswordStrengthDemo() {
  const [value] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength value={value} />
    </>
  )
}
```

## demos/InputSearch.tsx

```tsx
import { useState } from 'react'

import { Page, Input } from 'lyrixi-mobile'

export default function InputSearchDemo() {
  const [value, setValue] = useState('keyword')

  return (
    <Page>
      <Page.Main>
        <Input.Search
          trim
          precision={2}
          placeholder="Search"
          value={value}
          allowClear
          onSearch={(val) => {
            console.log(val)
            setValue(val)
          }}
        />
        Your search keyword: {value}
      </Page.Main>
    </Page>
  )
}
```

## demos/InputTel.tsx

```tsx
import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputTelDemo() {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Tel
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
```

## demos/InputUrl.tsx

```tsx
import { useEffect, useRef } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputUrlDemo() {
  const inputUrlRef = useRef(null)

  useEffect(() => {
    console.log(inputUrlRef.current)
  }, [])

  return (
    <>
      <Input.Url
        ref={inputUrlRef}
        readOnly
        placeholder="Input"
        value="www.baidu.com/"
        rightIconNode={<div>click left area will copy link</div>}
      />
    </>
  )
}
```

## demos/InputTextarea.tsx

```tsx
import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputTextareaDemo() {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Textarea
        value={value}
        allowClear
        formatter={(newValue: string) => {
          return '$' + newValue
        }}
        style={{ backgroundColor: '#f8f8f8' }}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
```

## demos/InputAutoSize.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, Input } from 'lyrixi-mobile'

export default function InputAutoSizeDemo() {
  const [value, setValue] = useState('')
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
      </Page.Main>
    </Page>
  )
}
```

## demos/InputOTP.tsx

```tsx
import { useState, useRef, type ComponentRef } from 'react'

import { Page, Input, Card, Divider, FooterBar } from 'lyrixi-mobile'

export default function InputOTPDemo() {
  const inputRef = useRef<ComponentRef<typeof Input.OTP> | null>(null)
  const [value, setValue] = useState(['1', '2', '3', '4', '5', '6'])

  const handleComplete = (completedValue: string[]) => {
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
        <FooterBar>
          <FooterBar.Button onClick={() => inputRef.current?.focus?.()}>
            聚焦第一个输入框
          </FooterBar.Button>
          <FooterBar.Button onClick={() => inputRef.current?.blur?.()}>
            失焦所有输入框
          </FooterBar.Button>
        </FooterBar>
      </Page.Footer>
    </Page>
  )
}
```

## demos/InputRange.tsx

```tsx
import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputRangeDemo() {
  const [value, setValue] = useState(0)
  return (
    <>
      <Input.Range
        style={{ marginTop: '50px' }}
        value={value}
        // disabled
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
```

## demos/InputRate.tsx

```tsx
import { useState } from 'react'

import { Page, Card, Divider, Input, Icon, Icons } from 'lyrixi-mobile'

export default function InputRateDemo() {
  const [value, setValue] = useState(3)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Common</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            value={value}
            // disabled
            onChange={(val) => {
              console.log(val)
              setValue(val)
            }}
          />
        </Card>

        <Card>
          <Divider>ReadyOnly</Divider>
          <Input.Rate style={{ margin: '0 12px' }} value={value} readOnly />
        </Card>

        <Card>
          <Divider>Disabled</Divider>
          <Input.Rate style={{ margin: '0 12px' }} value={value} disabled />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <Input.Rate style={{ margin: '0 12px' }} step={0.1} value={value} onChange={setValue} />
        </Card>
        <Card>
          <Divider>Min and Max</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            min={1}
            max={8}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Icon</Divider>
          <Input.Rate
            style={{ margin: '0 12px' }}
            iconRender={() => <Icon svg={Icons.CircleQuestion} size="l" color="info" />}
            value={value}
            onChange={setValue}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
```
