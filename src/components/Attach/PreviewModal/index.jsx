import React, { forwardRef } from 'react'
import PreviewMain from './../PreviewMain'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Message from './../../Message'
import Toast from './../../Toast'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil,Clipboard, Message, Toast, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const AttachPreviewModal = forwardRef(
  (
    {
      // Main: Value & Display Value
      fileName,
      previewServerUrl,
      fileUrl,
      previewServerSourceType,

      // Modal: Status
      open,

      // Modal: Elements
      portal,

      // Events
      onOpen,
      onClose
    },
    ref
  ) => {
    // 事件
    async function handleOk() {
      Clipboard.copy(fileUrl, {
        onSuccess: () => {
          Toast.show({
            content: LocaleUtil.locale(
              '文件链接已复制到剪贴板，请粘贴到系统浏览器上预览',
              'noKey_b2959ce13d3b25ad624930351ab84e3e'
            ),

            maskClickable: true
          })
        },
        onError: () => {
          Message.open({
            title: LocaleUtil.locale('提示', 'noKey_02d9819ddaaaeb1b7b22b12608c7e5ca'),
            content:
              LocaleUtil.locale(
                '链接复制到剪贴板失败, 请长按复制',
                'noKey_8c1958b63a87bd3e1fa1e550c058ffe1'
              ) + `<br/>${fileUrl}`
          })
        }
      })
    }

    return (
      <NavBarModal
        ref={ref}
        portal={portal}
        title={LocaleUtil.locale('附件预览', 'noKey_cce640e22bea3f02bd4a8c8c67500f57')}
        okNode={LocaleUtil.locale('复制链接', 'noKey_879058ce06da016f3e2f79bdedc3e6b8')}
        okVisible={true}
        onOk={handleOk}
        open={open}
        onClose={onClose}
      >
        <PreviewMain
          fileName={fileName}
          fileUrl={fileUrl}
          previewServerUrl={previewServerUrl}
          previewServerSourceType={previewServerSourceType}
        />
      </NavBarModal>
    )
  }
)

export default AttachPreviewModal
