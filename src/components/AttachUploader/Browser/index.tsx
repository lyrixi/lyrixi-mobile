import React, { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import _uploadItem from './uploadItem'


import type { AttachListItem, AttachItem, AttachRef } from './../../Attach/types'
import type { AttachUploaderBrowserProps, AttachUploaderItem } from './../types'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Attach from './../../Attach'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast, Attach } from 'lyrixi-mobile'
测试使用-end */

function toToastString(s: string | import('react').ReactNode): string {
  return typeof s === 'string' ? s : ''
}

const Browser = forwardRef<AttachRef, AttachUploaderBrowserProps>(function Browser(
  {
    // Value & Display Value
    list = [],
    maxCount = 5,
    maxChooseCount = 1,
    sourceType: sourceTypeProp = ['album', 'camera'],
    maxSize,
    async = false,
    reUpload = true,
    allowChoose = true,
    uploadPosition,
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    // Status
    allowClear = true,
    // Style
    className,
    // Elements
    uploadRender,
    uploadingRender,
    itemRender,
    // Events
    onBeforeChoose,
    onChange,
    onPreview
  },
  ref
) {
  void maxChooseCount
  const attachRef = useRef<AttachRef | null>(null)

  const sourceTypeList = useMemo((): string[] => {
    if (sourceTypeProp === null || sourceTypeProp === undefined) return ['album', 'camera']
    return Array.isArray(sourceTypeProp) ? sourceTypeProp : [sourceTypeProp]
  }, [sourceTypeProp])

  useImperativeHandle(ref, (): AttachRef => {
    const base = attachRef.current
    return {
      element: base?.element ?? null,
      getElement: () => base?.getElement() ?? null,
      updateStatus: () => {
        base?.updateStatus()
      },
      chooseFile: async () => {
        Toast.show({
          content: toToastString(
            LocaleUtil.locale(
              '浏览器上传模式, 不支持编程式调用拍照',
              'lyrixi_18a8c44715538c3079cf8bf9fd46fe82',
              undefined
            )
          )
        })
        return false
      },
      choose: (e) => (base ? base.choose(e) : Promise.resolve(false)),
      uploadList: (nl, m) => (base ? base.uploadList(nl, m) : Promise.resolve([])),
      showLoading: (o) => {
        base?.showLoading(o)
      },
      hideLoading: (o) => {
        base?.hideLoading(o)
      }
    }
  })

  async function uploadItem(item: AttachUploaderItem) {
    const newItem = await _uploadItem(item, {
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse
    })
    console.log('浏览器上传后新item:', newItem)
    return newItem
  }

  function isNativePayload(
    a: import('react').ChangeEvent<HTMLInputElement> | AttachItem
  ): a is AttachItem {
    return typeof a === 'object' && a !== null && a !== undefined && 'fileName' in a && 'status' in a
  }

  async function handleFileOrNative(
    arg: import('react').ChangeEvent<HTMLInputElement> | AttachItem
  ): Promise<unknown> {
    if (!isNativePayload(arg)) {
      return undefined
    }
    if (typeof onBeforeChoose === 'function') {
      const isOk = await onBeforeChoose()
      if (isOk === false) {
        return
      }
    }
    return [
      {
        status: 'choose',
        localFile: { ...arg },
        fileSize: arg.fileSize,
        fileUrl: arg.fileUrl,
        fileName: arg.fileName
      } as AttachListItem
    ]
  }

  return (
    <Attach
      ref={attachRef}
      list={list as AttachListItem[]}
      maxCount={maxCount}
      sourceType={sourceTypeList}
      maxSize={maxSize}
      async={async}
      reUpload={reUpload}
      allowChoose={allowChoose}
      allowClear={allowClear}
      className={className}
      uploadPosition={uploadPosition}
      uploadRender={uploadRender}
      uploadingRender={uploadingRender}
      itemRender={itemRender}
      previewPortal={previewPortal}
      previewServerUrl={previewServerUrl}
      previewServerSourceType={previewServerSourceType}
      onBeforeChoose={onBeforeChoose}
      onFileChange={handleFileOrNative}
      onUpload={uploadItem}
      onChange={onChange}
      onPreview={onPreview}
    />
  )
})

export default Browser
