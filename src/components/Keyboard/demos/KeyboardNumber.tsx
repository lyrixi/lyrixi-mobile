import React, { useState } from 'react'
import { Page, Card, Divider, Input, Keyboard } from 'lyrixi-mobile'

export default () => {
  const [open1, setOpen1] = useState(false)
  const [value1, setValue1] = useState('')
  const [open2, setOpen2] = useState(false)
  const [value2, setValue2] = useState('')
  const [open3, setOpen3] = useState(false)
  const [value3, setValue3] = useState('')
  const [open4, setOpen4] = useState(false)
  const [value4, setValue4] = useState('')
  const [open5, setOpen5] = useState(false)
  const [value5, setValue5] = useState('')
  const [open6, setOpen6] = useState(false)
  const [value6, setValue6] = useState('')
  const [openFull, setOpenFull] = useState(false)
  const [valueFull, setValueFull] = useState('')

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>所有按键（小数点、负号、删除、确认、取消）</Divider>
          <Input.Node
            value={valueFull}
            placeholder="点击输入，展示完整键盘"
            onClick={() => setOpenFull(true)}
            onChange={setValueFull}
          />
          <Keyboard.Number
            open={openFull}
            value={valueFull}
            onChange={setValueFull}
            dot="."
            minus="-"
            okVisible
            cancelVisible
            onOk={(val) => setValueFull(val)}
            onCancel={() => setOpenFull(false)}
            onClose={() => setOpenFull(false)}
          />
        </Card>

        <Card>
          <Divider>value / onChange / open / onClose</Divider>
          <Input.Node
            value={value1}
            placeholder="点击输入"
            onClick={() => setOpen1(true)}
            onChange={setValue1}
          />
          <Keyboard.Number
            open={open1}
            value={value1}
            onChange={setValue1}
            onClose={() => setOpen1(false)}
          />
        </Card>

        <Card>
          <Divider>dot（小数点）</Divider>
          <Input.Node
            value={value2}
            placeholder="带小数点的数字"
            onClick={() => setOpen2(true)}
            onChange={setValue2}
          />
          <Keyboard.Number
            open={open2}
            value={value2}
            onChange={setValue2}
            dot="."
            onClose={() => setOpen2(false)}
          />
        </Card>

        <Card>
          <Divider>minus（负号）</Divider>
          <Input.Node
            value={value3}
            placeholder="可输入负数"
            onClick={() => setOpen3(true)}
            onChange={setValue3}
          />
          <Keyboard.Number
            open={open3}
            value={value3}
            onChange={setValue3}
            minus="-"
            onClose={() => setOpen3(false)}
          />
        </Card>

        <Card>
          <Divider>okVisible / okNode / onOk</Divider>
          <Input.Node
            value={value4}
            placeholder="带确认按钮"
            onClick={() => setOpen4(true)}
            onChange={setValue4}
          />
          <Keyboard.Number
            open={open4}
            value={value4}
            onChange={setValue4}
            okVisible
            okNode={<span>完成</span>}
            onOk={(val) => {
              setValue4(val)
            }}
            onClose={() => setOpen4(false)}
          />
        </Card>

        <Card>
          <Divider>cancelVisible / cancelNode / onCancel</Divider>
          <Input.Node
            value={value5}
            placeholder="带取消按钮"
            onClick={() => setOpen5(true)}
            onChange={setValue5}
          />
          <Keyboard.Number
            open={open5}
            value={value5}
            onChange={setValue5}
            cancelVisible
            cancelNode={<span>收起</span>}
            onCancel={() => setOpen5(false)}
            onClose={() => setOpen5(false)}
          />
        </Card>

        <Card>
          <Divider>safeArea / modalStyle / modalClassName / onOpen</Divider>
          <Input.Node
            value={value6}
            placeholder="自定义样式与事件"
            onClick={() => setOpen6(true)}
            onChange={setValue6}
          />
          <Keyboard.Number
            open={open6}
            value={value6}
            onChange={setValue6}
            safeArea
            modalStyle={{ borderRadius: '12px 12px 0 0' }}
            modalClassName="lyrixi-keyboard-demo-custom"
            onOpen={() => console.log('键盘打开')}
            onClose={() => setOpen6(false)}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
