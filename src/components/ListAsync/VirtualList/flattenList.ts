import isGroups from './../utils/isGroups'

import type { RawItem } from '../../List/types'

function flattenList(list: RawItem[] | undefined | null): RawItem[] {
  if (isGroups(list) === false) {
    return list || []
  }

  let flatList: RawItem[] = []
  for (let group of list!) {
    let { children, ...groupItem } = group
    groupItem.virtualData = {
      type: 'group'
    }
    flatList.push(groupItem)
    flatList.push(...(children as RawItem[]))
  }
  return flatList
}

export default flattenList
