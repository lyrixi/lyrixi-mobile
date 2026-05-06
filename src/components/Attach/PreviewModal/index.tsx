import React, { forwardRef } from 'react'
import PreviewMain from './../PreviewMain'

import type { AttachPreviewModalProps } from './types'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Message from './../../Message'
import Toast from './../../Toast'
import NavBarModal from './../../Modal/NavBarModal'
import type { ModalRef } from './../../Modal'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil,Clipboard, Message, Toast, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

function toToastString(s: string | import('react').ReactNode): string {
  return typeof s === 'string' ? s : ''
}


// Modal
const AttachPreviewModal = forwardRef<ModalRef, AttachPreviewModalProps>(function AttachPreviewModal(
  { fileName, previewServerUrl, fileUrl, previewServerSourceType, open, portal, onClose },
  ref
) {
  // 事件
  async function handleOk() {
    if (typeof fileUrl !== 'string' || !fileUrl) {
      return
    }
    Clipboard.copy(fileUrl, {
      onSuccess: () => {
        Toast.show({
          content: toToastString(
            LocaleUtil.locale(
              '文件链接已复制到剪贴板，请粘贴到系统浏览器上预览',
              'lyrixi_b2959ce13d3b25ad624930351ab84e3e',
              undefined
            )
          ),
          maskClickable: true
        })
      },
      onError: () => {
        Message.open({
          title: toToastString(
            LocaleUtil.locale('提示', 'lyrixi_02d9819ddaaaeb1b7b22b12608c7e5ca', undefined)
          ),
          content: `${toToastString(
            LocaleUtil.locale(
              '链接复制到剪贴板失败, 请长按复制',
              'lyrixi_8c1958b63a87bd3e1fa1e550c058ffe1',
              undefined
            )
          )}<br/>${fileUrl}`
        })
      }
    })
  }

  return (
    <NavBarModal
      ref={ref}
      portal={portal}
      title={LocaleUtil.locale('附件预览', 'lyrixi_cce640e22bea3f02bd4a8c8c67500f57')}
      okNode={LocaleUtil.locale('复制链接', 'lyrixi_879058ce06da016f3e2f79bdedc3e6b8')}
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
})

export type { AttachPreviewModalProps } from './types'
export default AttachPreviewModal
