import getRemainCount from './../../utils/getRemainCount'
import compressImage from './compressImage'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, LocaleUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

// 选择文件
async function fileChoose({
  file,
  async,
  sizeType,
  maxWidth,
  quality,
  maxCount,
  list,
  uploadPosition,
  uploadList,
  onFileChange,
  onChange
}) {
  // 选择非法文件
  if (file?.type !== 'file') return false

  // 没有选择文件
  if (!file || !file.files?.[0]) {
    Toast.show({
      content: LocaleUtil.locale(
        '没有选择文件，无法上传！',
        'lyrixi_9f6cc6e6521fd4edd8d40704b83e4ef7'
      ),
      maskClickable: true
    })
    return false
  }

  // 大于总数禁止选择
  if (typeof maxCount === 'number' && getRemainCount(maxCount, list?.length || 0) <= 0) {
    Toast.show({
      content: LocaleUtil.locale(
        `照片总数不能大于${maxCount}张`,
        'lyrixi_8e14ef24f80db899d02760b9b54c1662',

        [maxCount]
      ),
      maskClickable: true
    })
    return false
  }

  // 数据
  let fileData = file.files?.[0]
  let fileType = fileData?.type
  if (fileType?.includes?.('image')) {
    fileType = 'image'
  } else if (fileType?.includes?.('video')) {
    fileType = 'video'
  } else {
    fileType = 'file'
  }

  // 压缩图片
  if (fileType !== 'video' && JSON.stringify(sizeType || []) !== JSON.stringify(['original'])) {
    try {
      let startCompressLog = Date.now()
      fileData = await compressImage(fileData, 'file', { maxWidth: maxWidth, quality: quality })
      let endCompressLog = Date.now()
      console.log('图片压缩完成, 用时: ' + (endCompressLog - startCompressLog) / 1000 + '秒')
    } catch (error) {
      console.error('图片压缩失败, 使用原图上传:', error)
    }
  }

  let currentList = null
  if (typeof onFileChange === 'function') {
    const fileURL = URL.createObjectURL(fileData)
    currentList = await onFileChange({
      fileName: fileData?.name || file.value,
      fileSize: fileData?.size,
      fileType: fileType,
      fileUrl: fileURL,
      filePath: fileData,
      status: 'choose'
    })
  }

  if (!Array.isArray(currentList) || ObjectUtil.isEmpty(currentList)) {
    console.error('onFileChange返回的数据不正确, 请返回数组', currentList)
    onChange && onChange(null, { action: 'choose' })
    return null
  }

  // 构建新的照片列表
  let newList = []
  // 新照片放前面
  if (uploadPosition === 'start') {
    newList = [...currentList, ...(list || [])]
  }
  // 新照片放后面
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
