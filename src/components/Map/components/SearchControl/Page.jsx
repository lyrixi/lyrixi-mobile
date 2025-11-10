import React, { useState } from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
import ToolBar from './../../../ToolBar'
import Page from './../../../../components/Page'
import Result from './../../../Result'
import Typography from './../../../Typography'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, ToolBar, Page, Result, Typography } from 'lyrixi-mobile'
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
  let [searchList, setSearchList] = useState(null)
  const [keyword, setKeyword] = useState('')

  // 返回
  function handleBack() {
    // Reset list
    setSearchList(null)

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
      content: LocaleUtil.locale('搜索中', 'lyrixi_searching')
    })
    let list = await map.queryNearby({
      map: map,
      keyword: keyword,
      latitude: center.latitude,
      longitude: center.longitude,
      type: center.type
    })
    Loading.hide()

    setSearchList(list)
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
      <div className="lyrixi-map-searchControl-body">
        {Array.isArray(searchList) && searchList.length
          ? searchList.map((item, index) => {
              return (
                <div
                  className="lyrixi-map-searchControl-item"
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  <div className="lyrixi-map-searchControl-item-content">
                    <div className="map-searchControl-item-title">
                      <Typography.Text highlight={keyword || ''}>{item.name}</Typography.Text>
                    </div>
                    <div className="lyrixi-map-searchControl-item-content-description">
                      {item.address}
                    </div>
                  </div>
                </div>
              )
            })
          : null}

        {/* Query error */}
        {typeof searchList === 'string' && (
          <Result className="lyrixi-map-main-result" status="500" title={searchList} />
        )}
        {/* List is empty */}
        {Array.isArray(searchList) && searchList.length === 0 ? (
          <Result className="lyrixi-map-main-result" status="empty" />
        ) : null}
      </div>
    </Page>
  )
}
export default SearchPage
