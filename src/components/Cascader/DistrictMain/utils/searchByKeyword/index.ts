import hasIntersection from './hasIntersection'

// 内库使用-start
import ArrayUtil from './../../../../../utils/ArrayUtil'
import LocaleUtil from '../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

interface DistrictNode {
  id: string | number
  name?: string
  type?: string[]
  children?: DistrictNode[]
  path?: DistrictNode[]
  [key: string]: unknown
}

interface SearchResult {
  status: 'success' | 'empty'
  message: string
  list: DistrictNode[]
}

function searchByKeyword(
  keyword: string,
  { list: externalList, type }: { list: DistrictNode[]; type: string }
): SearchResult {
  const levelTypes = ['country', 'province', 'city', 'district', 'street']
  const currentLevelTypes = levelTypes.slice(0, levelTypes.indexOf(type) + 1)

  const currentList =
    keyword && keyword.trim()
      ? ArrayUtil.getDeepTreeNodes(externalList, (node: DistrictNode) => {
        if (
          String(node.name).includes(keyword) &&
          Array.isArray(node.type) &&
          hasIntersection(currentLevelTypes, node.type)
        ) {
          return true
        }
        return false
      })
      : []

  if (currentList.length > 0) {
    return {
      status: 'success',
      message: '',
      list: currentList.map((node: DistrictNode) => {
        const { children, ...restNode } = node
        const path = ArrayUtil.getDeepTreePredecessorNodes(externalList, node.id) as DistrictNode[]
        return {
          ...restNode,
          path: path.concat(node)
        }
      })
    }
  } else {
    return {
      status: 'empty',
      message: !keyword?.trim?.()
        ? String(
            LocaleUtil.locale('请输入关键字', 'lyrixi_db91cb073ee4c9b76289e93ae2b4aa04') ?? ''
          )
        : String(
            LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60') ?? ''
          ),
      list: []
    }
  }
}

export default searchByKeyword
