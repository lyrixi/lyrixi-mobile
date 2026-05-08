import flattenList from './flattenList'
import equalItems from './equalItems'

import type { ListAsyncMemoRerenderListProps, ListAsyncMemoRerenderRawItem } from './../../types'

// 暂时不使用, 会导致children里的Loading以及错误信息等不更新
// Rerender if value or list changes
const memoRerender = (prevProps: ListAsyncMemoRerenderListProps, nextProps: ListAsyncMemoRerenderListProps) => {
  // Equal value
  let prevValue = flattenList(prevProps.value as ListAsyncMemoRerenderRawItem[] | null | undefined)
  let nextValue = flattenList(nextProps.value as ListAsyncMemoRerenderRawItem[] | null | undefined)
  if (equalItems(prevValue, nextValue) === false) {
    return false
  }

  // Equal list
  let prevItems = flattenList(prevProps.list)
  let nextItems = flattenList(nextProps.list)
  return equalItems(prevItems, nextItems)
}

export default memoRerender
