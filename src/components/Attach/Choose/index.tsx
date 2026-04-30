import React, { type ChangeEvent, type MouseEvent } from 'react'
import getAccept from './../utils/getAccept'
import Button from './Button'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface AttachChooseProps {
  sourceType: string[]
  disabled?: boolean
  className?: string
  uploadRender?: (ctx: { uploadingType: string }) => React.ReactNode
  uploadingRender?: (ctx: { uploadingType: string }) => React.ReactNode
  onBeforeChoose?: (e: MouseEvent<HTMLDivElement>) => boolean | void | Promise<boolean | void>
  onChoose?: (e: MouseEvent<HTMLDivElement>) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

// 上传按钮
const AttachChoose = ({
  sourceType,
  disabled,
  className,
  uploadRender,
  uploadingRender,
  onBeforeChoose,
  onChoose,
  onFileChange
}: AttachChooseProps) => {
  // 选择文件
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    onFileChange?.(e)
  }

  // 点击选择框
  async function handleUploadClick(e: MouseEvent<HTMLDivElement>) {
    // Fix react 16 sync events lost issues
    e.persist?.()
    const target = e.currentTarget
    e.stopPropagation()

    if (target.classList.contains('lyrixi-disabled')) {
      return
    }

    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      const goOn = await onBeforeChoose(e)
      if (goOn === false) return
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
    onChoose?.(e)
  }

  // 上传node
  function renderUpload() {
    if (typeof uploadRender === 'function') {
      return uploadRender({ uploadingType: 'choose' })
    }
    return <Button disabled={disabled} uploadingRender={uploadingRender} />
  }

  const fileProps = {
    accept: getAccept(sourceType)
  }

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-attach-choose',
        disabled && 'lyrixi-disabled',
        className
      )}
      onClick={handleUploadClick}
    >
      {/* 上传按钮 */}
      {renderUpload()}

      {/* 启用file框 */}
      {onFileChange && (
        <input
          type="file"
          className="lyrixi-attach-choose-input-file"
          {...fileProps}
          onChange={handleFileChange}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      )}
    </div>
  )
}

export default AttachChoose
