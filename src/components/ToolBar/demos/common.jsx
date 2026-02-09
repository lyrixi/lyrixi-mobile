import React, { useState, useRef } from 'react'

import { LocaleUtil, Page, Flex, ToolBar, Card, Icon, FooterBar } from 'lyrixi-mobile'

export default () => {
  const dropdownRef = useRef(null)
  const [mainElement, setMainElement] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [item, setItem] = useState(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [filledSearchActive, setFilledSearchActive] = useState(false)
  const filterRef = useRef(null)

  function getDropdownModalNode({ open, close } = {}) {
    return (
      <div>
        <div style={{ height: '300px' }}>Modal Content</div>
        <FooterBar>
          <FooterBar.Button
            block
            backgroundColor="default"
            onClick={() => {
              typeof close === 'function' ? close() : dropdownRef.current.close()
            }}
          >
            {LocaleUtil.locale('取消', 'lyrixi.cancel')}
          </FooterBar.Button>
          <FooterBar.Button
            block
            color="white"
            backgroundColor="primary"
            onClick={() => {
              console.log('ok')
            }}
          >
            {LocaleUtil.locale('确定', 'lyrixi.ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    )
  }

  return (
    <Page>
      <Page.Main
        ref={(current) => {
          if (!current?.element) return
          setMainElement(current?.element || null)
        }}
      >
        {/* Dropdown */}
        <Card>
          <Card.Header>Dropdown</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.Dropdown
                left={12}
                color="primary"
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown left
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={getDropdownModalNode} ref={dropdownRef}>
                Dropdown ref
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={getDropdownModalNode}>Dropdown modal</ToolBar.Dropdown>

              <ToolBar.Dropdown
                right={12}
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown right
              </ToolBar.Dropdown>
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>DateRange</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.DateRange
                arrowRender={({ open }) => {
                  if (open) {
                    return '^'
                  }
                  return '>'
                }}
                portal={mainElement}
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
                portal={mainElement}
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
                portal={mainElement}
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.List
                left={12}
                portal={mainElement}
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
                portal={mainElement}
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>ActionSheet</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.ActionSheet
                portal={mainElement}
                // color="primary"

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
          </Card.Main>
        </Card>

        {/* Button */}
        <Card>
          <Card.Header>Button</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.Button sizeEqual onClick={() => console.log(1)}>
                <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode"></Icon>
              </ToolBar.Button>
              <Flex.Compact separator={<div style={{ width: '2px' }}></div>}>
                <ToolBar.Button>1</ToolBar.Button>
                <ToolBar.Button>2</ToolBar.Button>
                <ToolBar.Button>3</ToolBar.Button>
              </Flex.Compact>
              <Flex.Compact>
                <ToolBar.List
                  portal={mainElement}
                  arrowRender={null}
                  sizeEqual
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
                >
                  <Icon className="lyrixi-iconfont lyrixi-iconfont-three-dots"></Icon>
                </ToolBar.List>

                <ToolBar.Button sizeEqual onClick={() => console.log(1)}>
                  <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode"></Icon>
                </ToolBar.Button>
                <ToolBar.Filter
                  sizeEqual
                  modalRender={() => {
                    return <div style={{ height: '300px' }}>Modal Content</div>
                  }}
                />
              </Flex.Compact>
            </ToolBar>
          </Card.Main>
        </Card>

        {/* Filter */}
        <Card>
          <Card.Header>Filter Side</Card.Header>
          <Card.Main>
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
                sizeEqual
                icon={<Icon className="lyrixi-iconfont-search" />}
                onReset={() => {
                  console.log('reset')
                }}
                onOk={() => {
                  console.log('submit')
                }}
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              />
              <ToolBar.Filter
                ref={filterRef}
                sizeEqual
                onReset={() => {
                  console.log('reset')
                }}
                onOk={() => {
                  console.log('submit')
                }}
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              />
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>SearchBar</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.Search
                value={search}
                onSearch={(value) => {
                  console.log('search:', value)
                }}
              />
              <Flex.Compact separator={<div style={{ width: '2px' }}></div>}>
                <ToolBar.Button sizeEqual onClick={() => console.log(1)}>
                  <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode"></Icon>
                </ToolBar.Button>
                <ToolBar.Filter
                  sizeEqual
                  modalRender={() => {
                    return <div style={{ height: '300px' }}>Modal Content</div>
                  }}
                />
              </Flex.Compact>
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>SearchBar active</Card.Header>
          <Card.Main>
            <ToolBar>
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
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>SearchBar active</Card.Header>
          <Card.Main>
            <ToolBar>
              {searchActive ? (
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
              ) : <>
                <ToolBar.Search
                  value={search}
                  readOnly
                  onClick={() => {
                    setSearchActive(true)
                  }}
                />
                <Flex.Compact separator={<div style={{ width: '2px' }}></div>}>
                  <ToolBar.Button sizeEqual onClick={() => console.log(1)}>
                    <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode"></Icon>
                  </ToolBar.Button>
                  <ToolBar.Filter
                    sizeEqual
                    modalRender={() => {
                      return <div style={{ height: '300px' }}>Modal Content</div>
                    }}
                  />
                </Flex.Compact>
              </>}
            </ToolBar>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>SearchBar variant active</Card.Header>
          <Card.Main>
            <ToolBar variant="filled">
              {filledSearchActive ? (
                <ToolBar.SearchActive
                  value={search}
                  onSearch={(keyword) => {
                    setSearch(keyword)
                    console.log('search keyword:' + keyword)
                    setFilledSearchActive(false)
                  }}
                  onBlur={() => {
                    setFilledSearchActive(false)
                  }}
                />
              ) : <>
                <ToolBar.Search
                  value={search}
                  readOnly
                  onClick={() => {
                    setFilledSearchActive(true)
                  }}
                />
                <Flex.Compact separator={<div style={{ width: '2px' }}></div>}>
                  <ToolBar.Button sizeEqual onClick={() => console.log(1)}>
                    <Icon className="lyrixi-iconfont lyrixi-iconfont-barcode"></Icon>
                  </ToolBar.Button>
                  <ToolBar.Filter
                    sizeEqual
                    modalRender={() => {
                      return <div style={{ height: '300px' }}>Modal Content</div>
                    }}
                  />
                </Flex.Compact>
              </>}
            </ToolBar>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
