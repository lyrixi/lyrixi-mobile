import defaultUploadItem from './../../Browser/uploadItem'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import Toast from './../../../Toast'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

import type { AttachUploaderItem } from '../../types'

/* 测试使用-start
import { ObjectUtil, Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 导出给外部使用的工具类: 异步上传
let uploadItem: typeof defaultUploadItem = defaultUploadItem

function toToastString(s: string | import('react').ReactNode): string {
  return typeof s === 'string' ? s : ''
}

type UploadListConfig = {
  platform?: string
  getUploadUrl?: (ctx: {
    platform: string
    uploadItem: AttachUploaderItem
    result?: unknown
  }) => string | Promise<string>
  formatHeaders?: (
    headers: Record<string, string>,
    ctx: { platform: string }
  ) => Record<string, string> | Promise<Record<string, string>>
  formatPayload?: (payload: unknown, ctx: { platform: string }) => unknown
  formatResponse?: (response: unknown, ctx: { platform: string }) => unknown
}

/**
 * 上传图片
 * @param {Array|Object} pendingList AttachUploader控件返回的待传列表
 * @param {Object} uploadConfig {platform: 'browser强制上传方式', getUploadUrl, formatHeaders, formatPayload, formatResponse}
 * @returns {Array} [{原item属性, filePath: '', fileUrl: '', status: 'choose|uploading|error|success'}]
 */

async function uploadList(
  pendingList: AttachUploaderItem | AttachUploaderItem[] | null | undefined,
  uploadConfig: UploadListConfig | null | undefined
): Promise<AttachUploaderItem | AttachUploaderItem[] | null> {
  if (ObjectUtil.isEmpty(pendingList)) {
    return null
  }

  // 强制上传方式
  if (uploadConfig?.platform === 'browser') {
    uploadItem = defaultUploadItem
  }

  let list: AttachUploaderItem[] = []

  // 如果是对象则转为数组
  if (toString.call(pendingList) === '[object Object]') {
    list = [pendingList as AttachUploaderItem]
  }
  // 如果是数组
  else if (Array.isArray(pendingList)) {
    list = pendingList
  }

  // 过滤非法的list
  const filtered = list.filter((item) => {
    return !ObjectUtil.isEmpty(item) && ObjectUtil.isPlainObject(item)
  })
  if (ObjectUtil.isEmpty(filtered)) {
    Toast.show({
      content: toToastString(
        LocaleUtil.locale('uploadList参数列表错误', 'lyrixi_02e1574baeddc79ed7bfa5931dde85f0', undefined)
      )
    })
    return null
  }
  list = filtered

  // 不支持的平台
  if (!uploadItem) {
    Toast.show({
      content: toToastString(
        LocaleUtil.locale('不支持此平台上传', 'lyrixi_84281205c0ab7c4983124a98006c7014', undefined)
      )
    })
    return list.map((item) => {
      if (!item.fileUrl?.startsWith?.('http')) {
        item.status = 'error'
      }
      return item
    })
  }

  // 开始上传
  for (let index = 0; index < list.length; index++) {
    const item = list[index]
    // 已经上传成功
    if (item?.status === 'success') {
      console.log('此项无需上传:', item)
      continue
    }
    // 已经上传成功的图片无需上传
    if (item?.fileUrl?.startsWith('http') && !item?.fileUrl?.startsWith?.('https://resource/')) {
      console.log('此项无需上传:', item)
      continue
    }

    console.log('上传此项:', item)
    // 开始上传, 返回结果 {...item, status: 'success' | 'error'}
    const newItem = await uploadItem(item, {
      getUploadUrl: uploadConfig?.getUploadUrl,
      formatHeaders: uploadConfig?.formatHeaders,
      formatPayload: uploadConfig?.formatPayload,
      formatResponse: uploadConfig?.formatResponse
    })

    console.log(`上传结果：`, newItem)

    // 重新设置list
    list[index] = newItem as AttachUploaderItem
  }
  return toString.call(pendingList) === '[object Object]' ? list[0] : list
}

export default uploadList
