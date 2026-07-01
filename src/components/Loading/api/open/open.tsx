import React from 'react'

import { DEFAULT_LOADING_ID } from '../constants'
import { getLoadingInstance, setLoadingInstance } from '../LoadingInstance'

import type { LoadingOpenProps } from '../../types'

// 内库使用-start
import { createRoot } from '../../../../utils/ReactDOMClientCompat'
import Loading from '../../Loading'
// 内库使用-end

/** 显示 Loading（同一 id 再次 open 会更新当前实例） */
export default function open(props?: LoadingOpenProps): HTMLDivElement {
  const { portal: portalProp, className, style, onOpen, ...rest } = props || {}
  const id = DEFAULT_LOADING_ID
  const portal = portalProp || document.getElementById('root') || document.body

  const loadingProps = {
    content: rest.content,
    maskClassName: rest.maskClassName,
    maskStyle: rest.maskStyle,
    modalClassName: className,
    modalStyle: style
  }

  const existing = getLoadingInstance(id)
  if (existing) {
    existing.root.render(<Loading {...loadingProps} />)
    if (typeof onOpen === 'function') {
      onOpen()
    }
    return existing.rootElement
  }

  const rootElement = document.createElement('div')
  rootElement.id = id
  portal.appendChild(rootElement)

  const root = createRoot(rootElement)
  setLoadingInstance(id, { root, rootElement })

  root.render(<Loading {...loadingProps} />)

  if (typeof onOpen === 'function') {
    onOpen()
  }

  return rootElement
}
