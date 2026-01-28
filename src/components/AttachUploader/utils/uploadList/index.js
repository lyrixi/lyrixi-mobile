import _ from 'lodash'

import uploadFile from './../../Browser/uploadItem'

// 内库使用-start
import Toast from './../../../Toast'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 导出给外部使用的工具类: 异步上传
let uploadItem = uploadFile

/**
 * 上传图片
 * @param {Array|Object} pendingList AttachUploader控件返回的待传列表
 * @param {Object} uploadConfig {platform: 'browser强制上传方式', getUploadUrl: function({platform}), formatHeaders: function(header, {platform}), formatPayload: function(payload, {platform}), formatResponse: function(response, {platform})}
 * @returns {Array} [{原item属性, filePath: '', fileUrl: '', status: 'choose|uploading|error|success'}]
 */

async function uploadList(pendingList, uploadConfig) {
  if (_.isEmpty(pendingList)) {
    return null
  }

  // 强制上传方式
  if (uploadConfig?.platform === 'browser') {
    uploadItem = uploadFile
  }

  let list = null

  // 如果是对象则转为数组
  if (toString.call(pendingList) === '[object Object]') {
    list = [pendingList]
  }
  // 如果是数组
  else if (Array.isArray(pendingList)) {
    list = pendingList
  }

  // 过滤非法的list
  list = list.filter((item) => {
    return !_.isEmpty(item) && _.isPlainObject(item)
  })
  if (_.isEmpty(list)) {
    Toast.show({
      content: LocaleUtil.locale('uploadList参数列表错误', 'lyrixi_02e1574baeddc79ed7bfa5931dde85f0')
    })
    return null
  }

  // 不支持的平台
  if (!uploadItem) {
    Toast.show({
      content: LocaleUtil.locale('不支持此平台上传', 'lyrixi_84281205c0ab7c4983124a98006c7014')
    })
    return list?.map?.((item) => {
      if (!item.fileUrl?.startsWith?.('http')) {
        item.status = 'error'
      }
      return item
    })
  }

  // 开始上传
  for (let [index, item] of list.entries()) {
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
    let newItem = await uploadItem(item, {
      getUploadUrl: uploadConfig?.getUploadUrl,
      formatHeaders: uploadConfig?.formatHeaders,
      formatPayload: uploadConfig?.formatPayload,
      formatResponse: uploadConfig?.formatResponse
    })

    console.log(`上传结果：`, newItem)

    // 重新设置list
    list[index] = newItem
  }
  return toString.call(pendingList) === '[object Object]' ? list[0] : list
}

export default uploadList
