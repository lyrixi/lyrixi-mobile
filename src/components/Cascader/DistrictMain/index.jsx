import React, { useImperativeHandle, forwardRef, useEffect, useState } from 'react'
import _ from 'lodash'
import {
  loadBaseData,
  loadData as _loadData,
  formatType,
  formatDistrictValue
} from './utils/index.js'
import api from './api'
import Main from './../Main'
import DistrictMainResult from './Result'
import DistrictMainLoading from './Loading'

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
      searchVisible = true,

      // Events
      onSearch,
      onChange
    },
    ref
  ) => {
    // 记录完整数据列表, 国家->省市区->街道, { status: 'success' | 'error', message: string, list: [] }
    let [result, setResult] = useState(null)

    // 完整的值, 大多传入的value数据是不完整的, 没有type、parentid、disabled, 补充完整后才可使用
    let [fullValue, setFullValue] = useState(null)

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
    }, [value])

    // 初始化时, 加载国家省市区数据
    async function initList() {
      setResult(null)

      // 加载国家省市区数据
      let baseData = await loadBaseData({
        countryId: value?.[0]?.id,
        loadCountries,
        loadCountryRegions
      })

      // 获取国家省市区数据失败, 显示错误
      if (baseData?.status === 'error') {
        setResult(baseData)
        return
      }

      // 大多传入的value数据是不完整的, 没有type、parentid、disabled
      let newValue = value
      if (value?.length) {
        newValue = formatDistrictValue(_.cloneDeep(value), { list: baseData?.list, maxType: type })
      }

      // 1.无选中项, 说明国家省市区已经覆盖选中项的层级
      // 2.国家省市区已经覆盖选中项的层级
      let lastTab = newValue?.[newValue.length - 1]
      if (
        !newValue?.length ||
        ArrayUtil.getDeepTreeNode(baseData?.list, lastTab?.id)
      ) {
        setResult(baseData)

        // 如果value有变化, 则更新fullValue
        if (!ArrayUtil.isEqual(fullValue, newValue)) {
          setFullValue(newValue)
        }
        return
      }

      // 有选中项, 且选国家省市区没有此层级的子列表, 说明是街道
      let districtId = value?.[value.length - 2]?.id
      let streetsData = await loadStreets(districtId, { value: newValue })
      if (streetsData?.status === 'error') {
        setResult(streetsData)
        return
      }
      // 街道数据加载成功, 合并到国家省市区
      if (streetsData?.status === 'success') {
        ArrayUtil.setDeepTreeNode(baseData.list, districtId, (node) => {
          node.children = streetsData?.list || []
        })
      }

      setResult(baseData)

      // 如果value有变化, 则更新fullValue
      if (!ArrayUtil.isEqual(value, newValue)) {
        setFullValue(newValue)
      }
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
        {!result?.status && <DistrictMainLoading />}
        {/* 基础列表加载中或加载失败, 显示结果页 */}
        {result?.status === 'error' && (
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
            value={fullValue}
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
            onSearch={onSearch}
            onChange={(newValue) => {
              setFullValue(newValue)
              onChange?.(newValue)
            }}
          />
        )}
      </>
    )
  }
)

export default CascaderDistrictMain
