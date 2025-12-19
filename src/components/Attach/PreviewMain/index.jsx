import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import supportTypes from './../utils/supportTypes'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Bridge from './../../../utils/Bridge'
import Result from './../../Result'
import Button from './../../Button'
import IFrame from './../../IFrame'
// 内库使用-end

/* 测试使用-start
import {
  LocaleUtil,
  Clipboard,
  Bridge,
  Result,
  Button,
  Toast,
  Message,
  IFrame
} from 'lyrixi-mobile'
测试使用-end */

// 附件预览
function AttachPreviewMain(
  {
    // Value & Display Value
    fileName,
    previewServerUrl, // 在线预览平台地址, 将会将fileUrl拼接到后面
    fileUrl,
    previewServerSourceType = ['image', 'video', 'audio', 'pdf']
  },
  ref
) {
  const mainRef = useRef(null)
  // 节点
  useImperativeHandle(ref, () => {
    return {
      mainElement: mainRef.current,
      getMainElement: () => mainRef.current
    }
  })

  function getSrc() {
    if (typeof fileUrl !== 'string') {
      return ''
    }
    if (previewServerUrl && typeof previewServerUrl === 'string') {
      let urlParamSrc = encodeURIComponent(encodeURIComponent(fileUrl))
      return previewServerUrl.indexOf('?') === -1
        ? `${previewServerUrl}?url=${urlParamSrc}}`
        : `${previewServerUrl}&url=${urlParamSrc}}`
    }
    return fileUrl
  }

  let newSrc = getSrc()
  if (!newSrc) return null

  return (
    <div ref={mainRef} className="lyrixi-attach-preview-main" style={{ height: '600px' }}>
      {supportTypes(fileUrl, previewServerSourceType) === false ? (
        <Result
          status="error"
          title={LocaleUtil.locale(`${fileName}`)}
          description={LocaleUtil.locale('暂不支持此类型线上预览')}
        >
          <Button
            color="primary"
            onClick={() => {
              Bridge.previewFile({ fileUrl: fileUrl })
            }}
          >
            {LocaleUtil.locale('点击预览')}
          </Button>
        </Result>
      ) : (
        <IFrame src={newSrc} />
      )}
    </div>
  )
}

export default forwardRef(AttachPreviewMain)
