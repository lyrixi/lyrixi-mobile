import React, { useState, useRef } from 'react'

import { LocaleUtil, Page, NavBar, ToolBar, Divider, Icon, Space, FooterBar } from 'lyrixi-mobile'

export default () => {
  const dropdownRef = useRef(null)
  const [mainDOM, setMainDOM] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [item, setItem] = useState(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [invertSearchActive, setInvertSearchActive] = useState(false)
  const filterRef = useRef(null)

  function getDropdownModalNode({ open, close } = {}) {
    return (
      <div>
        <div style={{ height: '300px' }}>Modal Content</div>
        <FooterBar>
          <FooterBar.Button
            onClick={() => {
              typeof close === 'function' ? close() : dropdownRef.current.close()
            }}
          >
            {LocaleUtil.locale('取消', 'lyrixi_cancel')}
          </FooterBar.Button>
          <FooterBar.Button
            className="lyrixi-primary"
            onClick={() => {
              console.log('ok')
            }}
          >
            {LocaleUtil.locale('确定', 'lyrixi_ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    )
  }

  return (
    <Page>
      <Page.Header>
        <NavBar>
          <NavBar.Title>ToolBar</NavBar.Title>
        </NavBar>
      </Page.Header>
      <Page.Main
        ref={(current) => {
          if (!current?.rootDOM) return
          setMainDOM(current?.rootDOM || null)
        }}
      >
        {/* Dropdown */}
        <Divider>Dropdown</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.Dropdown left={12} placeholder="Dropdown left" color="primary" border="fill">
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Dropdown>
            <ToolBar.Dropdown placeholder="Dropdown ref" ref={dropdownRef}>
              {getDropdownModalNode()}
            </ToolBar.Dropdown>
            <ToolBar.Dropdown placeholder="Dropdown modal">
              {getDropdownModalNode()}
            </ToolBar.Dropdown>
            <ToolBar.Dropdown right={12} placeholder="Dropdown right">
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Dropdown>
          </ToolBar>
        </div>

        <Divider>DateRange</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.DateRange
              arrowRender={({ open }) => {
                if (open) {
                  return '^'
                }
                return '>'
              }}
              portal={mainDOM}
              placeholder={'DateRange'}
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              placeholder="DateRange"
              format="MM-DD"
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              border="fill"
              placeholder="DateRange"
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
          </ToolBar>
        </div>

        <Divider>List</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.List
              left={12}
              portal={mainDOM}
              placeholder="List"
              value={item}
              onChange={setItem}
              list={[
                {
                  disabled: true,
                  id: '',
                  name: 'Disabled'
                },
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
            />
            <ToolBar.List
              portal={mainDOM}
              border="fill"
              placeholder="List"
              value={item}
              onChange={setItem}
              list={[
                {
                  disabled: true,
                  id: '',
                  name: 'Disabled'
                },
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
            />
          </ToolBar>
        </div>

        <Divider>ActionSheet</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.ActionSheet
              portal={mainDOM}
              // color="primary"
              // border="fill"
              placeholder="List"
              value={item}
              onChange={setItem}
              list={[
                {
                  disabled: true,
                  id: '',
                  name: 'Disabled'
                },
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
            />
          </ToolBar>
        </div>

        {/* Button */}
        <Divider>Button</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.Button shape="square" onClick={() => console.log(1)}>
              <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
            </ToolBar.Button>
            <Space.Compact>
              <ToolBar.Button>1</ToolBar.Button>
              <ToolBar.Button>2</ToolBar.Button>
              <ToolBar.Button>3</ToolBar.Button>
            </Space.Compact>
            <Space.Compact>
              <ToolBar.List
                portal={mainDOM}
                arrowRender={null}
                shape="square"
                border="fill"
                comboChildren={<Icon className="lyrixi-icons lyrixi-icon-three-dots"></Icon>}
                maskStyle={{
                  zIndex: 99
                }}
                value={item}
                onChange={setItem}
                list={[
                  {
                    id: 'desc',
                    name: 'Desc'
                  },
                  {
                    id: 'asc',
                    name: 'Asc'
                  }
                ]}
              />
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter border="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
          </ToolBar>
        </div>

        {/* Filter */}
        <Divider>Filter Side</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.Button
              onClick={() => {
                filterRef.current?.open()
              }}
            >
              Click to toggle filter modal
            </ToolBar.Button>
            <ToolBar.Filter
              color="primary"
              shape="square"
              icon={<Icon className="lyrixi-toolbar-button-icon lyrixi-icons lyrixi-icon-search" />}
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Filter>
            <ToolBar.Filter
              ref={filterRef}
              border="fill"
              shape="square"
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Filter>
          </ToolBar>
        </div>

        <Divider>SearchBar</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.Search
              value={search}
              onSearch={(value) => {
                console.log('search:', value)
              }}
            />
            <Space.Compact>
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter border="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
          </ToolBar>
        </div>

        <Divider>SearchBar active</Divider>
        <div className="lyrixi-toolbar-bg">
          <ToolBar>
            <ToolBar.Search
              value={search}
              readOnly
              onClick={() => {
                setSearchActive(true)
              }}
            />
            <Space.Compact>
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter border="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
            {searchActive && (
              <ToolBar.SearchActive
                value={search}
                onSearch={(keyword) => {
                  setSearch(keyword)
                  console.log('search keyword:' + keyword)
                  setSearchActive(false)
                }}
                onBlur={() => {
                  setSearchActive(false)
                }}
                // onCancel={() => {
                //   setSearchActive(false)
                // }}
              />
            )}
          </ToolBar>
        </div>

        <Divider>SearchBar Invert active</Divider>
        <div className="lyrixi-toolbar-bg lyrixi-invert">
          <ToolBar invert>
            <ToolBar.Search
              value={search}
              readOnly
              onClick={() => {
                setInvertSearchActive(true)
              }}
            />
            {invertSearchActive && (
              <ToolBar.SearchActive
                value={search}
                onSearch={(keyword) => {
                  setSearch(keyword)
                  console.log('search keyword:' + keyword)
                  setInvertSearchActive(false)
                }}
                onBlur={() => {
                  setInvertSearchActive(false)
                }}
              />
            )}
          </ToolBar>
        </div>
      </Page.Main>
    </Page>
  )
}
