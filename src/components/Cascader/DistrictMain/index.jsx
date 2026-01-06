import React, { useRef, useImperativeHandle, forwardRef, useEffect, useState } from 'react'

import { getList as _getList, validateList, formatType } from './utils/index.js'
import DistrictMain from './DistrictMain'
import api from './api'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Loading from './../../Loading'
import ArrayUtil from './../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, ArrayUtil } from 'lyrixi-mobile'
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

      // Status
      editableOptions,

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
    // Cascader.Main并不记录与修改外部传入的list, 所以只能在外部格式化好再传入
    let [list, setList] = useState(null)

    // eslint-disable-next-line
    type = formatType(type)

    // Expose api
    const districtMainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        ...districtMainRef.current,
        getList: getList,
        list: list
      }
    })

    useEffect(() => {
      if (!open) {
        return
      }

      // 没有合法的基础列表, 则更新列表
      initList()
      // eslint-disable-next-line
    }, [open])

    // 初始列表
    async function initList() {
      // 没有国家省市区, 则加载国家省市区
      list = await getList()
      setList(list)
      return list
    }

    // 获取国家省市区
    async function getList(customValue) {
      let currentValue = customValue || value
      return _getList(currentValue, {
        startType,
        loadCountries,
        loadCountryRegions
      })
    }

    // 加载街道, 在此之前需要加载好省市区, 以及格式化value的type
    async function loadData(tabs) {
      // 获取下钻的子级
      let lastTab = tabs[tabs.length - 1]

      // 若点击国家, 则加载省市区, 调用getList, 会直接修改原数组增加children
      if (lastTab?.type?.includes('country')) {
        Loading.show()
        let provinces = await getList(tabs)
        Loading.hide()
        if (typeof provinces === 'string') {
          return provinces
        }
      }

      // 没有国家省市区, 则报错
      if (validateList(tabs, { list, startType, type }) === false) {
        return LocaleUtil.locale('未获取到国家省市区数据')
      }

      // 获取列表的下钻的子级
      let currentNode = ArrayUtil.getDeepTreeNode(list, lastTab.id)
      if (currentNode && currentNode.children !== undefined) {
        return currentNode.children
      }

      // 列表中没有下级, 则请求下级
      Loading.show()
      let streets = await loadStreets(lastTab.id, { parent: lastTab })

      // 接口报错
      if (typeof streets === 'string') {
        Loading.hide()
        return streets
      }
      Loading.hide()

      return streets
    }

    return (
      <DistrictMain
        ref={districtMainRef}
        // Modal: Status
        open={open}
        // Value & Display Value
        value={value}
        type={type}
        list={list}
        loadData={loadData}
        // Status
        editableOptions={editableOptions}
        // Style
        listStyle={listStyle}
        listClassName={listClassName}
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        // Elements
        searchVisible={searchVisible}
        // Events
        onChange={onChange}
        onLoad={onLoad}
        onReLoad={async (tabs, { update }) => {
          // 列表为空, 则初始化列表
          if (!Array.isArray(list) || !list.length) {
            Loading.show()
            let newList = await initList()
            Loading.hide()
            if (typeof newList === 'string') {
              return newList
            }
          }

          let lastTab = Array.isArray(tabs) && tabs.length ? tabs[tabs.length - 1] : null
          // 若重新加载国家下级, 则加载省市区, 调用getList, 会直接修改原数组增加children
          if (lastTab?.type?.includes('country')) {
            Loading.show()
            let provinces = await getList(tabs)
            Loading.hide()
            if (typeof provinces === 'string') {
              return provinces
            }
          }

          // 更新当前列表
          update(tabs, { list: list, action: 'load' })
        }}
      />
    )
  }
)

export default CascaderDistrictMain
