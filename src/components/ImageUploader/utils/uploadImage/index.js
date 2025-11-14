import _ from 'lodash'

import uploadLyrixi from './../../Lyrixi/uploadItem'
import uploadWechat from './../../Wechat/uploadItem'
import uploadDingtalk from './../../Dingtalk/uploadItem'
import uploadFile from './../../Browser/uploadItem'

// 内库使用-start
import Toast from './../../../Toast'
import Bridge from './../../../../utils/Bridge'
import Device from './../../../../utils/Device'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Toast, Bridge, Device, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 导出给外部使用的工具类: 异步上传
let uploadItem = null
if (Bridge.platform === 'lyrixi') {
  uploadItem = uploadLyrixi
} else if (Bridge.platform === 'dingtalk') {
  // 鸿蒙钉钉有bug，上传方法不会带token，导致无法上传
  if (Device?.os === 'harmony') {
    uploadItem = uploadFile
  } else {
    uploadItem = uploadDingtalk
  }
} else if (Device.device === 'pc' || Bridge.platform === 'lark') {
  uploadItem = uploadFile
} else if (
  Bridge.platform === 'wechat' ||
  Bridge.platform === 'wecom' ||
  Bridge.platform === 'wechatMiniprogram' ||
  Bridge.platform === 'wecomMiniprogram'
) {
  uploadItem = uploadWechat
}

/**
 * 上传图片
 * @param {Array|Object} list ImageUploader控件返回的list
 * @param {Object} uploadConfig
 * @returns {Array} [{原item属性, filePath: '', fileUrl: '', fileThumbnail: '', status: 'choose|uploading|fail|success'}]
 */

async function uploadImage(uploadList, uploadConfig) {
  if (_.isEmpty(uploadList)) {
    return null
  }

  // 浏览器上传, 客户端不调用浏览器上传
  if (uploadConfig?.type === 'browser') {
    uploadItem = uploadFile
  }

  let list = null

  // 如果是对象则转为数组
  if (toString.call(uploadList) === '[object Object]') {
    list = [uploadList]
  }
  // 如果是数组
  else if (Array.isArray(uploadList)) {
    list = uploadList
  }

  // 过滤非法的list
  list = list.filter((item) => {
    return !_.isEmpty(item) && _.isPlainObject(item)
  })
  if (_.isEmpty(list)) {
    Toast.show({
      content: LocaleUtil.locale('uploadImage参数uploadList错误')
    })
    return null
  }

  // 不支持的平台
  if (!uploadItem) {
    Toast.show({ content: LocaleUtil.locale('不支持此平台上传') })
    return list?.map?.((item) => {
      if (!item.fileUrl?.startsWith?.('http')) {
        item.status = 'error'
      }
      return item
    })
  }

  // 开始上传
  for (let [index, item] of list.entries()) {
    // 已经上传成功的图片无需上传
    if (item?.fileUrl?.startsWith('http') && !item?.fileUrl?.startsWith?.('https://resource/')) {
      console.log('此项无需上传:', item)
      continue
    }

    console.log('上传此项:', item)
    // 开始上传
    let result = await uploadItem(item, {
      timeout: item?.timeout || uploadConfig?.timeout,
      uploadDir: item?.uploadDir || uploadConfig?.uploadDir,
      getUploadUrl: uploadConfig?.getUploadUrl,
      getUploadParams: uploadConfig?.getUploadParams,
      formatUploadedItem: uploadConfig?.formatUploadedItem
    })
    // 上传失败
    if (typeof result === 'string') {
      item.status = 'fail'
    }
    // 上传成功
    else {
      // eslint-disable-next-line
      item = result
    }
    console.log(`上传结果：`, item)

    // 重新设置list
    list[index] = item
  }
  return toString.call(uploadList) === '[object Object]' ? list[0] : list
}

export default uploadImage
