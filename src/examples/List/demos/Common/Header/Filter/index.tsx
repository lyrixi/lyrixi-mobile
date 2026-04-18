// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import { LocaleUtil, Input } from 'lyrixi-mobile'
import { useExampleForm, ExampleForm as Form, ExampleToolBar, ExampleFooterBar } from '@examples-compat'
// 公共组件导入

// 内部组件导入
// 样式图片等资源文件导入

const locale = LocaleUtil.locale

function Filter({
  queryParams,
  onSearch
}: {
  queryParams?: Record<string, unknown>
  onSearch?: (p: Record<string, unknown>) => void
}) {
  const [form] = useExampleForm()
  const modifiedRef = useRef(false)

  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  // 显示弹窗时需要还原值
  useEffect(() => {
    if (!visible) return
    ;(form as { setFieldsValue: (v: Record<string, unknown>) => void }).setFieldsValue({
      keyword: queryParams?.keyword || '',
      input: queryParams?.input || ''
    })
    // eslint-disable-next-line
  }, [visible])

  return (
    <ExampleToolBar.Filter
      sizeEqual
      color={active ? 'primary' : 'default'}
      // backgroundColor="default"
      onOpen={() => {
        setVisible(true)
      }}
      onClose={() => {
        setVisible(false)
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
      footerRender={({ onClose }: { onClose: () => void }) => {
        return (
          <ExampleFooterBar>
            <ExampleFooterBar.Button block color="default" backgroundColor="default" onClick={onClose}>
              {locale('取消')}
            </ExampleFooterBar.Button>
            <ExampleFooterBar.Button block color="white" backgroundColor="primary" onClick={onClose}>
              {locale('确定')}
            </ExampleFooterBar.Button>
          </ExampleFooterBar>
        )
      }}
    />
  )
}

export default Filter
