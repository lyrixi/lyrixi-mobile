import React, { useState, useRef } from 'react'
// 第三方库导入
import { LocaleUtil, Storage, Page } from 'lyrixi-mobile'
import type { ListPaginationRef } from 'lyrixi-mobile/components/ListPagination/Main'

// 公共组件导入

// 内部组件导入
import Header from './../Common/Header'
import Main from './../Common/Main'
import Footer from './../Common/Footer'

// 样式图片等资源文件导入
import './../Common/index.less'

const locale = LocaleUtil.locale

const cacheName = 'pageName_cache'

// 缓存列表
const Cache = () => {
  const mainRef = useRef<ListPaginationRef | null>(null)
  // 前进需要清除缓存
  // const history = useHistory()
  // if (Storage.getCache(cacheName) && history.action !== 'POP') {
  //   Storage.clearCache(cacheName)
  // }

  const cached = Storage.getCache(cacheName) as { queryParams?: Record<string, unknown> } | null | undefined
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
          console.log(mainRef.current)
          // 离开页面时，更新缓存
          mainRef.current?.updateCache({ queryParams })
          console.log('Save cache success!')
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
