// 第三方库导入
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { LocaleUtil, Toast, Divider, Page, Result, Typography, Card } from 'lyrixi-mobile'
// 公共组件导入

// 内部组件导入
import { queryData, approveData } from './api'
import Footer from './Footer'

// 样式图片等资源文件导入

const locale = LocaleUtil.locale
const { Item, Label, Main } = Typography.Form

// 表单编辑页面
const FormDetail = () => {
  // 防重复提交token
  const tokenRef = useRef('' + Date.now())

  // 全屏提示: { status: 'empty|500', message: '', data: {} }
  const [result, setResult] = useState(null)

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  // 加载数据
  async function loadData() {
    // 加载详情数据
    let data = await queryData()
    setResult(data)
  }

  // 保存
  async function handleApprove() {
    // 保存表单数据
    let result = await approveData({ token: tokenRef.current })
    if (result.code === '1') {
      Toast.show({
        content: locale('审批通过!'),
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
        content: result.message || locale('审批失败!')
      })
    }
  }

  return (
    <Page>
      {/* Data success */}
      {result?.data && (
        <Page.Main>
          <Card>
            <Divider>Horizontal Layout</Divider>
            <Typography.Form style={{ marginLeft: '12px' }}>
              <Item>
                <Label help="Help info" ellipsis={{ rows: 1, expandable: true }}>
                  {locale(
                    'Input Overflow Label, It is very very very long,  It is really very very very long'
                  )}
                </Label>
                <Main ellipsis={{ rows: 2, expandable: true }}>
                  {locale(
                    'Value Overflow Main, It is very very very long,  It is really very very very long'
                  )}
                </Main>
              </Item>

              <Item>
                <Label ellipsis={{ rows: 1, expandable: true }}>{locale('Select')}</Label>
                <Main>{Typography.getDisplayValue(data?.select)}</Main>
              </Item>
            </Typography.Form>
          </Card>
          <Card>
            <Divider>Vertical Layout</Divider>
            <Typography.Form layout="vertical" style={{ marginLeft: '12px' }}>
              <Item>
                <Label>{locale('Input')}</Label>
                <Main>{Typography.getDisplayValue(data?.input)}</Main>
              </Item>

              <Item>
                <Label>{locale('Select')}</Label>
                <Main>{Typography.getDisplayValue(data?.select)}</Main>
              </Item>
            </Typography.Form>
          </Card>
        </Page.Main>
      )}

      {/* Footer */}
      <Footer onOk={handleApprove} />

      {/* Data error */}
      {result?.status && <Result status={result.status} title={result.message} />}
    </Page>
  )
}

export default FormDetail
