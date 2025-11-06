// 第三方库导入
import React, { useEffect, useState } from 'react'
import { Device, Bridge, Result, LocaleUtil } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import { queryTabs, querySlides, queryData } from './api'
import Content from './Content'
import Head from './Head'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 日报报表卡片组件（日报分析）
const DailyCard = () => {
  const title =
    decodeURIComponent(decodeURIComponent(Device.getUrlParameter('title') || '')) ||
    locale('部门报表')

  // Tabs
  let [tabs, setTabs] = useState(null)
  const [tab, setTab] = useState(null)

  // Slides
  const [slides, setSlides] = useState(null)
  const [slide, setSlide] = useState(null)

  // 数据: { status: 'empty|500', message: '', data: {  } }
  const [result, setResult] = useState(null)

  useEffect(() => {
    // 初始化数据
    initData()

    // eslint-disable-next-line
  }, [])

  // 加载数据
  async function initData() {
    // 加载tabs
    let tabsResult = await queryTabs()
    if (tabsResult.status) {
      setResult(tabsResult)
      return
    }

    setTabs(tabsResult.data)
    setTab(tabsResult.data[0])

    // 加载slides
    let slidesResult = await querySlides()
    if (slidesResult.status) {
      setResult(slidesResult)
      return
    }

    setSlides(slidesResult.data)
    setSlide(slidesResult.data[0])

    // 加载数据
    updateData({
      tabId: tabsResult.data[0]?.id,
      slideId: slidesResult.data[0]?.id
    })
  }

  // 更新数据
  async function updateData(params) {
    // 加载数据
    let dataResult = await queryData(params)

    setResult(dataResult)
  }

  // Slide Change
  function handleSlideChange(newSlide) {
    setSlide(newSlide)
    updateData({
      tabId: tab?.id,
      slideId: newSlide?.id
    })
  }

  // Tab Change
  function handleTabChange(newTab) {
    setTab(newTab[0])
    updateData({
      tabId: newTab[0]?.id,
      slideId: slide?.id
    })
  }

  return (
    <div>
      {/* 头部 */}
      <Head
        title={title}
        tabs={tabs}
        tab={tab}
        slides={slides}
        slide={slide}
        onTabChange={handleTabChange}
        onSlideChange={handleSlideChange}
      />

      {/* Data success */}
      {result?.data && (
        <Content
          data={result.data}
          onClick={() => {
            Bridge.openWindow({
              title: title,
              url: `xx?title=${encodeURIComponent(encodeURIComponent(title))}`
            })
          }}
        />
      )}

      {/* Data error */}
      {result?.status && <Result status={result.status} title={result.message} />}
    </div>
  )
}

export default DailyCard
