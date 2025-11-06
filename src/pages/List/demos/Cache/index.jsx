import React, { useRef } from 'react'
// 第三方库导入
import { LocaleUtil, Storage, Page } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import { queryData } from './../Common/api'
import Header from './../Common/Header'
import Main from './../Common/Main'
import Footer from './../Common/Footer'

// 样式图片等资源文件导入
import './../Common/index.less'

const locale = LocaleUtil.locale

// 缓存配置
const cacheConfig = { name: 'cache_pageName_list', persist: 'session' }
// 缓存列表
const Cache = () => {
  // 前进需要清除缓存
  // const history = useHistory()
  // if (Storage.getCache(`${cache.name}:list`) && history.action !== 'POP') {
  //   Storage.clearCache(cache.name, { match: 'prefix' })
  // }

  let [queryParams, setQueryParams] = Storage.useCacheState('', {
    name: `${cacheConfig.name}:queryParams`,
    persist: cacheConfig.persist
  })

  // Expose
  const mainRef = useRef(null)
  console.log('instance:', mainRef.current)

  return (
    <Page className="lyrixi-full">
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(queryParams)
          mainRef.current.reload()
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        cache={cacheConfig}
        loadData={async ({ previousResult, action }) => {
          console.log('action:', action)
          const newList = await queryData({ page: 1, rows: 20, ...queryParams })
          return {
            status: Array.isArray(newList) && newList.length === 0 ? 'empty' : undefined,
            message: '',
            list: Array.isArray(newList) ? newList : []
          }
        }}
      />

      {/* 底部 */}
      <Footer
        ok={locale('Clear cache')}
        onOk={() => {
          Storage.clearCache(cacheConfig.name, { match: 'prefix' })
          alert('Clear success!')
        }}
      />
    </Page>
  )
}

export default Cache
