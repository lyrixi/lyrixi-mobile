import React from 'react'
// 内库使用-start
import { createRoot } from '../../../../utils/ReactDOMClientCompat'
// 内库使用-end

import close from '../close'
import { TOAST_ID } from '../constants'
import toastInstance from '../ToastInstance'
import Toast from '../../Toast'

import type { ToastOpenProps } from '../../types'

/** 显示 Toast（全局同时仅存在一个，再次 open 会先关闭上一个） */
function open(
  this: { defaultProps?: ToastOpenProps } | void,
  props?: ToastOpenProps
): HTMLDivElement {
  void close({ animated: false })

  const mergedProps = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  const { portal: portalProp, id, ...toastProps } = mergedProps
  const portal = portalProp || document.getElementById('root') || document.body
  const rootElement = document.createElement('div')
  rootElement.id = id || TOAST_ID
  portal.appendChild(rootElement)

  const root = createRoot(rootElement)
  toastInstance.root = root
  toastInstance.rootElement = rootElement

  root.render(<Toast {...toastProps} />)

  return rootElement
}

export default open
