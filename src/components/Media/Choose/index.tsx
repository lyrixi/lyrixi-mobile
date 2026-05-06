import React, { type ChangeEvent, type MouseEvent } from 'react'
import Uploading from './../Uploading'

import type { MediaChooseProps } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import type { MediaListItem } from './../types'

// 上传按钮
const Choose = ({
  // Value & Display Value
  mediaType = ['image'],
  sourceType = ['album', 'camera'],

  // Style
  className,

  // Element
  uploadRender,

  uploadingRender,

  // Events
  onBeforeChoose,
  onChoose,
  onFileChange
}: MediaChooseProps) => {
  // 选择文件
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    onFileChange && onFileChange(e)
  }

  // 点击选择框
  async function handleUploadClick(e: MouseEvent<HTMLDivElement>) {
    // Fix react 16 sync events lost issues
    if (e.persist && typeof e.persist === 'function') e.persist()
    const target = e.currentTarget
    e.stopPropagation()

    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      const isOk = await onBeforeChoose(e)
      if (isOk === false) return
    }

    // 点击的是input框
    if (onFileChange) {
      // 防止选择重复图片时不触发
      const inputElement = target.querySelector('input') as HTMLInputElement | null
      if (inputElement) {
        inputElement.value = ''
        inputElement.click()
      }
      return
    }

    // 触发选择
    onChoose && onChoose(e)
  }

  // 上传node
  function renderUpload() {
    if (typeof uploadRender === 'function') {
      return uploadRender({ uploadType: 'choose' })
    }
    return null
  }

  const uploadNode = renderUpload()

  if (!onChoose && !onFileChange) return null

  const cameraOnly = sourceType.length === 1 && sourceType[0] === 'camera'
  const itemStub: MediaListItem = {}

  return (
    <div
      // Style
      className={DOMUtil.classNames('lyrixi-media-item', 'lyrixi-media-choose', className)}
      data-type="upload"
      // Events
      onClick={handleUploadClick}
    >
      {/* 拍照或者视频图标 */}
      <div
        className={DOMUtil.classNames(
          'lyrixi-media-choose-icon',
          mediaType?.includes?.('video') ? 'lyrixi-video' : null
        )}
      ></div>
      {/* 启用file框 */}
      {onFileChange && (
        <input
          type="file"
          className="lyrixi-media-choose-input-file"
          accept="image/*"
          capture={cameraOnly ? ('camera' as never) : undefined}
          // Events
          onChange={handleFileChange}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      )}
      {uploadNode && uploadNode}
      {/* 上传中 */}
      <Uploading uploadingType="choose" item={itemStub} uploadingRender={uploadingRender} />
    </div>
  )
}

export default Choose

export type { MediaChooseProps } from './types'
