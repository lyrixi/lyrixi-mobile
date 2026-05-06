import React, { useState } from 'react'
import type {
  SearchPageProps,
  SearchQueryNearbyResult,
  MapSearchActiveListComponent
} from './types'
// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
import SearchActive from './../../../ToolBar/SearchActive'
import List from './../../../List'
import Page from './../../../Page'
import Result from './../../../Result'
import Text from './../../../Text'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, ToolBar, List, Page, Result, Text } from 'lyrixi-mobile'
测试使用-end */

const MapSearchActive = SearchActive as unknown as MapSearchActiveListComponent

function isQueryResult(v: unknown): v is SearchQueryNearbyResult {
  return typeof v === 'object' && v !== null
}


// 搜索
function SearchPage({ open, map, onClose, onChange }: SearchPageProps) {
  const [result, setResult] = useState<SearchQueryNearbyResult | null>(null)
  const [keyword, setKeyword] = useState('')

  function handleBack() {
    setResult(null)
    onClose?.()
  }

  async function handleSearch(keywordVal: string) {
    if (!keywordVal || !map) {
      return
    }
    const center = map.getCenter()
    const loadMsg = LocaleUtil.locale('搜索中', 'lyrixi_9bc4c05af0d6d8e8fcad313f7614006b')
    Loading.show({
      content: typeof loadMsg === 'string' ? loadMsg : '…'
    })
    const newResult = (await map.queryNearby({
      map: map,
      keyword: keywordVal,
      latitude: center.latitude,
      longitude: center.longitude,
      type: center.type
    })) as unknown
    Loading.hide()

    setResult(isQueryResult(newResult) ? newResult : { message: 'Invalid result' })
  }

  function handleClick(item: unknown) {
    if (onChange) onChange(item)
    handleBack()
  }

  if (!open) {
    return null
  }

  const list = result?.list
  const hasList = Array.isArray(list) && list.length > 0

  return (
    <Page className="lyrixi-map-searchControl-page">
      <Page.Header className="lyrixi-map-searchControl-header">
        <MapSearchActive
          value={keyword}
          allowClear
          onSearch={(kw: string) => {
            setKeyword(kw)
            void handleSearch(kw)
          }}
          onCancel={() => {
            handleBack()
          }}
        />
      </Page.Header>

      <div className="lyrixi-map-searchControl-main">
        {hasList && list ? (
          <List
            list={list}
            onChange={handleClick}
            formatViewItem={(item: Record<string, unknown>) => {
              const name = typeof item.name === 'string' ? item.name : ''
              const address = typeof item.address === 'string' ? item.address : undefined
              return {
                ...item,
                title: <Text highlight={keyword || ''}>{name}</Text>,
                description: address
              }
            }}
          />
        ) : null}

        {typeof result?.message === 'string' && (
          <Result
            className="lyrixi-map-main-result"
            status={result?.status || 'error'}
            title={result?.message}
          />
        )}
      </div>
    </Page>
  )
}

export type { SearchPageProps } from './types'
export default SearchPage
