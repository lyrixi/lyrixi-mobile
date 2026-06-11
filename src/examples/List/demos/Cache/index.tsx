import React, { useRef, useState } from 'react'

import { LocaleUtil, Page, Storage, type ListPaginationMainRef } from 'lyrixi-mobile'

import type { ListCacheStoredShape } from './types'
import Footer from './../Common/Footer'
import Header from './../Common/Header'
import Main from './../Common/Main'

import './../Common/index.less'

const locale = LocaleUtil.locale

const cacheName = 'pageName_cache'

// 缓存列表
const Cache = () => {
  const mainRef = useRef<ListPaginationMainRef | null>(null)
  // 前进需要清除缓存
  // const history = useHistory()
  // if (Storage.getCache(cacheName) && history.action !== 'POP') {
  //   Storage.clearCache(cacheName)
  // }

  const cached = Storage.getCache(cacheName) as ListCacheStoredShape
  const [queryParams, setQueryParams] = useState<Record<string, unknown>>(cached?.queryParams || {})

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams: Record<string, unknown>) => {
          setQueryParams(newQueryParams)
        }}
      />

      {/* 列表 */}
      <Main ref={mainRef} cacheName={cacheName} queryParams={queryParams} />

      {/* 底部 */}
      <Footer
        ok={String(locale('Save cache'))}
        onOk={() => {
          mainRef.current?.updateCache?.({ queryParams })
        }}
        cancel={String(locale('Clear cache'))}
        onCancel={() => {
          Storage.clearCache(cacheName)
        }}
      />
    </Page>
  )
}

export default Cache
