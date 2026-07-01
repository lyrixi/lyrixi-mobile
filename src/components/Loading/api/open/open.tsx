import React from 'react'
import type { LoadingOpenProps } from '../../types'

import close from '../close'
import { DEFAULT_LOADING_ID } from '../constants'
import { setLoadingInstance } from '../LoadingInstance'

// 内库使用-start
import { createRoot } from '../../../../utils/ReactDOMClientCompat'
import Loading from '../../Loading'
// 内库使用-end

/** 显示 Loading（全局同时仅存在一个，再次 open 会先关闭上一个） */
function open(props?: LoadingOpenProps): HTMLDivElement {
  close()

  const { portal: portalProp, className, style, ...rest } = props || {}
  const id = DEFAULT_LOADING_ID
  const portal = portalProp || document.getElementById('root') || document.body

  const loadingProps = {
    content: rest.content,
    maskClassName: rest.maskClassName,
    maskStyle: rest.maskStyle,
    modalClassName: className,
    modalStyle: style
  }

  const rootElement = document.createElement('div')
  rootElement.id = id
  portal.appendChild(rootElement)

  const root = createRoot(rootElement)
  setLoadingInstance(id, { root, rootElement })

  root.render(<Loading {...loadingProps} />)

  return rootElement
}

export default open
