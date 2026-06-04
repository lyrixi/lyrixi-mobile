import React from 'react'
import { createRoot } from 'react-dom/client'

import close from '../close'
import { MESSAGE_ID } from '../constants'
import messageInstance from '../MessageInstance'
import MessageModal from './MessageModal'

import type { MessageOpenProps } from '../../types'

/** 打开消息对话框（全局同时仅存在一个，再次 open 会先关闭上一个） */
export default async function open(props: MessageOpenProps): Promise<void> {
  await close({ animated: false })

  const { portal: portalProp, onClose: userOnClose, ...modalProps } = props
  const portal = portalProp || document.body
  const rootElement = document.createElement('div')
  rootElement.id = MESSAGE_ID
  portal.appendChild(rootElement)

  const root = createRoot(rootElement)
  messageInstance.root = root
  messageInstance.rootElement = rootElement

  const handleClose: MessageOpenProps['onClose'] = (e) => {
    void close({ animated: true })
    userOnClose?.(e)
  }

  root.render(<MessageModal {...modalProps} onClose={handleClose} />)
}
