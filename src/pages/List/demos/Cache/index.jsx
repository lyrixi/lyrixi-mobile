import React, { useEffect, useRef } from 'react'
// 第三方库导入
import { LocaleUtil, Storage, Page } from 'lyrixi-mobile'

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
        onLoad={async ({ action }) => {
          // 加载完成时，读取缓存, 恢复滚动条位置
          if (action === 'load' && mainRef.current) {
            if (scrollTop) {
              mainRef.current.mainDOM.scrollTop = scrollTop
            }
          }
        }}
        loadData={async ({ previousResult, action }) => {
          console.log('action:', action)
          // 初次加载时使用缓存
          if (action === 'load') {
            if (Array.isArray(list) && list.length > 0) {
              return {
                status: 'success',
                message: '',
                list: list
              }
            }
          }

          const result = await queryData(queryParams, {
            action: action,
            previousResult: previousResult,
            cacheConfig: cacheConfig
          })
          let newList =
            action === 'bottomRefresh' ? previousResult.list.concat(result.list) : result.list

          return {
            status: result.status,
            message: result.message,
            list: newList
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
