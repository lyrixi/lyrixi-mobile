import React from 'react'


import type { ListPaginationQueryDataOptions, ListPaginationQueryResult } from './../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

// 兼容新 ListAsync 要求：外部仍返回数组，调用处已包装为新对象
function queryData(
  url: string,
  headers: Record<string, string> = {},
  payload: Record<string, unknown> | undefined,
  {
    rows,
    pageRef,
    previousResult,
    action,
    formatPayload,
    formatResult
  }: ListPaginationQueryDataOptions = {} as ListPaginationQueryDataOptions
): Promise<ListPaginationQueryResult> {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    if (action === 'bottomRefresh') {
      if (pageRef.current !== null) {
        (pageRef as React.MutableRefObject<number>).current++
      }
    } else {
      (pageRef as React.MutableRefObject<number>).current = 1
    }

    const baseParams: Record<string, unknown> = {
      rows: rows,
      ...(payload || {}),
      page: rows ? pageRef.current : undefined
    }
    let queryParams = (await formatPayload?.(baseParams)) || baseParams

    Request.post(url, queryParams, {
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {})
      }
    })
      .then(async (result: unknown) => {
        let newResult: ListPaginationQueryResult = formatResult
          ? await formatResult(result, { payload: queryParams })
          : (result as ListPaginationQueryResult)
        // 当前列表
        let currentList = pageRef.current === 1 ? [] : previousResult?.list

        // 加载成功
        if (newResult.status !== 'error') {
          // 判断是否暂无数据
          if (!currentList?.length && !newResult?.list?.length) {
            newResult.status = 'empty'
          }
          // 不分页
          else if (!rows) {
            newResult.status = 'noMore'
          }
          // 有总页数, 优先使用总页数判断
          else if (newResult?.totalPage) {
            if ((pageRef.current ?? 1) >= newResult?.totalPage) {
              newResult.status = 'noMore'
            } else {
              newResult.status = 'loading'
            }
          }
          // 有总行数, 优先使用总页数判断
          else if (newResult?.totalRows) {
            if (
              (currentList?.length || 0) + (newResult?.list?.length || 0) >=
              newResult?.totalRows
            ) {
              newResult.status = 'noMore'
            } else {
              newResult.status = 'loading'
            }
          }
          // 无总页数无总行数, 根据rows判断是否为最后一页
          else if ((newResult?.list?.length ?? 0) < (rows ?? 0)) {
            newResult.status = 'noMore'
          }
          // 有更多数据
          else {
            newResult.status = 'loading'
          }
        }

        resolve(newResult)
      })
      .catch((err: { data?: { message?: string } }) => {
        const fallback = LocaleUtil.locale('获取数据异常！', 'lyrixi_a085fb7c5cb81143dcec0f299fff709a')
        resolve({
          status: 'error',
          message: String(
            (typeof err?.data?.message === 'string' && err.data.message) || fallback
          ),
          list: undefined
        })
      })
  })
}

export default queryData
