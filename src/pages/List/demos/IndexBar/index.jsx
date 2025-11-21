import React, { useState, useRef } from 'react'
// 第三方库导入
import { IndexBar, Page } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import Header from './../Common/Header'
import Main from './Main'

// 样式图片等资源文件导入
import './../Common/index.less'

// IndexBar列表示例
const IndexBarList = () => {
  const mainRef = useRef(null)
  const indexBarRef = useRef(null)
  let [queryParams, setQueryParams] = useState(null)
  const [anchors, setAnchors] = useState(null)
  const [indexBarVisible, setIndexBarVisible] = useState(undefined)

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(newQueryParams)
          mainRef.current.reload()
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        params={queryParams}
        onLoad={() => {
          setIndexBarVisible(true)
          indexBarRef?.current?.update?.()
        }}
      />

      {indexBarVisible && (
        <IndexBar indexBarRef={indexBarRef} scrollerDOM={mainRef?.current?.rootDOM}></IndexBar>
      )}
    </Page>
  )
}

export default IndexBarList
