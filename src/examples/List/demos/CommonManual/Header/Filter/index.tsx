// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import { ToolBar, LocaleUtil, Input } from 'lyrixi-mobile'
import { useExampleForm, ExampleForm as ExampleFormRoot } from '@examples-compat'
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
        ;(form as { resetFields: () => void }).resetFields()
      }}
      onOk={({ close }: { close: () => void }) => {
        setActive(modifiedRef.current)
        console.log((form as { getFieldsValue: () => unknown }).getFieldsValue())
        onSearch && onSearch({ ...queryParams, ...(form as { getFieldsValue: () => Record<string, unknown> }).getFieldsValue() })
        close()
      }}
      modalRender={() => {
        return (
          <ExampleFormRoot
            layout="vertical"
            form={form}
            onValuesChange={() => {
              modifiedRef.current = true
            }}
            style={{ marginLeft: '12px' }}
          >
            <ExampleFormRoot.Item name="input" label={locale('单行文本框')}>
              <Input.Text allowClear placeholder={locale('请输入')} maxLength={50} />
            </ExampleFormRoot.Item>
          </ExampleFormRoot>
        )
      }}
    />
  )
}

export default Filter
