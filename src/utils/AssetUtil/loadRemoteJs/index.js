// 动态加载script的方法
function loadRemoteJs(
  src,
  {
    async,
    charset,
    text,
    type,
    // 动态属性
    id,
    defer,
    crossorigin,
    integrity,
    referrerPolicy,
    onError,
    onSuccess
  } = {}
) {
  let attrs = {}
  if (id) attrs.id = id
  if (defer) attrs.defer = defer
  if (crossorigin) attrs.crossorigin = crossorigin
  if (integrity) attrs.integrity = integrity
  if (referrerPolicy) attrs.referrerPolicy = referrerPolicy

  return new Promise((resolve) => {
    const loadScript = require('./loadscript.js')
    loadScript(src, {
      async: async,
      charset: charset,
      text: text,
      type: type,
      attrs: attrs,
      onError: (result) => {
        resolve(result)
        // 支持新的 onError
        onError?.(result)
      },
      onSuccess: (result) => {
        resolve(result)
        // 支持新的 onSuccess
        onSuccess?.(result)
      }
    })
  })
}

export default loadRemoteJs
