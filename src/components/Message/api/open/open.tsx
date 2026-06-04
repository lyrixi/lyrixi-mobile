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

  const portal = props.portal || document.body
  const rootElement = document.createElement('div')
  rootElement.id = MESSAGE_ID
  portal.appendChild(rootElement)

  const root = createRoot(rootElement)
  messageInstance.root = root
  messageInstance.rootElement = rootElement
  messageInstance.onClose = props.onClose

  const handleRequestClose = () => {
    void close({ animated: true })
  }

  root.render(<MessageModal {...props} onRequestClose={handleRequestClose} />)

  props.onOpen?.()
}
