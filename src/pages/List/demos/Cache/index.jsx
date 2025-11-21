import React, { useState, useEffect, useRef } from 'react'
// 第三方库导入
import { LocaleUtil, Storage, Page } from 'lyrixi-mobile'

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
  const mainRef = useRef(null)
  // 前进需要清除缓存
  // const history = useHistory()
  // if (Storage.getCache(cacheName) && history.action !== 'POP') {
  //   Storage.clearCache(cacheName)
  // }

  let [queryParams, setQueryParams] = useState(Storage.getCache(cacheName)?.queryParams || {})

  useEffect(() => {
    // 离开页面时，更新缓存
    return () => {
      mainRef.current.updateCache({ queryParams })
    }
  }, [])

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          setQueryParams(newQueryParams)
        }}
      />

      {/* 列表 */}
      <Main ref={mainRef} cacheName={cacheName} params={queryParams} />

      {/* 底部 */}
      <Footer
        ok={locale('Save cache')}
        onOk={() => {
          console.log(mainRef.current)
          debugger
          mainRef.current.updateCache({ queryParams })
          console.log('Save cache success!')
        }}
      />
    </Page>
  )
}

export default Cache
