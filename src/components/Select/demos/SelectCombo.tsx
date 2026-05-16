import { useState, type CSSProperties } from 'react'
import { Page, Select, Card, ToolBar, Text, ObjectUtil } from 'lyrixi-mobile'
import type { RawItem } from '../../List/types'
import flatList from './flatList'
import groupList from './groupList'

const SelectCombo = () => {
  const [keyword, setKeyword] = useState('')
  const [singleValue, setSingleValue] = useState<RawItem | null>(null)

  const [multipleValue, setMultipleValue] = useState<RawItem[]>([
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
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(v as RawItem | null)}
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
              onChange={(v) => setMultipleValue((v as RawItem[]) ?? [])}
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
              onChange={(v) => setMultipleValue((v as RawItem[]) ?? [])}
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
              // disabled
              allowClear
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(v as RawItem | null)}
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
              onChange={(v) => setMultipleValue((v as RawItem[]) ?? [])}
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
              onChange={(v) => setMultipleValue((v as RawItem[]) ?? [])}
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
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(v as RawItem | null)}
              checkable
              checkboxPosition="left"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Group</Card.Header>
          <Card.Main>
            <Select.Combo
              placeholder="Group"
              title="Group Select"
              allowClear
              value={singleValue}
              list={groupList}
              onChange={(v) => setSingleValue(v as RawItem | null)}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Modal Style: modalStyle & modalClassName</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Single Select"
              allowClear
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(v as RawItem | null)}
              modalStyle={{ height: '300px' }}
              modalClassName="custom"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Header: Search</Card.Header>
          <Card.Main>
            <Select.Combo
              placeholder="Search"
              allowClear
              title="Select"
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
                        ObjectUtil.debounce(
                          () => {
                            setKeyword(newKeyword)
                          },
                          1000,
                          'searchDebounce'
                        )
                      }}
                    />
                  </ToolBar>
                )
              }}
              value={singleValue}
              // List filter by keyword
              list={flatList?.filter?.((item) => String(item.name ?? '').includes(keyword)) || []}
              // Keyword hightlight
              formatViewItem={(item) => {
                return {
                  title: (
                    <Text style={item.style as CSSProperties} highlight={keyword}>
                      {String(item.name ?? '')}
                    </Text>
                  )
                }
              }}
              onChange={(newValue) => {
                console.log('onChange:', newValue)
                setSingleValue(newValue as RawItem | null)
              }}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

export default SelectCombo
