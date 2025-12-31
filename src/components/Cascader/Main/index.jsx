import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react'
import _ from 'lodash'
import loadData from './loadData'
import sliceArray from './sliceArray'
import getTreeChildren from './getTreeChildren'
import formatValue from './../utils/formatValue'
import formatList from './../utils/formatList'
import ListItem from './ListItem'
import SearchHeader from './SearchPage/Header'
import SearchPage from './SearchPage'
import updateIsLeaf from './updateIsLeaf'
import getAnchors from './getAnchors'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import ArrayUtil from './../../../utils/ArrayUtil'
import IndexBar from './../../IndexBar'
import Loading from './../../Loading'
import Page from './../../Page'
import TabBar from './../../TabBar'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, ArrayUtil, IndexBar, Loading, Page, TabBar } from 'lyrixi-mobile'
测试使用-end */

// 主体
const Main = forwardRef(
  (
    {
      // Main: Status
      open = true,

      // Value & Display Value
      value,
      list: externalList,
      loadData: externalLoadData,

      // Style
      listStyle,
      listClassName,
      optionStyle,
      optionClassName,

      // Elements
      searchVisible,
      tabbarRender,

      // Events
      onChange,
      onReLoad
    },
    ref
  ) => {
    // 全部tab
    let tabsRef = useRef([])

    // 选中tab
    let [activeTab, setActiveTab] = useState(null)

    // 选中列表, 文本则为错误
    let [currentList, setCurrentList] = useState(formatList(externalList))

    // 搜索页面显示状态
    const [keyword, setKeyword] = useState('')
    let [searchPageVisible, setSearchPageVisible] = useState(false)
    const [searchActive, setSearchActive] = useState(false)

    // 节点
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current,
        // 更新数据
        update: update,
        // 设置叶子节点标识, id: 叶子节点id, tabs: tabs列表
        updateIsLeaf: (tabs, id) => {
          updateIsLeaf(tabs, id, { value, tabsRef })
        }
      }
    })

    // 初始化tabs、选中tab、列表
    useEffect(() => {
      if (
        !open ||
        !Array.isArray(externalList) ||
        !externalList.length ||
        ArrayUtil.isEqual(tabsRef.current, value, ['id', 'name'])
      ) {
        return
      }

      update(value, { action: 'load', list: externalList })
      // eslint-disable-next-line
    }, [open, JSON.stringify(value), JSON.stringify(externalList)])

    // 更新错误信息
    useEffect(() => {
      if (!open || typeof externalList !== 'string') {
        return
      }

      setCurrentList(externalList)
      // eslint-disable-next-line
    }, [open, JSON.stringify(externalList)])

    // 隐藏还原搜索状态
    useEffect(() => {
      if (!open) {
        resetSearch()
      }
      // eslint-disable-next-line
    }, [open])

    // 初始化tabs、选中tab、列表
    async function update(nextValue, { list: newExternalList, action } = {}) {
      // 更新externalList
      if (Array.isArray(newExternalList) && newExternalList.length) {
        // eslint-disable-next-line
        externalList = newExternalList
      }

      // 更新tabs
      tabsRef.current = _.cloneDeep(formatValue(nextValue))
      let lastTab =
        Array.isArray(nextValue) && nextValue.length ? nextValue[nextValue.length - 1] : null

      // 滚动条还原
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      }

      // 无值显示根列表
      if (!lastTab) {
        setActiveTab(null)
        setCurrentList(newExternalList)
        tabsRef.current = _.cloneDeep(formatValue(value))
        return
      }

      // 获取当前列表(按行为策略)
      let newList = await getActionList(nextValue, { action })

      // 接口报错或无数据
      if (typeof newList === 'string' || _.isEmpty(newList)) {
        setActiveTab(lastTab)
        setCurrentList(newList)
        tabsRef.current = _.cloneDeep(formatValue(value))
        return
      }

      // 点击项, 触发onChange, 只有getActionList后才会更新isLeaf, 所以onChange需要放在getActionList后
      if (action === 'clickItem') {
        onChange && onChange(nextValue, { list: newExternalList })
      }

      // 如果没有子级
      if (lastTab?.isLeaf) {
      }
      // 如果有子级, 增加请选择tab
      else {
        // 请选择
        lastTab = {
          isChoose: true,
          parentid: lastTab.id,
          id: '',
          name: LocaleUtil.locale('请选择', 'lyrixi.placeholder.select')
        }
        tabsRef.current.push(lastTab)
      }

      setActiveTab(lastTab)
      setCurrentList(newList)
    }

    // 统一根据操作行为获取列表:
    // - clickItem/load: 优先查子级, 无子级则显示同级
    // - clickTab: 显示同级
    async function getActionList(tabs, { action } = {}) {
      if (!Array.isArray(tabs) || !tabs.length) {
        return externalList
      }

      let lastTab = tabs?.[tabs?.length - 1]

      // clickItem/load查子级列表
      if (['clickItem', 'load'].includes(action)) {
        // 末级节点, 查询同级列表
        const childrenList = await getChildrenList(
          tabs.filter((tab) => !tab.isChoose && !tab.isLeaf)
        )
        if (typeof childrenList === 'string') return childrenList
        if (Array.isArray(childrenList)) return childrenList

        // 无子级返回同级列表
        return await getSiblingList(tabs)
      }

      // clickTab
      if (action === 'clickTab') {
        // 点击请选择, 查询子级列表
        if (lastTab?.isChoose) {
          return await getChildrenList(tabs.filter((tab) => !tab.isChoose))
        }

        // 点击非请选择查同级列表
        return await getSiblingList(tabs)
      }
    }

    // 获取同级列表
    async function getSiblingList(tabs) {
      let newList = await getChildrenList(tabs.slice(0, tabs.length - 1))
      return newList
    }

    // 获取下级列表, 没有返回null
    async function getChildrenList(tabs) {
      let lastTab = tabs?.[tabs?.length - 1]

      // 下级列表
      let newList = null

      // externalList为空, 或者不合法, 需要重新获取
      if (!Array.isArray(externalList) || !externalList.length) {
        return LocaleUtil.locale('未获取到列表数据')
      }

      // 无值渲染根节点
      if (!lastTab?.id) {
        return externalList
      }

      // 渲染子级
      newList = getTreeChildren(externalList, lastTab.id)

      // 无children, 动态获取子级
      if (!Array.isArray(newList)) {
        newList = await loadData(tabs, { externalLoadData, externalList })

        // 接口报错
        if (typeof newList === 'string') {
          return newList
        }

        // 无值则为叶子节点
        if (!Array.isArray(newList)) {
          // 更新value的叶子节点
          updateIsLeaf(tabs, lastTab.id, { value, tabsRef })

          // 更新externalList的叶子节点
          ArrayUtil.setDeepTreeNode(externalList, lastTab.id, (node) => {
            node.children = newList
            node.isLeaf = true
          })

          return null
        }
        // 有值更新列表的children, 并返回
        else {
          ArrayUtil.setDeepTreeNode(externalList, lastTab.id, (node) => {
            node.children = newList
          })

          return newList
        }
      }

      return newList
    }

    // 点击选项, value不包含children
    async function handleDrill({ children, ...item }) {
      // 防止用户快速点击多次触发
      Loading.show({
        id: '__lyrixi_loading_cascader_drill_mask__',
        content: 'Get children...',
        style: {
          opacity: 0
        }
      })

      let newValue = _.cloneDeep(value)

      // 点击项的父级为选中项
      let parentTabIndex = (value || [])?.findIndex?.((tab) => tab.id === item?.parentid)

      // 已经存在于tabs上, 截取
      if (parentTabIndex !== -1) {
        newValue = newValue.slice(0, parentTabIndex + 1)
        newValue.push({ ...item })
      }
      // 不在tabs上, 为第一项
      else {
        if (value?.length) {
          console.log(`lyrixi Cascader.Main: 下钻项未匹配到上级, 请检查数据是否正确`, item, value)
        }
        newValue = [{ ...item }]
      }

      // 触发tab与列表更新(由上层value变更驱动); 若值未变化, 强制刷新子级
      update(newValue, { action: 'clickItem', list: externalList })

      // 防止用户快速点击多次触发
      setTimeout(() => {
        Loading.hide({ id: '__lyrixi_loading_cascader_drill_mask__' })
      }, 300)
    }

    // Tab 激活处理(点击tab时查同级)
    const handleClickTab = async (tab) => {
      // 滚动条还原
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      }

      // 点击tab时, 展示该tab同级(其父级的children)
      let activeTabs = sliceArray(tabsRef.current, tab?.id)
      let newList = await getActionList(activeTabs, { action: 'clickTab' })

      setActiveTab(tab)
      setCurrentList(newList)
    }

    function getTabsNode() {
      if (typeof currentList === 'string') return null

      if (typeof tabbarRender === 'function') {
        return tabbarRender({
          tabs: tabsRef.current,
          activeTab: activeTab,
          onActiveTabChange: handleClickTab
        })
      }

      return (
        <TabBar.Tabs gap={12} list={tabsRef.current} value={activeTab} onChange={handleClickTab} />
      )
    }

    // 重置搜索状态
    function resetSearch() {
      setKeyword('')
      setSearchPageVisible(false)
      setSearchActive(false)
    }

    return (
      <>
        {/* 主页面 */}
        <Page full={false} className="lyrixi-cascader-main">
          {/* 搜索框 */}
          {searchVisible && Array.isArray(externalList) && externalList.length > 0 && (
            <SearchHeader
              searchActive={searchActive}
              setSearchActive={setSearchActive}
              value={keyword}
              onChange={setKeyword}
              onClick={() => setSearchPageVisible(true)}
              onCancel={resetSearch}
            />
          )}

          {searchPageVisible ? (
            // 搜索结果页面
            <SearchPage
              keyword={keyword}
              list={externalList}
              onChange={(newValue) => {
                let lastItem = newValue[newValue.length - 1]
                newValue.length = newValue.length - 1
                // eslint-disable-next-line
                value = newValue
                tabsRef.current = newValue
                resetSearch()

                handleDrill(lastItem)
              }}
            />
          ) : (
            <>
              {/* Tab */}
              {getTabsNode()}

              {/* 主体 */}
              <ListItem
                ref={mainRef}
                // Value & Display Value
                value={value}
                list={currentList}
                // Style
                style={listStyle}
                className={listClassName}
                optionStyle={optionStyle}
                optionClassName={optionClassName}
                // Events
                onReLoad={async () => {
                  if (typeof onReLoad !== 'function') return
                  let newList = await onReLoad(value, { list: externalList, update })
                  if (!newList) return
                  setCurrentList(newList)
                }}
                onSelect={(item) => handleDrill(item)}
              />
              <IndexBar
                className="lyrixi-cascader-indexbar"
                anchors={getAnchors(currentList)}
                scrollerElement={mainRef.current}
              />
            </>
          )}
        </Page>
      </>
    )
  }
)

export default Main
