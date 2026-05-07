import React, { type MouseEvent } from 'react'
import Uploading from './../../Uploading'

import type { PreviewChooseProps } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

// 上传按钮
const Choose = ({
  mediaType,
  sourceType,
  onBeforeChoose,
  onChoose,
  onFileChange
}: PreviewChooseProps) => {
  // 点击选择框
  async function handleUploadClick(e: MouseEvent<HTMLDivElement>) {
    // Fix react 16 sync events lost issues
    if (e.persist && typeof e.persist === 'function') e.persist()
    let target = e.currentTarget
    e.stopPropagation()

    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      let isOk = await onBeforeChoose(e)
      if (isOk === false) return
    }

    // 点击的是input框
    if (onFileChange) {
      // 防止选择重复图片时不触发
      const inputElement = target.querySelector('input') as HTMLInputElement | null
      if (!inputElement) return
      inputElement.value = ''
      inputElement.click()
      return
    }

    // 触发选择
    onChoose && onChoose(e)
  }

  if (!onChoose && !onFileChange) return null

  // 判断是否仅相册或者仅拍照
  let fileProps: Record<string, string> = {}
  if (sourceType.length === 1 && sourceType[0] === 'camera') {
    fileProps = {
      capture: 'camera'
    }
  }
  // file框不支持仅相册
  // else if (sourceType.length === 1 && sourceType[0] === 'album') {
  //   fileProps = {
  //     capture: 'album'
  //   }
  // }

  return (
    <div
      className="lyrixi-media-preview-main-choose"
      data-type="upload"
      onClick={handleUploadClick}
    >
      <i
        className={DOMUtil.classNames(
          'lyrixi-media-preview-main-choose-icon',
          mediaType?.includes?.('video') ? 'lyrixi-video' : null
        )}
      />
      <input
        type="file"
        className="lyrixi-media-preview-main-choose-input-file"
        onChange={onFileChange}
        accept={mediaType?.includes?.('video') ? 'video/*' : 'image/*'}
        // 以下的属性值会导致: 部分安卓机会不显示拍照
        // accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"
        onClick={(e) => {
          e.stopPropagation()
        }}
        // file框属性
        {...(fileProps || {})}
      />
      {/* 上传中 */}
      <Uploading uploadingType="preview-choose" />
    </div>
  )
}
export type { PreviewChooseProps } from '../../types'

export default Choose
