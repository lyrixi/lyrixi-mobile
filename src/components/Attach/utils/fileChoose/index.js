import _ from 'lodash'
import getRemainCount from './../../../Media/utils/getRemainCount'
import validateMaxSize from './../../utils/validateMaxSize'
import supportTypes from './../../utils/supportTypes'
import convertBytes from './../../utils/convertBytes'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast} from 'lyrixi-mobile'
测试使用-end */

// 选择文件
async function fileChoose({
  file,
  async,
  maxSize,
  maxCount,
  sourceType,
  list,
  uploadPosition,
  uploadList,
  onFileChange,
  onChange
}) {
  if (file?.type !== 'file') return false

  if (!file || !file.files?.[0]) {
    Toast.show({
      content: LocaleUtil.locale('没有选择文件，无法上传！', 'lyrixi.no.upload.file'),
      maskClickable: true
    })
    return false
  }

  // 大于总数禁止选择
  if (typeof maxCount === 'number' && getRemainCount(maxCount, list?.length || 0) <= 0) {
    Toast.show({
      content: LocaleUtil.locale(`总数不能大于${maxCount}`, 'lyrixi.maxCount.cannot.greater.than', [
        maxCount
      ]),
      maskClickable: true
    })
    return false
  }

  // 数据
  let fileData = file.files?.[0]
  let fileName = fileData?.name || file.value
  let fileURL = URL.createObjectURL(fileData)
  let fileSize = fileData?.size
  let fileType = fileData?.type
  if (fileType?.includes?.('image')) {
    fileType = 'image'
  } else if (fileType?.includes?.('video')) {
    fileType = 'video'
  } else {
    fileType = 'file'
  }

  if (maxSize && !validateMaxSize(fileSize, maxSize)) {
    Toast.show({
      content: LocaleUtil.locale(
        `文件大小不能超过${Math.abs(convertBytes(maxSize))}M`,
        'lyrixi.fileSize.cannot.greater.than',
        [Math.abs(convertBytes(maxSize))]
      )
    })
    return false
  }

  // 未获取到文件名
  if (!fileName) {
    Toast.show({
      content: LocaleUtil.locale(`未获取到文件名, 无法上传`, 'lyrixi.no.fileName'),
      maskClickable: true
    })
    return false
  }

  // 判断文件选中的类型
  if (!supportTypes(fileName, sourceType)) {
    Toast.show({
      content: LocaleUtil.locale(
        `只支持选择${sourceType.join(',')}格式的文件`,
        'lyrixi.choose.type.error',
        [sourceType.join(',')]
      ),
      maskClickable: true
    })
    return false
  }

  let currentList = null
  if (typeof onFileChange === 'function') {
    currentList = await onFileChange({
      fileName: fileName,
      fileSize: fileSize,
      fileType: fileType,
      filePath: fileData,
      fileUrl: fileURL,
      status: 'choose'
    })
  }

  if (!Array.isArray(currentList) || _.isEmpty(currentList)) {
    console.error('onFileChange返回的数据不正确, 请返回数组', currentList)
    onChange && onChange(null, { action: 'choose' })
    return null
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

export default fileChoose
