import React, { useEffect, useRef } from 'react'
// 第三方库导入
import { LocaleUtil, Storage, Page, List } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import { queryData } from './../Common/api'
import Header from './../Common/Header'
import Main from './../Common/Main'
import Footer from './../Common/Footer'
import cacheConfig from './cacheConfig'

// 样式图片等资源文件导入
import './../Common/index.less'

const locale = LocaleUtil.locale

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
  const [scrollTop, setScrollTop] = Storage.useCacheState('', {
    name: `${cacheConfig.name}:scrollTop`,
    persist: cacheConfig.persist
  })
  const [list, setList] = Storage.useCacheState('', {
    name: `${cacheConfig.name}:list`,
    persist: cacheConfig.persist
  })

  // Expose
  const mainRef = useRef(null)
  console.log('instance:', mainRef.current)

  useEffect(() => {
    // 跳转其他页面时，保存当前列表
    return () => {
      let lastList = mainRef.current?.getResult()?.list || []
      let scrollTop = mainRef.current?.mainDOM?.scrollTop || 0
      if (Array.isArray(lastList) && lastList.length > 0) {
        setList(lastList)
        setScrollTop(scrollTop)
      }
    }
  }, [])

  return (
    <Page>
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
      <List.MainUrl
      cacheName={}
        url="/url/xxx"
        params={serverParams(queryParams)}
        onLoad={(result) => {
          let listResult = formatResult(result)
          return listResult
        }}
        formatItem={(item) => {
          return formatItem(item)
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
