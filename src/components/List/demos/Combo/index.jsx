import React, { useRef, useState } from 'react'
import { Page, List, Card, Divider, ToolBar } from 'lyrixi-mobile'
import listData from './../data'

export default () => {
  const listRef = useRef(null)
  const [keyword, setKeyword] = useState('')
  const [list, setList] = useState(listData)
  const [value, setValue] = useState(null)

  console.log(listRef)
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">List.Combo</Page.Header>
      <Page.Main>
        <Card>
          <Divider>Default Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Default Select"
            title="Default Select"
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
          />
        </Card>

        <Card>
          <Divider>Single Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>Single Select, allow modal clear</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>Multiple Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            allowClear
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>Multiple Select tags</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple={'tags'}
            allowClear
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>itemRender</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            value={value}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>Layout</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Layout"
            multiple={false}
            title="Select"
            headerRender={() => {
              return <p>Header</p>
            }}
            footerRender={() => {
              return <p>Footer</p>
            }}
            allowClear
            value={value}
            list={list}
            onChange={setValue}
            loadData={({ previousResult }) => ({
              status: '', // 'empty|500'
              message: '',
              list
            })}
            checkable
          />
        </Card>

        <Card>
          <Divider>Search</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            title="Select"
            headerRender={() => {
              return (
                <ToolBar invert>
                  <ToolBar.Search
                    value={keyword}
                    onSearch={(newKeyword) => {
                      setKeyword(newKeyword)
                      setList(List.searchList(listData, newKeyword))
                    }}
                  />
                </ToolBar>
              )
            }}
            allowClear
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
