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

  // IndexBar anchors
  const [anchors, setAnchors] = useState(null)

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
        // 列表加载完成后, 更新索引栏anchors
        onLoad={({ result, action }) => {
          let newAnchors = {}
          for (let i = 0; i < result?.list?.length; i++) {
            let item = result?.list[i]
            if (item?.anchor) {
              newAnchors[item?.anchor] = item?.anchor
            }
          }
          setAnchors(Object.values(newAnchors))
        }}
        onScrollEnd={(e) => {
          indexBarRef.current.activeAnchor()
        }}
      />

      <IndexBar anchors={anchors} ref={indexBarRef} scrollerDOM={mainRef?.current?.element} />
    </Page>
  )
}

export default IndexBarList
