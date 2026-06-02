import { useEffect, useRef, useState, type ComponentType } from 'react'

import {
  Attach,
  Card,
  Cascader,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Location,
  LocaleUtil,
  Media,
  Page,
  Picker,
  Result,
  Select,
  Selector,
  Signature,
  Switch,
  Toast
} from 'lyrixi-mobile'

import { queryData, saveData, validateData } from './../Cache/api'
import Footer from './../Cache/Footer'
import type {
  EditDemoAttachListItem,
  EditDemoFormItemExtraParams,
  EditDemoQueryDataResult,
  EditDemoResultView,
  EditDemoSaveResult,
  EditDemoUntypedFileChangePayload
} from './types'

const locale = LocaleUtil.locale

// Attach/Media demos use richer callbacks than the exported prop types describe
const AttachUntyped = Attach as unknown as ComponentType<Record<string, unknown>>
const MediaUntyped = Media as unknown as ComponentType<Record<string, unknown>>

// 表单控件展示（编辑页）
const Edit = () => {
  // 表单
  const [form] = Form.useForm()

  // 防重复提交token
  const tokenRef = useRef('' + Date.now())
  const baseDataRef = useRef<unknown>(null)

  // 全屏提示: {status: 'empty|500', message: '', data: { baseData: {}, formData: {} }}
  const [result, setResult] = useState<unknown>(null)

  // 加载数据
  async function loadData() {
    let data = (await queryData()) as EditDemoQueryDataResult
    setResult(data)
    baseDataRef.current = data?.baseData ?? null

    // Initialize form with data
    if (data?.formData) {
      ;(form as { setFieldsValue: (v: unknown) => void }).setFieldsValue(data.formData)
    }
  }

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  // 保存
  async function handleSave() {
    // 校验表单数据
    let data = await validateData({ form })
    if (!data) return

    // 保存表单数据
    const saveResult = (await saveData({
      baseData: baseDataRef.current,
      data,
      token: tokenRef.current
    })) as EditDemoSaveResult
    if (saveResult.code === '1') {
      Toast.show({
        content: String(locale('提交成功!')),
        onClose: () => {
          // 提交完成后操作: 返回等
        }
      })
    }
    // 重复请求
    else if (saveResult.code === '2') {
      Toast.show({
        content: String(saveResult.message || locale('请勿重复提交!')),
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
        content: String(saveResult.message || locale('提交失败!'))
      })
    }
  }

  const resultView = result as EditDemoResultView

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Horizontal Layout</Divider>
          <Form
            form={form}
            style={{ margin: '0 12px' }}
            labelEllipsis={{ rows: 2, expandable: true }}
          >
            <Form.Item
              name="input"
              label={String(
                locale(
                  'Input Overflow Title, It is very very very long,  It is really very very very long'
                )
              )}
              labelHelp="Help info"
              rules={[
                {
                  required: true,
                  message: String(locale('Input cannot be empty'))
                }
              ]}
            >
              <Input.Text allowClear placeholder={String(locale('Please input'))} maxLength={50} />
            </Form.Item>
            <Form.Item
              name="textarea"
              maxLength={150}
              label={String(locale('Textarea'))}
              extra={({ value }: EditDemoFormItemExtraParams) => {
                const s = typeof value === 'string' ? value : ''
                return <div className="lyrixi-text-right">{`${s.length} / 150`}</div>
              }}
            >
              <Input.Textarea allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item name="autoSize" label={String(locale('Auto fit'))}>
              <Input.AutoSize allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item name="selectTags" label={String(locale('Select Tags'))}>
              <Select.Combo
                multiple
                mode="tags"
                placeholder={String(locale('Please select'))}
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
            <Form.Item name="select" label={String(locale('Select'))}>
              <Select.Combo
                multiple={false}
                placeholder={String(locale('Please select'))}
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
            <Form.Item name="picker" label={String(locale('Picker'))}>
              <Picker.Combo
                placeholder={String(locale('Please select'))}
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
            <Form.Item name="switch" valuePropName="checked" label={String(locale('Switch'))}>
              <Switch />
            </Form.Item>
            <Form.Item name="checkbox" label={String(locale('Checkbox'))}>
              <Checkbox.Group
                placeholder={String(locale('Please select'))}
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
            <Form.Item name="radio" label={String(locale('Radio'))}>
              <Checkbox.Group
                multiple={false}
                placeholder={String(locale('Please select'))}
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
            <Form.Item name="selector" label={String(locale('Selector'))}>
              <Selector
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
            <Form.Item name="number" label={String(locale('Number'))}>
              <Input.Number allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item
              name="numberBox"
              label={String(locale('Number box'))}
              rules={[
                {
                  required: true,
                  message: String(locale('Number box can not empty'))
                }
              ]}
            >
              <Input.NumberBox placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item
              name="password"
              label={String(locale('Password'))}
              extra={({ value }: EditDemoFormItemExtraParams) => {
                return (
                  <Input.PasswordStrength
                    value={typeof value === 'string' ? value : undefined}
                    style={{ marginTop: 8 }}
                  />
                )
              }}
            >
              <Input.Password allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item name="range" label={String(locale('Range'))}>
              <Input.Range />
            </Form.Item>
            <Form.Item name="rate" label={String(locale('Rate'))}>
              <Input.Rate />
            </Form.Item>
            <Form.Item name="tel" label={String(locale('Tel'))}>
              <Input.Tel allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item name="url" label={String(locale('Url'))}>
              <Input.Url allowClear placeholder={String(locale('Please input'))} />
            </Form.Item>
            <Form.Item name="signature" layout="vertical" label={String(locale('Signature'))}>
              <Signature.Combo allowClear={true} />
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Divider>Vertical Layout</Divider>
          <Form form={form} layout="vertical" style={{ margin: '0 12px' }}>
            <Form.Item name="datetime" label={String(locale('Datetime'))}>
              <DatePicker.Combo type="datetime" placeholder={String(locale('Please select'))} allowClear />
            </Form.Item>
            <Form.Item name="date" label={String(locale('Date'))}>
              <DatePicker.Combo placeholder={String(locale('Please select'))} allowClear />
            </Form.Item>
            <Form.Item name="time" label={String(locale('Time'))}>
              <DatePicker.Combo type="time" placeholder={String(locale('Please select'))} allowClear />
            </Form.Item>
            <Form.Item name="dateRange" label={String(locale('Date range'))}>
              <DatePicker.RangeCombo placeholder={String(locale('Please select'))} allowClear />
            </Form.Item>
            <Form.Item name="district" label={String(locale('District'))}>
              <Cascader.DistrictCombo placeholder={String(locale('Please select'))} allowClear />
            </Form.Item>
            <Form.Item name="location" label={String(locale('Location'))}>
              <Location.Combo
                type="gcj02"
                mapConfig={{
                  key: '',
                  type: 'bmap'
                }}
                placeholder={String(locale('Please select'))}
                allowClear
                previewVisible
                chooseVisible
              />
            </Form.Item>
            <Form.Item name="signatureVertical" label={String(locale('Signature'))}>
              <Signature.Combo />
            </Form.Item>
            <Form.Item name="attach" label={String(locale('Attach'))}>
              <AttachUntyped
                reUpload={false}
                allowChoose
                allowClear
                uploadPosition="start"
                maxSize={300 * 1024 * 1024}
                list={
                  [
                    {
                      name: '1',
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      status: 'error'
                    },
                    {
                      name: '2',
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                    }
                  ] as EditDemoAttachListItem[]
                }
                count={9}
                onFileChange={async (_payload: EditDemoUntypedFileChangePayload) => {}}
                onChange={(_newList: unknown) => {}}
              />
            </Form.Item>
            <Form.Item name="image" label={String(locale('Media'))}>
              <MediaUntyped
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
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                  },
                  {
                    id: '4',
                    fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                    fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                  }
                ]}
                count={9}
                onFileChange={async (_payload: EditDemoUntypedFileChangePayload) => {}}
                onChange={(_newList: unknown) => {}}
              />
            </Form.Item>
          </Form>
        </Card>
      </Page.Main>

      {/* Footer */}
      <Footer onOk={handleSave} />

      {/* Error */}
      {resultView?.message && (
        <Result
          status={String(resultView?.status ?? 'empty')}
          title={String(resultView?.title || resultView?.message || '')}
        />
      )}
    </Page>
  )
}

export default Edit
