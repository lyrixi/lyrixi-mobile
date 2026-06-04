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
  const rootElement = document.createElement('div')
  host.appendChild(rootElement)

  const root = createRoot(rootElement)
  messageRuntime.root = root
  messageRuntime.rootElement = rootElement
  messageRuntime.onClose = props.onClose

  const handleRequestClose = () => destroy({ animated: true })

  root.render(<MessageOpenLayer {...props} onRequestClose={handleRequestClose} />)

  props.onOpen?.()
}
