import _ from 'lodash'
import getRemainCount from './../../../Media/utils/getRemainCount'
import convertBytes from './../../utils/convertBytes'
import validateMaxSize from './../../utils/validateMaxSize'
import supportTypes from './../../utils/supportTypes'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast} from 'lyrixi-mobile'
测试使用-end */

// 选择文件
async function choose({
  async,
  maxSize,
  maxCount,
  sourceType,
  list,
  uploadPosition,
  uploadList,
  onChoose,
  onChange
}) {
  // 大于总数禁止选择
  if (typeof maxCount === 'number' && getRemainCount(maxCount, list?.length || 0) <= 0) {
    Toast.show({
      content: LocaleUtil.locale(
        `总数不能大于${maxCount}`,
        'lyrixi_2d5162e5511eccd2b3d50796122c6e6e',
        [maxCount]
      ),
      maskClickable: true
    })
    return false
  }

  let currentList = null
  if (typeof onChoose === 'function') {
    currentList = await onChoose()
  }

  if (!Array.isArray(currentList) || ObjectUtil.isEmpty(currentList)) {
    return null
  }

  // 判断文件选中的类型
  for (let item of currentList) {
    if (!item.fileName) {
      Toast.show({
        content: LocaleUtil.locale(
          `未返回fileName, 无法上传`,
          'lyrixi_45e987cc2779b005b900456f27379057'
        ),
        maskClickable: true
      })
      return
    }
    if (!item.fileSize) {
      Toast.show({
        content: LocaleUtil.locale(
          `未返回fileSize, 无法上传`,
          'lyrixi_e5b09f4014f2ebe2a1e0825b0595666d'
        ),
        maskClickable: true
      })
      return false
    }
    if (!supportTypes(item.fileName, sourceType)) {
      Toast.show({
        content: LocaleUtil.locale(
          `只支持选择${sourceType.join(',')}格式的文件`,
          'lyrixi_457455da3092979a928191f95101f15e',

          [sourceType.join(',')]
        ),
        maskClickable: true
      })
      return false
    }

    if (maxSize && !validateMaxSize(item.fileSize, maxSize)) {
      Toast.show({
        content: LocaleUtil.locale(
          `文件大小不能超过${Math.abs(convertBytes(maxSize))}M`,
          'lyrixi_e547fe1eb4fcf8bef4514d7519ee6eb9',

          [Math.abs(convertBytes(maxSize))]
        )
      })
      return false
    }
  }

  // 构建新的列表
  let newList = []
  // 新放前面
  if (uploadPosition === 'start') {
    newList = [...currentList, ...(list || [])]
  }
  // 新放后面
  else {
    newList = [...(list || []), ...currentList]
  }

  // 异步上传
  if (async) {
    onChange && onChange(newList, { action: 'choose' })
    return newList
  }

  // 同步上传: list发生变化即开始上传
  newList = await uploadList(newList, { action: 'upload' })
  return newList
}

export default choose
