import React, { useState, useRef } from 'react'
import _ from 'lodash'
import { Page, Divider, Select, List, Checkbox, Message, Card, ToolBar } from 'lyrixi-mobile'
import list from './listSimple'
import listData from './listData'

export default () => {
  const [keyword, setKeyword] = useState('')
  const [singleValue, setSingleValue] = useState(null)

  const [multipleValue, setMultipleValue] = useState([
    {
      allowClear: true,
      id: '1',
      // name: 'Option',
      name: <div>Option1</div>
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
          <Divider>Single Select</Divider>
          <Select.Combo
            title="Select"
            // 有些业务弹窗后就会变的异常卡顿, 解决方式如下:
            // 1.visibility改为display能解决
            // 2.不用root换任意一个div都是好的, root应该被恶意修改导致
            // 3.挂载到body下也能解决
            portal={document.body}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={singleValue}
            onChange={setSingleValue}
          />
        </Card>

        <Card>
          <Divider>Single Select, allow modal clear</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            list={list}
            value={singleValue}
            onChange={setSingleValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            allowClear
            list={list}
            value={multipleValue}
            onChange={setMultipleValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select separator</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            separator="|"
            allowClear
            list={list}
            value={multipleValue}
            onChange={setMultipleValue}
          />
        </Card>

        <Card>
          <Divider>Single tags</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Single tags Select"
            mode={'tags'}
            multiple={false}
            // disabled
            allowClear
            list={list}
            value={singleValue}
            onChange={setSingleValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple
            // disabled
            allowClear
            list={list}
            value={multipleValue}
            onChange={setMultipleValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags separator</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            separator=","
            multiple
            // disabled
            allowClear
            list={list}
            value={multipleValue}
            onChange={setMultipleValue}
          />
        </Card>

        <Card>
          <Divider>Checkbox</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={singleValue}
            onChange={setSingleValue}
            checkboxRender={({ checked }) => {
              return <Checkbox checked={checked} />
            }}
            checkable="left"
          />
        </Card>

        <Card>
          <Divider>Layout</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Layout"
            multiple={false}
            title="Select"
            allowClear
            value={singleValue}
            list={list}
            onChange={setSingleValue}
          />
        </Card>

        <Card>
          <Divider>List count more than 15, show Search</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            allowClear
            value={multipleValue}
            list={listData}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setSingleValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            title="Select"
            headerRender={() => {
              return (
                <ToolBar invert>
                  <ToolBar.Search
                    multipleValue={keyword}
                    onSearch={(newKeyword) => {
                      setKeyword(newKeyword)
                    }}
                  />
                </ToolBar>
              )
            }}
            allowClear
            value={singleValue}
            list={List.searchList(list, keyword)}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setSingleValue(newValue)
            }}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
