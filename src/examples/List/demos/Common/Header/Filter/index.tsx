import React, { useEffect, useRef, useState, type ComponentProps } from 'react'
import { FooterBar, Form, Input, LocaleUtil } from 'lyrixi-mobile'
import ToolBarFilter from '../../../../../../components/ToolBar/Filter'

const locale = LocaleUtil.locale

function Filter({
  queryParams,
  onSearch
}: {
  queryParams?: Record<string, unknown>
  onSearch?: (p: Record<string, unknown>) => void
}) {
  const [form] = Form.useForm()
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

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleConfirm = (onClose: () => void) => {
    const values = (form as { getFieldsValue: () => Record<string, unknown> }).getFieldsValue()
    setActive(!!modifiedRef.current)
    onSearch?.({ ...queryParams, ...values })
    onClose()
  }

  const handleValuesChange = () => {
    modifiedRef.current = true
  }

  type FilterProps = ComponentProps<typeof ToolBarFilter>
  const filterProps = {
    sizeEqual: true,
    color: active ? 'primary' : 'default',
    onOpen: handleOpen,
    onClose: handleClose,
    modalRender: ({ onClose: _onClose }: { open: boolean | null; onClose: () => void }) => {
      return (
        <Form
          layout="vertical"
          form={form}
          onValuesChange={handleValuesChange}
          style={{ marginLeft: '12px' }}
        >
          <Form.Item name="input" label={String(locale('单行文本框'))}>
            <Input.Text allowClear placeholder={String(locale('请输入'))} maxLength={50} />
          </Form.Item>
        </Form>
      )
    },
    footerRender: (params: { onClose?: (e?: React.MouseEvent<HTMLDivElement>) => void }) => {
      const close = () => {
        params.onClose?.()
      }
      return (
        <FooterBar>
          <FooterBar.Button block color="default" backgroundColor="default" onClick={close}>
            {String(locale('取消'))}
          </FooterBar.Button>
          <FooterBar.Button
            block
            color="white"
            backgroundColor="primary"
            onClick={() =>
              handleConfirm(() => {
                params.onClose?.()
              })
            }
          >
            {String(locale('确定'))}
          </FooterBar.Button>
        </FooterBar>
      )
    }
  } as unknown as FilterProps

  return <ToolBarFilter {...filterProps} />
}

export default Filter
