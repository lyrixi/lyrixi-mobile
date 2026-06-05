import React, { useRef, useState } from 'react'
// 第三方库导入
import { IndexBar, Page } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import Header from './../Common/Header'
import Main from './Main'
import type { ListPaginationMainRef } from 'lyrixi-mobile'
import type { IndexBarListLoadContext, IndexBarListRowWithAnchor } from './Main/types'

// 样式图片等资源文件导入
import './../Common/index.less'

// IndexBar列表示例
const IndexBarList = () => {
  const mainRef = useRef<ListPaginationMainRef | null>(null)
  const [queryParams, setQueryParams] = useState<Record<string, unknown>>({})

  // IndexBar anchors
  const [anchors, setAnchors] = useState<string[] | null>(null)

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams: Record<string, unknown>) => {
          setQueryParams(newQueryParams)
          mainRef.current?.reload?.('reload')
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        cacheName="indexbar-list-demo"
        queryParams={queryParams}
        onLoad={({ result, action }: IndexBarListLoadContext) => {
          void action
          const newAnchors: Record<string, string> = {}
          const list = result?.list
          if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
              const item = list[i] as IndexBarListRowWithAnchor | undefined
              if (item?.anchor) {
                newAnchors[item.anchor] = item.anchor
              }
            }
          }
          setAnchors(Object.values(newAnchors))
        }}
        onScrollEnd={() => {
          /* scroll position updates handled by IndexBar scroll listener */
        }}
      />

      <IndexBar anchors={anchors ?? undefined} getScrollerElement={() => mainRef.current?.element ?? null} />
    </Page>
  )
}

export default IndexBarList
