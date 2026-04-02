import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Form from 'lyrixi-mobile/components/Form'
import Input from 'lyrixi-mobile/components/Input'
import Select from 'lyrixi-mobile/components/Select'
import DatePicker from 'lyrixi-mobile/components/DatePicker'
import FooterBar from 'lyrixi-mobile/components/FooterBar'

export default function FormExample() {
  return (
    <Page>
      <Page.Main>
        <Form>
          <Form.Item label="标题">
            <Input.Text placeholder="请输入标题" />
          </Form.Item>
          <Form.Item label="状态">
            <Select.Combo
              list={[
                { id: '1', name: '启用' },
                { id: '0', name: '停用' }
              ]}
            />
          </Form.Item>
          <Form.Item label="日期">
            <DatePicker.Combo type="date" />
          </Form.Item>
        </Form>
      </Page.Main>
      <Page.Footer>
        <FooterBar>
          <FooterBar.Button backgroundColor="default">取消</FooterBar.Button>
          <FooterBar.Button color="white" backgroundColor="primary">
            保存
          </FooterBar.Button>
        </FooterBar>
      </Page.Footer>
    </Page>
  )
}
