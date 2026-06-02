import isGroups from './../utils/isGroups'

import type { ListItem } from '../../List/types'

function flattenList(list: ListItem[] | undefined | null): ListItem[] {
  if (isGroups(list) === false) {
    return list || []
  }

  let flatList: ListItem[] = []
  for (let group of list!) {
    let { children, ...groupItem } = group
    groupItem.virtualData = {
      type: 'group'
    }
    flatList.push(groupItem)
    flatList.push(...(children as ListItem[]))
  }
  return flatList
}

export default flattenList
