import React from 'react'
import getAccept from './../utils/getAccept'
import Button from './Button'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传按钮
const Attach = ({
  // Value & Display Value
  sourceType,

  // Status
  disabled,

  // Style
  className,

  // Element
  uploadRender,

  uploadingRender,

  // Events
  onBeforeChoose,
  onChoose,
  onFileChange
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
      {getUploadNode()}

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

export default Attach
