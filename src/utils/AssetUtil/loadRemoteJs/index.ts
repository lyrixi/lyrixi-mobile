import loadScript from './loadScript'
import type { LoadRemoteJsOptions } from './types'

// 动态加载script的方法
function loadRemoteJs(src: string, opts?: LoadRemoteJsOptions) {
  const {
    async,
    charset,
    text,
    type,
    id,
    defer,
    crossorigin,
    integrity,
    referrerPolicy,
    onError,
    onSuccess
  } = opts || {}
  let attrs: Record<string, string> = {}
  if (id) attrs.id = id
  if (defer) attrs.defer = ''
  if (crossorigin) attrs.crossorigin = crossorigin
  if (integrity) attrs.integrity = integrity
  if (referrerPolicy) attrs.referrerPolicy = referrerPolicy

  return new Promise((resolve) => {
    loadScript(src, {
      async: async,
      charset: charset,
      text: text,
      type: type,
      attrs: attrs,
      onError: (result: unknown) => {
        resolve(result)
        // 支持新的 onError
        onError?.(result)
      },
      onSuccess: (result: unknown) => {
        resolve(result)
        // 支持新的 onSuccess
        onSuccess?.(result)
      }
    })
  })
}

export default loadRemoteJs
