// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import { LocaleUtil, Divider, Page, Result, Card, Text as LyrixiText, Form, Toast } from 'lyrixi-mobile'
// 公共组件导入

// 内部组件导入
import { queryData, approveData } from './api'
import Footer from './Footer'

// 样式图片等资源文件导入

const locale = LocaleUtil.locale

const Text = LyrixiText as unknown as React.ComponentType<Record<string, unknown>>

// 表单编辑页面
const FormDetail = () => {
  // 防重复提交token
  const tokenRef = useRef('' + Date.now())

  // 全屏提示: { status: 'empty|500', message: '', data: {} }
  const [result, setResult] = useState<unknown>(null)

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  // 加载数据
  async function loadData() {
    // 加载详情数据
    let newResult = await queryData()
    setResult(newResult)
  }

  // 保存
  async function handleApprove() {
    // 保存表单数据
    const res = (await approveData({ token: tokenRef.current })) as {
      code?: string
      message?: string
    }
    if (res.code === '1') {
      Toast.show({
        content: locale('审批通过!'),
        onClose: () => {
          // 提交完成后操作: 返回等
        }
      })
    }
    // 重复请求
    else if (res.code === '2') {
      Toast.show({
        content: res.message || locale('请勿重复提交!'),
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
        content: res.message || locale('审批失败!')
      })
    }
  }

  const resData = result as { data?: Record<string, unknown>; status?: string; message?: string } | null

  return (
    <Page>
      {/* Data success */}
      {resData?.data && (
        <Page.Main>
          <Card>
            <Divider>Horizontal Layout</Divider>
            <Form style={{ marginLeft: '12px' }}>
              <Form.Item
                labelHelp="Help info"
                label={locale(
                  'Input Overflow Label, It is very very very long,  It is really very very very long'
                )}
                labelEllipsis={{ rows: 2, expandable: true }}
                mainEllipsis={{ rows: 2, expandable: true }}
              >
                Value Overflow Main, It is very very very long, It is really very very very long
              </Form.Item>

              <Form.Item label={locale('Select')}>
                <Text>{LyrixiText.getDisplayValue(resData?.data?.select)}</Text>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            <Divider>Vertical Layout</Divider>
            <Form layout="vertical" style={{ marginLeft: '12px' }}>
              <Form.Item label={locale('Input')}>
                <Text>{LyrixiText.getDisplayValue(resData?.data?.input)}</Text>
              </Form.Item>

              <Form.Item label={locale('Select')}>
                <Text>{LyrixiText.getDisplayValue(resData?.data?.select)}</Text>
              </Form.Item>
            </Form>
          </Card>
        </Page.Main>
      )}

      {/* Footer */}
      <Footer onOk={handleApprove} />

      {/* Data error */}
      {resData?.status && <Result status={resData.status} title={resData.message} />}
    </Page>
  )
}

export default FormDetail
