import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

// 内库使用-start
import ArrayUtil from './../../../../utils/ArrayUtil'
import Result from './../../../Result'
import LocaleUtil from '../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, ArrayUtil, Result } from 'lyrixi-mobile'
测试使用-end */

// 搜索页面
const SearchPage = ({ keyword, list: treeData, onChange }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    if (!keyword || !keyword.trim()) {
      setList([])
      return
    }

    const results = ArrayUtil.searchDeepTree(treeData, keyword)
    setList(results)

    // eslint-disable-next-line
  }, [keyword])

  // 如果list不存在，则不显示搜索页面
  if (!Array.isArray(treeData) || !treeData.length) {
    return null
  }

  function getListNode() {
    if (Array.isArray(list) && list.length > 0) {
      return (
        <ListItem
          list={list}
          keyword={keyword}
          onChange={(item) => {
            onChange && onChange(item?.value)
          }}
        />
      )
    }

    if (keyword) {
      return (
        <Result
          title={LocaleUtil.locale('暂无数据', 'lyrixi.no.data')}
          status={'empty'}
          className="lyrixi-cascader-body-result"
        />
      )
    }
    return null
  }

  return (
    <div className="lyrixi-cascader-search-page">
      {/* 搜索结果列表 */}
      {getListNode()}
    </div>
  )
}

export default SearchPage
