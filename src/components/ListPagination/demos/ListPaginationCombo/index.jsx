// 第三方库导入
import React, { useState } from 'react'
import ListPagination from 'lyrixi-mobile/components/ListPagination'
import Page from 'lyrixi-mobile/components/Page'
import Card from 'lyrixi-mobile/components/Card'

// 项目内部模块导入
import formatResult from '../ListPaginationMain/formatResult'
import formatViewItem from '../ListPaginationMain/formatViewItem'

// ListPagination.Combo：触发器 + 弹窗内分页列表选择
export default () => {
  const [value, setValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>ListPagination.Combo</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={value}
              onChange={(v) => {
                console.log('onChange:', v)
                setValue(v)
              }}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
