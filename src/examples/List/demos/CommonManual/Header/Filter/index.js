// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import { Form, ToolBar, LocaleUtil, Input } from 'lyrixi-mobile'
// 公共组件导入

// 内部组件导入
// 样式图片等资源文件导入

const locale = LocaleUtil.locale

function Filter({ queryParams, onSearch }) {
  const [form] = Form.useForm()
  const modifiedRef = useRef(false)

  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  // 显示弹窗时需要还原值
  useEffect(() => {
    if (!visible) return
    form.setFieldsValue({
      keyword: queryParams?.keyword || '',
      input: queryParams?.input || ''
    })
    // eslint-disable-next-line
  }, [visible])

  return (
    <ToolBar.Filter
      sizeEqual
      color={active ? 'primary' : 'default'}
      onOpen={() => {
        setVisible(true)
      }}
      onClose={() => {
        setVisible(false)
      }}
      // 取消还原激活状态
      onCancel={() => {
        modifiedRef.current = active
      }}
      onConfig={() => {
        console.log('setting')
      }}
      onReset={() => {
        modifiedRef.current = false
        form.resetFields()
      }}
      onOk={({ close }) => {
        setActive(modifiedRef.current)
        console.log(form.getFieldsValue())
        onSearch && onSearch({ ...queryParams, ...form.getFieldsValue() })
        close()
      }}
      modalRender={() => {
        return (
          <Form
            layout="vertical"
            form={form}
            onValuesChange={() => {
              modifiedRef.current = true
            }}
            style={{ marginLeft: '12px' }}
          >
            <Form.Item name="input" label={locale('单行文本框')}>
              <Input.Text allowClear placeholder={locale('请输入')} maxLength={50} />
            </Form.Item>
          </Form>
        )
      }}
    />
  )
}

export default Filter
