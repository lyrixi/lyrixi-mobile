// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import {
  LocaleUtil,
  Toast,
  Divider,
  Page,
  Result,
  Form,
  Card,
  Input,
  Select,
  Picker,
  Switch,
  Checkbox,
  Radio,
  Selector,
  DatePicker,
  Cascader,
  Location,
  Signature,
  Attach,
  Image
} from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import { queryData, validateData, saveData } from './../Cache/api'
import Footer from './../Cache/Footer'

// 样式图片等资源文件导入

const locale = LocaleUtil.locale

// 表单编辑页面
const Edit = () => {
  // 表单
  const [form] = Form.useForm()

  // 防重复提交token
  const tokenRef = useRef('' + Date.now())

  // 全屏提示: {status: 'empty|500', message: '', data: { baseData: {}, formData: {} }}
  const [result, setResult] = useState(null)

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  // 加载数据
  async function loadData() {
    let data = await queryData()
    setResult(data)

    // Initialize form with data
    if (data?.formData) {
      form.setFieldsValue(data.formData)
    }
  }

  // 保存
  async function handleSave() {
    // 校验表单数据
    let data = await validateData({ form })
    if (!data) return

    // 保存表单数据
    let result = await saveData({ baseData: baseDataRef.current, data, token: tokenRef.current })
    if (result.code === '1') {
      Toast.show({
        content: locale('提交成功!'),
        onClose: () => {
          // 提交完成后操作: 返回等
        }
      })
    }
    // 重复请求
    else if (result.code === '2') {
      Toast.show({
        content: result.message || locale('请勿重复提交!'),
        onClose: () => {
          // 提交完成后操作: 返回等
        }
      })
    }
    // 保存出错
    else {
      // 请求出错需要重新生成token
      tokenRef.current = '' + Date.now()

      Toast.show({
        content: result.message || locale('提交失败!')
      })
    }
  }

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Card>
          <Divider>Horizontal Layout</Divider>
          <Form
            form={form}
            style={{ margin: '0 12px' }}
            labelCol={{ ellipsis: { rows: 2, expandable: true } }}
          >
            <Form.Item
              name="input"
              label={locale(
                'Input Overflow Title, It is very very very long,  It is really very very very long'
              )}
              help="Help info"
              rules={[
                {
                  required: true,
                  message: locale('Input cannot be empty')
                }
              ]}
            >
              <Input.Text allowClear placeholder={locale('Please input')} maxLength={50} />
            </Form.Item>
            <Form.Item
              name="textarea"
              maxLength={150}
              label={locale('Textarea')}
              extra={({ value }) => {
                return <div className="lyrixi-text-right">{`${value?.length || '0'} / 150`}</div>
              }}
            >
              <Input.Textarea allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="autoSize" label={locale('Auto fit')}>
              <Input.AutoSize allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="selectTags" label={locale('Select Tags')}>
              <Select.Combo
                multiple
                mode="tags"
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="select" label={locale('Select')}>
              <Select.Combo
                multiple={false}
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="picker" label={locale('Picker')}>
              <Picker.Combo
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="switch" valuePropName="checked" label={locale('Switch')}>
              <Switch />
            </Form.Item>
            <Form.Item name="checkbox" label={locale('Checkbox')}>
              <Checkbox.Group
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="radio" label={locale('Radio')}>
              <Radio.Group
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="selector" label={locale('Selector')}>
              <Selector
                placeholder={locale('Please select')}
                list={[
                  {
                    id: '1',
                    name: 'Option1'
                  },
                  {
                    id: '2',
                    name: 'Option2'
                  },
                  {
                    id: '3',
                    name: 'Option3'
                  },
                  {
                    id: '4',
                    name: 'Option4'
                  }
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="number" label={locale('Number')}>
              <Input.Number allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item
              name="numberBox"
              label={locale('Number box')}
              rules={[
                {
                  required: true,
                  message: locale('Number box can not empty')
                }
              ]}
            >
              <Input.NumberBox placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item
              name="password"
              label={locale('Password')}
              extra={({ value }) => {
                return <Input.PasswordStrength value={value} style={{ marginTop: 8 }} />
              }}
            >
              <Input.Password allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="range" label={locale('Range')}>
              <Input.Range />
            </Form.Item>
            <Form.Item name="rate" label={locale('Rate')}>
              <Input.Rate />
            </Form.Item>
            <Form.Item name="tel" label={locale('Tel')}>
              <Input.Tel allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="url" label={locale('Url')}>
              <Input.Url allowClear placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="signature" layout="vertical" label={locale('Signature')}>
              <Signature.Combo allowClear={true} />
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Divider>Vertical Layout</Divider>
          <Form form={form} layout="vertical" style={{ margin: '0 12px' }}>
            <Form.Item name="datetime" label={locale('Datetime')}>
              <DatePicker.Combo type="datetime" placeholder={locale('Please select')} allowClear />
            </Form.Item>
            <Form.Item name="date" label={locale('Date')}>
              <DatePicker.Combo placeholder={locale('Please select')} allowClear />
            </Form.Item>
            <Form.Item name="time" label={locale('Time')}>
              <DatePicker.Combo type="time" placeholder={locale('Please select')} allowClear />
            </Form.Item>
            <Form.Item name="dateRange" label={locale('Date range')}>
              <DatePicker.RangeCombo placeholder={locale('Please select')} allowClear />
            </Form.Item>
            <Form.Item name="district" label={locale('District')}>
              <Cascader.DistrictCombo placeholder={locale('Please select')} allowClear />
            </Form.Item>
            <Form.Item name="location" label={locale('Location')}>
              <Location.Combo
                type="gcj02"
                config={{
                  key: '',
                  type: 'bmap'
                }}
                placeholder={locale('Please select')}
                allowClear
                previewVisible
                chooseVisible
              />
            </Form.Item>
            <Form.Item name="signature" label={locale('Signature')}>
              <Signature.Combo />
            </Form.Item>
            <Form.Item name="attach" label={locale('Attach')}>
              <Attach
                reUpload={false}
                allowChoose
                allowClear
                uploadPosition="start"
                maxSize={300 * 1024 * 1024}
                list={[
                  {
                    name: '1',
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    status: 'error'
                  },
                  {
                    name: '2',
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                  }
                ]}
                count={9}
                onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
                  console.log({ fileName, fileSize, fileURL, fileData })
                }}
                onChange={(newList) => {
                  console.log('修改:', newList)
                }}
              />
            </Form.Item>
            <Form.Item name="image" label={locale('Image')}>
              <Image
                allowChoose
                allowClear
                list={[
                  {
                    id: '1',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    status: 'error'
                  },
                  {
                    id: '2',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    fileUrl:
                      'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg'
                    // status: 'uploading'
                  },
                  {
                    id: '3',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                  },
                  {
                    id: '4',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                  }
                ]}
                count={9}
                onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
                  console.log({ fileName, fileSize, fileURL, fileData })
                }}
                onChange={(newList) => {
                  console.log('修改:', newList)
                }}
              />
            </Form.Item>
          </Form>
        </Card>
      </Page.Main>

      {/* Footer */}
      <Footer onOk={handleSave} />

      {/* Error */}
      {result?.message && (
        <Result className="lyrixi-full" status={result.status} title={result.title} />
      )}
    </Page>
  )
}

export default Edit
