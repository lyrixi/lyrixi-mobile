import React, { useImperativeHandle, forwardRef, useEffect, useState } from 'react'
import {
  loadBaseData,
  loadData as _loadData,
  formatType,
  formatDistrictValue,
  searchByKeyword
} from './utils/index'
import api from './api'
import Main from './../Main'
import DistrictMainResult from './Result'
import DistrictMainLoading from './Loading'
import type { CascaderItem, LoadDataResult } from './../types'

import type { DistrictResultState } from '../types'
import type { DistrictItem } from './../types'
import type { CascaderDistrictMainProps, LoadCountryRegionsFn, LoadStreetsFn } from '../types'

// 内库使用-start
import ObjectUtil from '../../../utils/ObjectUtil'
import ArrayUtil from '../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, LocaleUtil, ArrayUtil, Button, Result } from 'lyrixi-mobile'
测试使用-end */

// 地址选择
const CascaderDistrictMain = forwardRef<
  { loadList: () => Promise<void>; list: unknown },
  CascaderDistrictMainProps
>(
  (
    {
      // Value & Display Value
      value,
      type: typeProp,
      loadCountries = api.loadCountries,
      loadCountryRegions = api.loadCountryRegions,
      loadStreets = api.loadStreets,
      // Status
      open = true,
      searchVisible = true,
      // Style
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,
      // Events
      onChange
    },
    ref
  ) => {
    const maxType = formatType(typeProp ?? 'street')

    const [result, setResult] = useState<DistrictResultState | null>(null)

    const [fullValue, setFullValue] = useState<CascaderItem[] | null>(null)

    useEffect(() => {
      void initList()
      // eslint-disable-next-line
    }, [value])

    useImperativeHandle(ref, () => {
      return {
        loadList: initList,
        list: result?.list
      }
    })

    async function initList() {
      setResult(null)

      const baseData = await loadBaseData({
        countryId: value?.[0]?.id,
        loadCountries,
        loadCountryRegions: loadCountryRegions as (id?: string | number) => Promise<DistrictResultState>
      })

      if (baseData?.status === 'error') {
        setResult(baseData)
        return
      }

      let newValue = value
      if (value?.length && baseData?.list?.length) {
        const formatted = formatDistrictValue(ObjectUtil.cloneDeep(value) as DistrictItem[], {
          list: baseData.list as DistrictItem[],
          maxType
        })
        newValue = (formatted ?? value) as CascaderItem[]
      }

      const lastTab = newValue?.[newValue.length - 1]
      if (
        !newValue?.length ||
        ArrayUtil.getDeepTreeNode(
          (baseData?.list ?? []) as unknown as Parameters<typeof ArrayUtil.getDeepTreeNode>[0],
          lastTab?.id as string | number
        )
      ) {
        setResult(baseData)

        if (
          !ArrayUtil.isEqual(
            (fullValue ?? []) as Record<string, unknown>[],
            (newValue ?? []) as Record<string, unknown>[]
          )
        ) {
          setFullValue(newValue ?? null)
        }
        return
      }

      const districtId = value?.[value.length - 2]?.id
      if (districtId === undefined) {
        setResult(baseData)
        return
      }
      const streetsData = await loadStreets(districtId, { value: newValue })
      if (streetsData?.status === 'error') {
        setResult(streetsData)
        return
      }
      if (streetsData?.status === 'success' && baseData.list) {
        const tree = baseData.list as unknown as Parameters<typeof ArrayUtil.setDeepTreeNode>[0]
        ArrayUtil.setDeepTreeNode(tree, districtId, (node) => {
          // API rows match deep-tree shape; narrow at I/O boundary
          node.children = (streetsData?.list ?? []) as unknown as NonNullable<typeof node.children>
        })
      }

      setResult(baseData)

      if (
        !ArrayUtil.isEqual(
          (value ?? []) as Record<string, unknown>[],
          (newValue ?? []) as Record<string, unknown>[]
        )
      ) {
        setFullValue(newValue ?? null)
      }
    }

    async function loadData(
      tabs: CascaderItem[],
      _ctx: { list: CascaderItem[] }
    ): Promise<LoadDataResult> {
      const childrenData = await _loadData(tabs, {
        loadCountryRegions: loadCountryRegions as LoadCountryRegionsFn,
        loadStreets: loadStreets as LoadStreetsFn
      })
      return childrenData as LoadDataResult
    }

    return (
      <>
        {!result?.status && <DistrictMainLoading />}
        {result?.status === 'error' && (
          <DistrictMainResult
            result={result}
            onReload={initList}
            style={listStyle}
            className={listClassName}
          />
        )}
        {result?.status === 'success' && (
          <Main
            value={fullValue ?? undefined}
            list={result?.list as CascaderItem[] | undefined}
            loadData={loadData}
            listStyle={listStyle}
            listClassName={listClassName}
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            searchVisible={searchVisible}
            onSearch={(keyword, { list }) =>
              searchByKeyword(keyword, {
                list: list as never,
                type: maxType
              })
            }
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
