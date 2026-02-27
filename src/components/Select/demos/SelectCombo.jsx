import React, { useState, useRef } from 'react'
import { Page, Select, Checkbox, Card, ToolBar, Text, ObjectUtil } from 'lyrixi-mobile'
import flatList from './flatList'
import groupList from './groupList'

export default () => {
  const [keyword, setKeyword] = useState('')
  const [singleValue, setSingleValue] = useState(null)

  const [multipleValue, setMultipleValue] = useState([
    {
      allowClear: true,
      id: '1',
      name: 'Option'
    },
    {
      id: '2',
      name: 'Option2',
      style: {
        color: 'red',
        padding: 0,
        backgroundColor: 'transparent'
      }
    },
    {
      id: '3',
      name: 'Option3',
      disabled: true,
      allowClear: true
    }
  ])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Single Select</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              portal={document.body}
              placeholder="Single Select"
              allowClear
              multiple={false}
              list={flatList}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Single Select, allow modal clear</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Single Select"
              allowClear
              list={flatList}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Select</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              multiple
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={setMultipleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Select separator</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              multiple
              separator="|"
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={setMultipleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Single tags</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Single tags Select"
              mode={'tags'}
              multiple={false}
              // disabled
              allowClear
              list={flatList}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Tags</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              mode={'tags'}
              multiple
              // disabled
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={setMultipleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Tags separator</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              mode={'tags'}
              separator=","
              multiple
              // disabled
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={setMultipleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Checkbox</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Custom Checkbox"
              allowClear
              multiple={false}
              list={flatList}
              value={singleValue}
              onChange={setSingleValue}
              checkboxRender={({ checked }) => {
                return <Checkbox checked={checked} />
              }}
              checkable="left"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Group</Card.Header>
          <Card.Main>
            <Select.Combo
              placeholder="Group"
              multiple={false}
              title="Group Select"
              allowClear
              value={singleValue}
              list={groupList}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Header: Search</Card.Header>
          <Card.Main>
            <Select.Combo
              placeholder="Search"
              allowClear
              multiple={false}
              title="Select"
              modalStyle={{
                height: '500px'
              }}
              headerRender={() => {
                return (
                  <ToolBar variant="filled">
                    <ToolBar.Search
                      allowClear
                      value={keyword}
                      // onSearch={(newKeyword) => {
                      //   setKeyword(newKeyword)
                      // }}
                      enableCompositionEnd={true}
                      onChange={(newKeyword) => {
                        ObjectUtil.debounce(() => {
                          setKeyword(newKeyword)
                        }, 1000, 'searchDebounce')
                      }}
                    />
                  </ToolBar>
                )
              }}
              value={singleValue}
              // List filter by keyword
              list={flatList?.filter?.((item) => item.name.includes(keyword)) || []}
              // Keyword hightlight 
              formatViewItem={(item) => {
                return {
                  title: <Text style={item.style} highlight={keyword}>{item.name}</Text>
                }
              }}
              onChange={(newValue) => {
                console.log('onChange:', newValue)
                setSingleValue(newValue)
              }}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
