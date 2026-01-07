import React, { useImperativeHandle, forwardRef, useEffect, useState } from 'react'

import { loadBaseData, loadData as _loadData, isValueInList, formatType } from './utils/index.js'
import api from './api'
import Main from './../Main'
import DistrictMainResult from './Result'

// 内库使用-start
import ArrayUtil from '../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, ArrayUtil, Button, Result } from 'lyrixi-mobile'
测试使用-end */

// 地址选择
const CascaderDistrictMain = forwardRef(
  (
    {
      // Modal: Status
      open = true,

      // Value & Display Value
      value,
      startType, // 开始于国家country, 省份province
      type, // 'country', 'province', 'city', 'district', 'street'
      loadCountries = api.loadCountries,
      loadCountryRegions = api.loadCountryRegions,
      loadStreets = api.loadStreets,

      // Style
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,

      // Elements
      searchVisible,

      // Events
      onChange,
      onLoad
    },
    ref
  ) => {
    // 记录完整数据列表, 国家->省市区->街道, { status: 'success' | 'error', message: string, list: [] }
    let [result, setResult] = useState(null)

    // eslint-disable-next-line
    type = formatType(type)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        loadList: initList,
        list: result?.list
      }
    })

    useEffect(() => {
      // 没有合法的基础列表, 则更新列表
      initList()
      // eslint-disable-next-line
    }, [])

    // 初始化时, 加载国家省市区数据
    async function initList() {
      // 加载国家省市区数据
      let baseData = await loadBaseData({
        countryId: value?.[0]?.id,
        startType,
        loadCountries,
        loadCountryRegions
      })

      // 1.无选中项, 说明国家省市区已经覆盖选中项的层级
      // 2.国家省市区已经覆盖选中项的层级
      // 3.基础列表错误, 显示错误
      let lastTabId = value?.[value.length - 1]?.id
      if (
        !value?.length ||
        isValueInList(lastTabId, baseData?.list) ||
        baseData?.status === 'error'
      ) {
        setResult(baseData)
        onLoad?.(baseData)
        return
      }

      // 有选中项, 且选国家省市区没有此层级的子列表, 说明是街道
      let streetsData = await loadStreets(lastTabId, { value: value })
      if (streetsData?.status === 'error') {
        setResult(streetsData)
        onLoad?.(streetsData)
        return
      }

      // 当前区已经是叶子节点
      if (streetsData?.status === 'empty') {
        ArrayUtil.setDeepTreeNode(baseData.list, lastTabId, (node) => {
          node.children = []
          node.isLeaf = true
        })
      }
      // 街道数据加载成功, 合并到国家省市区
      else if (streetsData?.status === 'success') {
        ArrayUtil.setDeepTreeNode(baseData.list, lastTabId, (node) => {
          node.children = streetsData?.list || []
        })
      }

      setResult(baseData)
      onLoad?.(baseData)
    }

    // 加载国家子级列表, 或街道列表, Casacader.Main会自动将结果列表设置到result.list中
    async function loadData(tabs) {
      let childrenData = await _loadData(tabs, {
        list: result.list,
        loadCountryRegions,
        loadStreets
      })
      return childrenData
    }

    return (
      <>
        {/* 基础列表加载中或加载失败, 显示结果页 */}
        {result?.status !== 'success' && (
          <DistrictMainResult
            result={result}
            onReload={initList}
            style={listStyle}
            className={listClassName}
          />
        )}
        {/* 必须等基础列表加载成功后, 再渲染主组件 */}
        {result?.status === 'success' && (
          <Main
            // Modal: Status
            open={open}
            // Value & Display Value
            value={value}
            list={result?.list}
            loadData={loadData}
            // Style
            listStyle={listStyle}
            listClassName={listClassName}
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            // Elements
            searchVisible={searchVisible}
            // Events
            onChange={onChange}
            onReLoad={onReLoad}
          />
        )}
      </>
    )
  }
)

export default CascaderDistrictMain
