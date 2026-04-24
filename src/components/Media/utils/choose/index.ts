import getRemainCount from './../../utils/getRemainCount'

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

export interface ChooseOptions {
  async: boolean
  maxCount?: number
  list?: MediaListItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaListItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaListItem[] | undefined>
  onChoose?: () =>
    | void
    | MediaListItem[]
    | Promise<MediaListItem[] | void | null | undefined | unknown>
  onChange?: (list: MediaListItem[], meta: { action: string }) => void | Promise<unknown>
}

// 选择文件
async function choose({
  async: asyncMode,
  maxCount,
  list,
  uploadPosition,
  uploadList,
  onChoose,
  onChange
}: ChooseOptions) {
  // 大于总数禁止选择
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

  let currentList: MediaListItem[] | null = null
  if (typeof onChoose === 'function') {
    const r = await Promise.resolve(onChoose())
    currentList = Array.isArray(r) ? (r as MediaListItem[]) : null
  }
  if (!Array.isArray(currentList) || ObjectUtil.isEmpty(currentList)) {
    return null
  }

  // 构建新的照片列表
  let newList: MediaListItem[] = []
  // 新照片放前面
  if (uploadPosition === 'start') {
    newList = [...currentList, ...(list || [])]
  }
  // 新照片放后面
  else {
    newList = [...(list || []), ...currentList]
  }

  // 异步上传
  if (asyncMode) {
    onChange && onChange(newList, { action: 'choose' })
    return newList
  }

  // 同步上传: list发生变化即开始上传
  const uploaded = await uploadList(newList, { action: 'upload' })
  return uploaded ?? newList
}

export default choose
