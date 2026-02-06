import React, { useState } from 'react'
import { Page, List, Card, Button } from 'lyrixi-mobile'
import listData from './data'

export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [multipleValue, setMultipleValue] = useState([])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List 基础（单选、list / value / onChange / checkable）</Card.Header>
          <Card.Main>
            <List
              list={listData}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List 多选（multiple、allowClear）</Card.Header>
          <Card.Main>
            <List
              list={listData}
              value={multipleValue}
              onChange={setMultipleValue}
              checkable
              multiple
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List 项布局（itemLayout=vertical）、复选框在右（checkboxPosition=right）</Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 3)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              itemLayout="vertical"
              checkboxPosition="right"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List formatViewItem（格式化单项显示）</Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 4)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              formatViewItem={(item) => ({
                ...item,
                title: `${item.title}（${item.letter}）`,
                description: `id: ${item.id}`
              })}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List itemRender（自定义项渲染）</Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 3)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              itemRender={(item, { checked, onChange: onSelect }) => (
                <List.Item
                  _raw={item._raw}
                  checked={checked}
                  checkable
                  onSelect={onSelect}
                  title={item.title}
                  description={item.description}
                  note={item.letter}
                  actionRender={() => <Button size="s">操作</Button>}
                />
              )}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List.Item 单独使用（title / description / avatarUrl / note / content / actionRender / checkable）</Card.Header>
          <Card.Main>
            <List.Item
              _raw={{ id: '1' }}
              title="仅标题"
              description="描述文字"
            />
            <List.Item
              _raw={{ id: '2' }}
              avatarUrl="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
              title="带头像"
              description="avatarUrl 示例"
            />
            <List.Item
              _raw={{ id: '3' }}
              title="带右侧说明与操作"
              description="description"
              note="备注"
              actionRender={() => <Button size="s">按钮</Button>}
            />
            <List.Item
              _raw={{ id: '4' }}
              checkable
              checked={false}
              onSelect={() => { }}
              title="可选项（checkable）"
              description="content 区域"
              content="自定义 content 区块"
            />
            <List.Item
              _raw={{ id: '5' }}
              disabled
              title="禁用项"
              description="disabled"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List.InfiniteScroll（status: loading / noMore / 自定义 content）</Card.Header>
          <Card.Main>
            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>status=&quot;loading&quot;</div>
              <List.InfiniteScroll status="loading" />
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>status=&quot;noMore&quot;</div>
              <List.InfiniteScroll status="noMore" />
            </div>
            <div>
              <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>status=&quot;error&quot; 或自定义 content</div>
              <List.InfiniteScroll status="error" content="加载失败，点击重试" />
            </div>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
