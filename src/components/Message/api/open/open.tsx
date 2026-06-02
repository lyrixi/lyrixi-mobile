import React from 'react'
import { createRoot } from 'react-dom/client'

import destroy from '../destroy'
import { messageRuntime } from '../messageRuntime'
import MessageOpenLayer from './MessageOpenLayer'

import type { MessageOpenProps } from '../../types'

/** 打开消息对话框（全局同时仅存在一个，再次 open 会先关闭上一个） */
export default function open(props: MessageOpenProps): void {
  destroy({ animated: false })

  const host = props.portal || document.body
  const container = document.createElement('div')
  host.appendChild(container)

  const root = createRoot(container)
  messageRuntime.root = root
  messageRuntime.container = container
  messageRuntime.onClose = props.onClose

  const handleRequestClose = () => destroy({ animated: true })

  root.render(<MessageOpenLayer {...props} onRequestClose={handleRequestClose} />)

  props.onOpen?.()
}
