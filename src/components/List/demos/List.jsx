import React, { useState } from 'react'
import { Page, List, Card, Button } from 'lyrixi-mobile'
import listAllData from './listAllData'
import listData from './listData'

export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [multipleValue, setMultipleValue] = useState([])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List 基础（全样式展示）</Card.Header>
          <Card.Header>itemLayout horizontal</Card.Header>
          <Card.Main>
            <List
              list={listAllData}
              formatViewItem={(item) => ({
                ...item,
                actionRender: () => {
                  return <Button size="s">actionRender</Button>
                }
              })}
              value={singleValue}
              onChange={(newSingleValue) => {
                console.log('newSingleValue:', newSingleValue)
                setSingleValue(newSingleValue)
              }}
              checkable
              allowClear
            />
          </Card.Main>
          <Card.Header>itemLayout vertical</Card.Header>
          <Card.Main>
            <List
              list={listAllData}
              itemLayout="vertical"
              formatViewItem={(item) => ({
                ...item,
                actionRender: () => {
                  return <Button size="s">actionRender</Button>
                }
              })}
              value={singleValue}
              onChange={(newSingleValue) => {
                console.log('newSingleValue:', newSingleValue)
                setSingleValue(newSingleValue)
              }}
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
              onChange={(newMultipleValue) => {
                console.log('newMultipleValue:', newMultipleValue)
                setMultipleValue(newMultipleValue)
              }}
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
              formatViewItem={(item, { index }) => ({
                ...item,
                title: <div>
                  <span style={{ color: '#999' }}>{index}: </span>
                  <span>{item.name}</span>
                </div>
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
              itemRender={(item, { checked, onChange: onSelect, index }) => (
                <List.Item
                  _raw={item._raw}
                  key={item._raw?.id || item?.id || index}
                  checked={checked}
                  checkable
                  onSelect={onSelect}
                  title={item.name}
                  description={item.description}
                  note={'note'}
                  actionRender={() => <Button size="s">操作</Button>}
                />
              )}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List 分组</Card.Header>
          <Card.Main>
            <List.GroupTitle title="Group Title" description="Group Description" />
            <List
              list={listData}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
