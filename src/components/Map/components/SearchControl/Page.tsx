import React, { useState } from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
import ToolBar from './../../../ToolBar'
import List from './../../../List'
import Page from './../../../Page'
import Result from './../../../Result'
import Text from './../../../Text'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, ToolBar, List, Page, Result, Text } from 'lyrixi-mobile'
测试使用-end */

// 搜索
function SearchPage({
  // Status
  open,

  // Element
  map,

  // Events
  onClose,
  onChange
}) {
  let [result, setResult] = useState(null)
  const [keyword, setKeyword] = useState('')

  // 返回
  function handleBack() {
    // Reset list
    setResult(null)

    // Go back
    onClose && onClose()
  }

  // 搜索
  async function handleSearch(keyword) {
    if (!keyword) {
      return
    }
    let center = map.getCenter()
    Loading.show({
      content: LocaleUtil.locale('搜索中', 'lyrixi_9bc4c05af0d6d8e8fcad313f7614006b')
    })
    let newResult = await map.queryNearby({
      map: map,
      keyword: keyword,
      latitude: center.latitude,
      longitude: center.longitude,
      type: center.type
    })
    Loading.hide()

    setResult(newResult)
  }

  // 选中一项
  function handleClick(item) {
    if (onChange) onChange(item)

    // 回到地图页面
    handleBack()
  }

  if (!open) {
    return null
  }

  return (
    <Page className="lyrixi-map-searchControl-page">
      {/* Element: Header */}
      <Page.Header className="lyrixi-map-searchControl-header">
        <ToolBar.SearchActive
          // Value & Display Value
          value={keyword}
          // Status
          allowClear
          // Events
          onSearch={(keyword) => {
            setKeyword(keyword)
            handleSearch(keyword)
          }}
          onCancel={() => {
            handleBack()
          }}
        />
      </Page.Header>

      {/* Element: Body */}
      <div className="lyrixi-map-searchControl-main">
        {Array.isArray(result?.list) && result?.list.length ? (
          <List
            list={result?.list}
            onChange={handleClick}
            formatViewItem={(item) => {
              return {
                ...item,
                title: <Text highlight={keyword || ''}>{item.name}</Text>,
                description: item.address
              }
            }}
          />
        ) : null}

        {/* Query error or empty */}
        {typeof result?.message === 'string' && (
          <Result
            className="lyrixi-map-main-result"
            status={result?.status}
            title={result?.message}
          />
        )}
      </div>
    </Page>
  )
}
export default SearchPage
