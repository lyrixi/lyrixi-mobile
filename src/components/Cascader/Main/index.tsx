import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import sliceArray from './sliceArray'
import loadChildren from './loadChildren'
import formatValue, { type CascaderTab } from './../utils/formatValue'
import Main from './Main'
import SearchControl from './SearchControl'
import updateIsLeaf from './updateIsLeaf'
import getAnchors from './getAnchors'
import type { CascaderNode, LoadDataFn } from './../cascaderTypes'
import type { CascaderMainProps, CascaderMainRef } from './types'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import ArrayUtil from './../../../utils/ArrayUtil'
import IndexBar from './../../IndexBar'
import Loading from './../../Loading'
import Page from './../../Page'
import TabBar from './../../TabBar'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, LocaleUtil, ArrayUtil, IndexBar, Loading, Page, TabBar } from 'lyrixi-mobile'
测试使用-end */

interface ResultState {
  status: string
  list?: CascaderNode[]
  message?: ReactNode
  async?: boolean
}

// 主体
const CascaderMain = forwardRef<CascaderMainRef, CascaderMainProps>(
  (
    {
      // Value & Display Value
      value,
      list: externalList,
      loadData: externalLoadData,

      // Style
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,

      // Elements
      searchVisible,
      tabbarRender,

      // Events
      onSearch,
      onChange
    },
    ref
  ) => {
    // 全部tab
    const tabsRef = useRef<CascaderNode[]>([])


    // 选中tab
    const [activeTab, setActiveTab] = useState<CascaderNode | undefined>(undefined)


    // 选中列表, 文本则为错误
    const currentList = ArrayUtil.updateDeepTreeParentId(
      (externalList ?? []) as unknown as Parameters<typeof ArrayUtil.updateDeepTreeParentId>[0]
    ) as CascaderNode[] | null

    const [result, setResult] = useState<ResultState>(
      currentList
        ? { status: 'success', list: currentList }
        : {
          status: 'empty',
          message: LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60')
        }
    )


    // Expose
    const mainRef = useRef<HTMLDivElement>(null)


    // 初始化tabs、选中tab、列表
    useEffect(() => {
      if (
        !Array.isArray(externalList) ||
        !externalList.length ||
        ArrayUtil.isEqual(
          tabsRef.current as Record<string, unknown>[],
          (value ?? []) as Record<string, unknown>[],
          ['id', 'name']
        )
      ) {
        return
      }

      // 重置tabs
      if (tabsRef.current?.length) {
        tabsRef.current = tabsRef.current.filter((tab) => !tab.isChoose)
      }
      update(value, { action: 'load' })
      // eslint-disable-next-line
    }, [value])

    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current,
        // 更新数据
        update: update
      }
    })


    // 初始化tabs、选中tab、列表, action: 'clickItem' | 'load' | 'clickTab'
    async function update(newValue: CascaderNode[] | null | undefined, { action }: { action?: string } = {}) {
      // 更新tabs
      tabsRef.current = ObjectUtil.cloneDeep(
        (formatValue(newValue as unknown as CascaderTab[] | null | undefined) ?? []) as CascaderNode[]
      )

      // 滚动条还原
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      }

      // 无值显示根列表
      if (!newValue || ObjectUtil.isEmpty(newValue)) {
        setActiveTab(undefined)
        setResult({
          status: 'success',
          list: externalList
        })
        return
      }

      // 获取当前列表(按行为策略)
      const newResult = await getActionData(newValue, { action })

      // 接口报错, 或暂无数据
      if (newResult.status !== 'success') {
        setActiveTab(newValue[newValue.length - 1])
        setResult(newResult)
        return
      }

      // 点击项, 触发onChange
      if (action === 'clickItem') {
        onChange && onChange(newValue)
      }

      // 有子级, 则增加一个tab
      const lastTab = newValue[newValue.length - 1]
      if (!lastTab?.isLeaf) {
        tabsRef.current.push({
          isChoose: true,
          parentid: newValue[newValue.length - 1].id,
          id: '',
          name: LocaleUtil.locale('请选择', 'lyrixi_708c9d6d2ad108ab2c560530810deae9')
        })
      }

      // 选中最后一个tab, 并且更新列表
      setActiveTab(tabsRef.current[tabsRef.current.length - 1])
      setResult(newResult)
    }


    // 统一根据操作行为获取列表:
    // - clickItem/load: 优先查子级, 无子级则显示同级
    // - clickTab: 显示同级
    async function getActionData(tabs: CascaderNode[], { action }: { action?: string } = {}): Promise<ResultState> {
      if (!Array.isArray(tabs) || !tabs.length) {
        return { status: 'success', list: externalList }
      }

      const lastTab = tabs?.[tabs?.length - 1]

      // clickItem/load查子级列表
      if (['clickItem', 'load'].includes(action ?? '')) {
        // 末级节点, 查询同级列表
        const childrenData = await getChildrenData(
          tabs.filter((tab) => !tab.isChoose && !tab.isLeaf)
        )
        if (childrenData?.status !== 'empty') {
          return childrenData
        }

        // 无子级返回同级列表, 其中clickItem需要关闭选择弹窗
        return await getSiblingData(tabs)
      }
      // clickTab
      if (action === 'clickTab') {
        // 点击请选择, 查询子级列表
        if (lastTab?.isChoose) {
          return await getChildrenData(tabs.filter((tab) => !tab.isChoose))
        }

        // 点击非请选择查同级列表
        return await getSiblingData(tabs)
      }

      return { status: 'success', list: externalList }
    }


    // 获取同级列表
    async function getSiblingData(tabs: CascaderNode[]): Promise<ResultState> {
      return await getChildrenData(tabs.slice(0, tabs.length - 1))
    }


    // 获取下级列表, 没有返回null
    async function getChildrenData(tabs: CascaderNode[]): Promise<ResultState> {
      const lastTab = tabs?.[tabs?.length - 1]

      // externalList为空, 或者不合法, 需要重新获取
      if (!Array.isArray(externalList) || !externalList.length) {
        return {
          status: 'error',
          message: LocaleUtil.locale('未获取到列表数据', 'lyrixi_933eceb19c1936ad8450a94e0b2500e6')
        }
      }

      // 渲染子级, 返回{status: 'success|error|empty', message: '', list:[]}
      const newResult = await loadChildren(tabs, {
        externalLoadData,
        externalList: externalList as CascaderNode[]
      })

      // 异步获取的数据, 无值则为叶子节点
      if (newResult.async && newResult.status === 'empty') {
        // 更新value的叶子节点
        if (lastTab?.id !== undefined) {
          updateIsLeaf(lastTab.id, { currentValue: tabs, value, tabsRef })
        }

        // 更新externalList的叶子节点
        if (lastTab?.id !== undefined) {
          ArrayUtil.setDeepTreeNode(
            externalList as unknown as Parameters<typeof ArrayUtil.setDeepTreeNode>[0],
            lastTab.id,
            (node) => {
              node.children = (newResult?.list ?? []) as unknown as NonNullable<typeof node.children>
              node.isLeaf = true
            }
          )
        }
      }
      // 异步获取的数据, 有值更新列表的children, 并返回
      else if (newResult.async && newResult.status === 'success') {
        if (lastTab?.id !== undefined) {
          ArrayUtil.setDeepTreeNode(
            externalList as unknown as Parameters<typeof ArrayUtil.setDeepTreeNode>[0],
            lastTab.id,
            (node) => {
              node.children = (newResult?.list ?? []) as unknown as NonNullable<typeof node.children>
            }
          )
        }
      }

      // 返回result
      return newResult as ResultState
    }


    // 点击选项, value不包含children
    function handleDrill({ children: _children, ...item }: CascaderNode) {
      // 防止用户快速点击多次触发
      Loading.show({
        id: '__lyrixi_loading_cascader_drill_mask__',
        content: 'Get children...',
        style: {
          opacity: '0'
        }
      })

      let newValue = ObjectUtil.cloneDeep(value) as CascaderNode[] | null | undefined

      // 点击项的父级为选中项
      const parentTabIndex = (value || [])?.findIndex?.((tab) => tab.id === item?.parentid)

      // 已经存在于tabs上, 截取
      if (parentTabIndex !== -1) {
        newValue = (newValue ?? []).slice(0, parentTabIndex + 1)
        newValue.push({ ...item })
      }
      // 不在tabs上, 为第一项
      else {
        newValue = [{ ...item }]
      }

      // 触发tab与列表更新(由上层value变更驱动); 若值未变化, 强制刷新子级
      update(newValue, { action: 'clickItem' })

      // 防止用户快速点击多次触发
      setTimeout(() => {
        Loading.hide({ id: '__lyrixi_loading_cascader_drill_mask__' })
      }, 300)
    }


    // Tab 激活处理(点击tab时查同级)
    const handleClickTab = async (tab: CascaderNode) => {
      // 滚动条还原
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      }

      // 点击tab时, 展示该tab同级(其父级的children)
      const activeTabs = sliceArray(tabsRef.current, tab?.id)
      const newResult = await getActionData(activeTabs, { action: 'clickTab' })

      setActiveTab(tab)
      setResult(newResult)
    }


    function renderTabs() {
      if (result?.status !== 'success') return null

      if (typeof tabbarRender === 'function') {
        return tabbarRender({
          list: tabsRef.current,
          value: activeTab,
          onChange: (item) => {
            void handleClickTab(item as CascaderNode)
          }
        })
      }

      return (
        <TabBar.Tabs
          gap="12"
          list={tabsRef.current}
          value={activeTab}
          onChange={(item) => {
            void handleClickTab(item as CascaderNode)
          }}
        />
      )
    }


    return (
      <>
        {/* 主页面 */}
        <Page full={false} className="lyrixi-cascader-page">
          {/* 索引栏: 为了防止遮住搜索页面, 需要放在搜索框上面 */}
          <IndexBar
            className="lyrixi-cascader-indexbar"
            anchors={getAnchors((result?.list ?? []) as Parameters<typeof getAnchors>[0])}
            getScrollerElement={() => mainRef.current}
          />

          {/* 搜索框 */}
          {searchVisible && Array.isArray(externalList) && externalList.length > 0 && (
            <SearchControl
              list={externalList}
              onSearch={onSearch}
              onChange={(newValue: CascaderNode[]) => {
                const lastItem = newValue[newValue.length - 1]
                newValue.length = newValue.length - 1

                handleDrill(lastItem)
              }}
            />
          )}

          {/* Tab */}
          {renderTabs()}

          {/* 主体 */}
          <Main
            ref={mainRef}
            // Value & Display Value
            value={value}
            result={result}
            // Style
            style={listStyle}
            className={listClassName}
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            // Events
            onReLoad={async () => {
              update(value, { action: 'load' })
            }}
            onSelect={(item: CascaderNode) => handleDrill(item)}
          />


        </Page>
      </>
    )
  }
)

export default CascaderMain

export type { CascaderMainProps, CascaderMainRef } from './types'
