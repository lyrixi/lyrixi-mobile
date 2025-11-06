import React from 'react'
import Button from './Button'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传按钮
const Attach = ({
  className,
  // file框属性
  fileProps,

  // 上传DOM和状态
  upload,
  uploading,

  // Events
  onBeforeChoose,
  onChoose,
  onFileChange,
  disabled
}) => {
  // 选择文件
  function handleFileChange(e) {
    onFileChange && onFileChange(e)
  }

  // 点击选择框
  async function handleUploadClick(e) {
    // Fix react 16 sync events lost issues
    if (e.persist && typeof e.persist === 'function') e.persist()
    let target = e.currentTarget
    e.stopPropagation()

    if (target.classList.contains('lyrixi-disabled')) {
      return
    }

    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      let goOn = await onBeforeChoose(e)
      if (goOn === false) return
    }

    // 点击的是input框
    if (onFileChange) {
      // 防止选择重复图片时不触发
      let inputDOM = target.querySelector('input')
      inputDOM.value = ''
      inputDOM.click()
      return
    }

    // 触发选择
    onChoose && onChoose(e)
  }

  // 上传node
  function getUploadNode() {
    if (typeof upload === 'function') {
      return upload({ disabled, uploading })
    }
    if (React.isValidElement(upload)) {
      return upload
    }
    return null
  }

  const uploadNode = getUploadNode()

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
      {uploadNode ? uploadNode : <Button disabled={disabled} uploading={uploading} />}

      {/* 启用file框 */}
      {onFileChange && (
        <input
          type="file"
          className="lyrixi-attach-choose-input-file"
          onChange={handleFileChange}
          onClick={(e) => {
            e.stopPropagation()
          }}
          {...(fileProps || {})}
        />
      )}
    </div>
  )
}

export default Attach
