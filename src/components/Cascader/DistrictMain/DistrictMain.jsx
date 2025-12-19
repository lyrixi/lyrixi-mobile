import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import {
  formatDistrictValue
  // findDistrictLeafIndex
} from './utils'
import Main from './../Main'
import Tabs from './Tabs'

// 级联选择
const DistrictMain = forwardRef(
  (
    {
      // Modal: Status
      open = true,

      // Value & Display Value
      value,
      type = 'street', // 'country', 'province', 'city', 'district', 'street' (只有中国时才生效, 因为只有中国有省市区)
      list,
      loadData,

      // Status
      editableOptions,

      // Style
      listStyle,
      listClassName,
      optionStyle,
      optionClassName,

      // Elements
      searchVisible,

      // Events
      onChange,
      onLoad,
      onReLoad
    },
    ref
  ) => {
    // eslint-disable-next-line
    value = formatDistrictValue(value, list, type)

    // Expose api
    const districtMainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        ...districtMainRef.current
      }
    })

    useEffect(() => {
      if (Array.isArray(list) && list.length) {
        onLoad && onLoad(list)
      }
      // eslint-disable-next-line
    }, [list])

    // 点击选项前判断是否指定类型
    // async function handleBeforeChange(tabs) {
    //   if (!Array.isArray(tabs) || !tabs.length) {
    //     return tabs
    //   }

    //   // 街道无需再发请求
    //   if (typeof findDistrictLeafIndex(tabs, type) === 'number') {
    //     return tabs
    //   }

    //   // 匹配类型，没传类型则允许下钻
    //   if (!type) {
    //     return true
    //   }
    //   return tabs
    // }

    return (
      <Main
        ref={districtMainRef}
        // Modal: Status
        open={open}
        // Value & Display Value
        value={value}
        list={list}
        loadData={
          typeof loadData === 'function'
            ? (tabs, { list = null }) => {
                return loadData(tabs, {
                  list
                })
              }
            : null
        }
        // Style
        listStyle={listStyle}
        listClassName={listClassName}
        optionStyle={optionStyle}
        optionClassName={optionClassName}
        // Elements
        searchVisible={searchVisible}
        tabbarRender={({ tabs, activeTab, onActiveTabChange }) => {
          return (
            <Tabs
              list={tabs}
              value={activeTab}
              onChange={onActiveTabChange}
              // 禁用判断
              editableOptions={editableOptions}
            />
          )
        }}
        // Events
        onChange={onChange}
        onReLoad={onReLoad}
      />
    )
  }
)

export default DistrictMain
