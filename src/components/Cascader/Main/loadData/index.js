import _ from 'lodash'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

async function loadData(tabs, { externalLoadData, externalList }) {
  let newList = null
  if (typeof externalLoadData === 'function') {
    newList = await externalLoadData(tabs, { list: externalList })
  }

  // 接口报错
  if (typeof newList === 'string' || newList === false) {
    let errMsg =
      typeof newList === 'string' ? newList : LocaleUtil.locale('获取数据失败', 'lyrixi.data.error')

    return errMsg
  }
  // 接口返回空，则为叶子节点
  else if (_.isEmpty(newList)) {
    // 无根列表, 接口返回空, 则提示暂无数据
    if (_.isEmpty(externalList) || typeof externalList === 'string') {
      return LocaleUtil.locale('暂无数据', 'lyrixi.no.data')
    }

    // 需要更新externalList、value、tabRef.current的树结构, 增加标识isLeaf
    // 更新操作在外部使用updateIsLeaf
    return null
  }

  return newList
}

export default loadData
