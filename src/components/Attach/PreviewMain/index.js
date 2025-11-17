import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import supportTypes from './../utils/supportTypes'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Bridge from './../../../utils/Bridge'
import Toast from './../../Toast'
import Result from './../../Result'
import Button from './../../Button'
import Message from './../../Message'
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
    viewerUrl, // 在线预览平台地址, 将会将fileUrl拼接到后面
    fileUrl,
    types = ['image', 'video', 'audio', 'pdf']
  },
  ref
) {
  const mainRef = useRef(null)
  // 节点
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current
    }
  })

  function getSrc() {
    if (typeof fileUrl !== 'string') {
      return ''
    }
    if (viewerUrl && typeof viewerUrl === 'string') {
      let urlParamSrc = encodeURIComponent(encodeURIComponent(fileUrl))
      return viewerUrl.indexOf('?') === -1
        ? `${viewerUrl}?url=${urlParamSrc}}`
        : `${viewerUrl}&url=${urlParamSrc}}`
    }
    return fileUrl
  }

  let newSrc = getSrc()
  if (!newSrc) return null

  return (
    <div ref={mainRef} className="lyrixi-attach-preview-main" style={{ height: '600px' }}>
      {supportTypes(fileUrl, types) === false ? (
        <Result
          status="error"
          title={LocaleUtil.locale(`${fileName}`)}
          description={LocaleUtil.locale('暂不支持此类型线上预览')}
        >
          {Bridge.platform === 'lyrixi' ? (
            <Button
              color="primary"
              onClick={() => {
                Bridge.previewFile({ url: fileUrl })
              }}
            >
              {LocaleUtil.locale('点击预览')}
            </Button>
          ) : (
            <Button
              className="map-result-button-retry lyrixi-primary"
              onClick={() => {
                Clipboard.copy(fileUrl, {
                  onSuccess: () => {
                    Toast.show({
                      content: LocaleUtil.locale('链接已复制到剪贴板')
                    })
                  },
                  onError: () => {
                    Message.open({
                      title: LocaleUtil.locale('提示'),
                      content:
                        LocaleUtil.locale('链接复制到剪贴板失败, 请长按复制') + `<br/>${fileUrl}`
                    })
                  }
                })
              }}
            >
              {LocaleUtil.locale('复制连接')}
            </Button>
          )}
        </Result>
      ) : (
        <IFrame src={newSrc} />
      )}
    </div>
  )
}

export default forwardRef(AttachPreviewMain)
