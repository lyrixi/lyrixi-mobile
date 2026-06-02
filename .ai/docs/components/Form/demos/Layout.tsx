import { Page, Form, Divider, Select, Input, FooterBar, LocaleUtil } from 'lyrixi-mobile'

export default function LayoutDemo() {
  // 表单
  const [form] = Form.useForm()

  // 保存
  async function handleSave() {
    form
      .validateFields()
      .then(() => {
        console.log('Right!')
      })
      .catch((err) => {
        console.log('Wrong!', err)
      })
  }

  return (
    <Page>
      <Page.Main>
        <Divider>Horizontal</Divider>
        <Form
          layout="horizontal"
          form={form}
          initialValues={{
            input: '123'
          }}
          labelSpan={10}
          mainSpan={14}
        >
          <Form.Item
            name="input"
            label={LocaleUtil.locale('单行文本框') as string}
            labelHelp="Help info"
            extraRender={() => <div>Main Extra Info</div>}
            inputExtraRender={() => <div>Input Extra Info</div>}
            rules={[
              {
                required: true,
                message: LocaleUtil.locale('单行文本框不能为空') as string
              }
            ]}
          >
            <Input.Text placeholder={LocaleUtil.locale('请输入') as string} maxLength={50} />
          </Form.Item>
          <Form.Item name="select" label={LocaleUtil.locale('下拉选择框') as string}>
            <Select.Combo
              placeholder={LocaleUtil.locale('请选择') as string}
              list={[
                {
                  id: '1',
                  name: '选项1'
                },
                {
                  id: '2',
                  name: '选项2'
                }
              ]}
            />
          </Form.Item>
          <Form.Item name="textarea" label={LocaleUtil.locale('多行文本框') as string}>
            <Input.AutoSize placeholder={LocaleUtil.locale('请输入') as string} />
          </Form.Item>
        </Form>

        <Divider>Vertical</Divider>
        <Form layout="vertical" form={form}>
          <Form.Item
            name="input2"
            label={LocaleUtil.locale('单行文本框') as string}
            labelHelp="提示信息"
            rules={[
              {
                required: true,
                message: LocaleUtil.locale('单行文本框不能为空') as string
              }
            ]}
          >
            <Input.Text placeholder={LocaleUtil.locale('请输入') as string} maxLength={50} />
          </Form.Item>
          <Form.Item name="select2" label={LocaleUtil.locale('下拉选择框') as string}>
            <Select.Combo
              placeholder={LocaleUtil.locale('请选择') as string}
              list={[
                {
                  id: '1',
                  name: '选项1'
                },
                {
                  id: '2',
                  name: '选项2'
                }
              ]}
              // 互斥图标
              clearRender={({ clearable, onClear }) => {
                return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
              }}
            />
          </Form.Item>
          <Form.Item name="textarea2" label={LocaleUtil.locale('多行文本框') as string}>
            <Input.AutoSize placeholder={LocaleUtil.locale('请输入') as string} />
          </Form.Item>
        </Form>
      </Page.Main>
      <Page.Footer>
        <FooterBar>
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={handleSave}>
            {LocaleUtil.locale('确定')}
          </FooterBar.Button>
        </FooterBar>
      </Page.Footer>
    </Page>
  )
}
