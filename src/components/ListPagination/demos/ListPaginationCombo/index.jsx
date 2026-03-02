// 第三方库导入
import React, { useState } from 'react'
import ListPagination from 'lyrixi-mobile/components/ListPagination'
import Page from 'lyrixi-mobile/components/Page'
import Card from 'lyrixi-mobile/components/Card'

// 项目内部模块导入
import formatResult from '../ListPaginationMain/formatResult'
import formatViewItem from '../ListPaginationMain/formatViewItem'

// ListPagination.Combo：触发器 + 弹窗内分页列表选择（不支持传 list，使用 url + formatResult/formatViewItem）
export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [multipleValue, setMultipleValue] = useState([])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>单选</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={(v) => {
                console.log('onChange:', v)
                setSingleValue(v)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>多选</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择（可多选）"
              allowClear
              multiple
              title="选择多项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={multipleValue}
              onChange={(v) => {
                console.log('onChange:', v)
                setMultipleValue(v || [])
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>多选自定义分隔符</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              multiple
              separator=" | "
              title="选择多项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={multipleValue}
              onChange={(v) => setMultipleValue(v || [])}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>自定义 formatter 展示</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              formatter={(val) => (val ? `已选: ${val.name}` : '')}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>只读</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              readOnly
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>禁用</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              disabled
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>portal 挂载到 body</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              title="选择一项"
              portal={typeof document !== 'undefined' ? document.body : undefined}
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>安全区 + 点击遮罩关闭</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="请选择"
              allowClear
              title="选择一项"
              safeArea
              maskClosable
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
