import React, { useState } from 'react'

// 内库使用-start
import ArrayUtil from './../../../../utils/ArrayUtil'
import LocaleUtil from '../../../../utils/LocaleUtil'
import Page from './../../../Page'
import ToolBar from './../../../ToolBar'
import Result from './../../../Result'
import List from './../../../List'
import Text from './../../../Text'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, ArrayUtil, Page, ToolBar, Result, List, Text } from 'lyrixi-mobile'
测试使用-end */

// 搜索页面
const SearchPage = ({ list: externalList, onChange, onClose }) => {
  const [list, setList] = useState([])
  const [keyword, setKeyword] = useState('')

  function handleSearch() {
    if (!keyword || !keyword.trim()) {
      setList([])
      return
    }

    const results = ArrayUtil.searchDeepTree(externalList, keyword)
    setList(results)
  }

  // 如果list不存在，则不显示搜索页面
  if (!Array.isArray(externalList) || !externalList.length) {
    return null
  }

  function getListNode() {
    if (Array.isArray(list) && list.length > 0) {
      return (
        <List
          list={list
            // 过滤掉没有搜索结果的项
            .filter((item) => Array.isArray(item.value) && item.value.length)
            // searchDeepTree过滤掉children, 否则list会当作子项把children也展示出来
            .map((item) => {
              // 构建路径名称
              let pathName = item.value
                .map((option) => {
                  return option.name
                })
                .join('/')

              // 移除children属性，避免被List组件当作子项展示
              const { children, ...restItem } = item
              return {
                ...restItem,
                title: <Text highlight={keyword}>{pathName}</Text>
              }
            })}
          onChange={onChange}
        />
      )
    }

    if (keyword) {
      return (
        <Result
          title={LocaleUtil.locale('暂无数据', 'lyrixi.no.data')}
          status={'empty'}
          className="lyrixi-cascader-main-result"
        />
      )
    }
    return null
  }

  return (
    <Page className="lyrixi-cascader-search-page">
      <Page.Header className="lyrixi-cascader-search-header">
        <ToolBar variant="filled">
          <ToolBar.SearchActive
            value={keyword}
            allowClear
            onChange={setKeyword}
            onSearch={handleSearch}
            onCancel={() => {
              onClose?.()
            }}
          />
        </ToolBar>
      </Page.Header>

      {/* 搜索结果列表 */}
      <Page.Main>{getListNode()}</Page.Main>
    </Page>
  )
}

export default SearchPage
