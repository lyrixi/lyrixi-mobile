import getRemainCount from './../getRemainCount'
import compressImage from './compressImage'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
import Toast from './../../../Toast'
// 内库使用-end

import type { MediaListItem } from '../../types'

/* 测试使用-start
import { ObjectUtil, LocaleUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

function toToastString(s: string | import('react').ReactNode): string {
  return typeof s === 'string' ? s : ''
}

export interface MediaFileChooseOptions {
  file: HTMLInputElement
  async: boolean
  sizeType?: string[]
  maxWidth?: number
  quality?: number
  maxCount?: number
  list?: MediaListItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaListItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaListItem[] | undefined>
  onFileChange?: (payload: {
    fileName: string
    fileSize?: number
    fileType?: string
    fileUrl?: string
    filePath?: File
    status: string
  }) => Promise<MediaListItem[] | void> | MediaListItem[] | void
  onChange?: (list: MediaListItem[], meta: { action: string }) => void
}

// 选择文件
async function fileChoose({
  file,
  async: asyncMode,
  sizeType,
  maxWidth,
  quality,
  maxCount,
  list,
  uploadPosition,
  uploadList,
  onFileChange,
  onChange
}: MediaFileChooseOptions) {
  if (file.type !== 'file') return false

  if (!file.files?.[0]) {
    Toast.show({
      content: toToastString(
        LocaleUtil.locale(
          '没有选择文件，无法上传！',
          'lyrixi_9f6cc6e6521fd4edd8d40704b83e4ef7',
          undefined
        )
      ),
      maskClickable: true
    })
    return false
  }

  if (typeof maxCount === 'number' && getRemainCount(maxCount, list?.length || 0) <= 0) {
    Toast.show({
      content: toToastString(
        LocaleUtil.locale(
          `照片总数不能大于${maxCount}张`,
          'lyrixi_8e14ef24f80db899d02760b9b54c1662',
          [maxCount]
        )
      ),
      maskClickable: true
    })
    return false
  }

  let fileData = file.files[0]
  let fileType: string = fileData.type
  if (fileType?.includes?.('image')) {
    fileType = 'image'
  } else if (fileType?.includes?.('video')) {
    fileType = 'video'
  } else {
    fileType = 'file'
  }

  if (fileType !== 'video' && JSON.stringify(sizeType || []) !== JSON.stringify(['original'])) {
    try {
      const startCompressLog = Date.now()
      fileData = (await compressImage(fileData, 'file', {
        maxWidth,
        quality
      })) as File
      const endCompressLog = Date.now()
      console.log('图片压缩完成, 用时: ' + (endCompressLog - startCompressLog) / 1000 + '秒')
    } catch (error) {
      console.error('图片压缩失败, 使用原图上传:', error)
    }
  }

  let currentList: MediaListItem[] | null = null
  if (typeof onFileChange === 'function') {
    const fileURL = URL.createObjectURL(fileData)
    const r = await onFileChange({
      fileName: fileData?.name || file.value,
      fileSize: fileData?.size,
      fileType: fileType,
      fileUrl: fileURL,
      filePath: fileData,
      status: 'choose'
    })
    currentList = Array.isArray(r) ? r : null
  }

  if (!Array.isArray(currentList) || ObjectUtil.isEmpty(currentList)) {
    console.error('onFileChange返回的数据不正确, 请返回数组', currentList)
    onChange && onChange([], { action: 'choose' })
    return null
  }

  let newList: MediaListItem[] = []
  if (uploadPosition === 'start') {
    newList = [...currentList, ...(list || [])]
  } else {
    newList = [...(list || []), ...currentList]
  }

  if (asyncMode) {
    onChange && onChange(newList, { action: 'choose' })
    return newList
  }

  const uploaded = await uploadList(newList, { action: 'upload' })
  return uploaded ?? newList
}

export default fileChoose
