import { forwardRef } from 'react'
import Taro, { useLoad } from '@tarojs/taro'

import { Page } from '@/components/Page'

import parseUrlJson from './parseUrlJson'
import uploadMedia from './uploadMedia'
import saveServer from './saveServer'
import showToast from './showToast'

// wechatMiniProgram: 0.3
const MediaUploader = () => {
  useLoad((op) => {
    // 延迟200ms，解决ios无法呼出拍照功能的问题，安卓鸿蒙无此问题
    setTimeout(() => {
      init(op)
    }, 200)
  })

  async function init(options) {
    if (!options?.id || !options?.sourceType || !options?.uploadPath) {
      showToast('缺少参数')
      return
    }
    Taro.showLoading()

    // 上传图片
    let isOk = await uploadMedia({
      sourceType: options?.sourceType ? JSON.parse(options?.sourceType) : '',
      uploadPath: options?.uploadPath
        ? decodeURIComponent(decodeURIComponent(options?.uploadPath))
        : 'default',
      watermark: parseUrlJson(options.watermark),
      uploadExtraFormData: parseUrlJson(options?.uploadExtraFormData)
    })
    if (typeof isOk === 'string') {
      // 取消选择
      if (isOk === '') {
        Taro.navigateBack({
          delta: 1
        })
        return
      }

      // 上传失败
      showToast(isOk)
      return
    }

    // 保存到服务器
    isOk = await saveServer(isOk, options)
    if (typeof isOk === 'string') {
      showToast(isOk)
    }

    // 返回结果
    showToast('上传成功', 3000)
  }

  return <Page style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></Page>
}

export default forwardRef(MediaUploader)
