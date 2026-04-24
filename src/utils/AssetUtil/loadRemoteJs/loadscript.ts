// https://github.com/eldargab/load-script
/** IE8 等旧环境下 script 上存在 readystate / onreadystatechange（DOM 类型未完整收录） */
type LegacyIEScript = HTMLScriptElement & {
  onreadystatechange?: ((this: LegacyIEScript, ev: Event) => void) | null
  readyState?: string
}

module.exports = function load(
  src: string,
  opts?: {
    type?: string
    async?: boolean
    text?: string
    attrs?: Record<string, string>
    onError?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
    onSuccess?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
  }
) {
  const { type, async, text, attrs, onError, onSuccess } = opts || {}
  let head = document.head || document.getElementsByTagName('head')[0]
  let script = document.createElement('script')

  script.type = type || 'text/javascript'
  script.async = Boolean(async)
  script.src = src

  if (attrs) {
    setAttributes(script, attrs)
  }

  if (text) {
    script.text = '' + text
  }

  let onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, { onError, onSuccess })

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, { onError, onSuccess })
  }

  head.appendChild(script)
}

function setAttributes(script: HTMLScriptElement, attrs: Record<string, string>) {
  // eslint-disable-next-line
  for (let attr in attrs) {
    script.setAttribute(attr, attrs[attr])
  }
}

function stdOnEnd(
  script: HTMLScriptElement,
  opts?: {
    onError?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
    onSuccess?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
  }
) {
  const { onError, onSuccess } = opts || {}
  script.onload = function () {
    this.onerror = this.onload = null
    onSuccess &&
      onSuccess({
        status: 'success',
        script: script,
        message: ''
      })
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    onError &&
      onError({
        status: 'error',
        script: script,
        message: 'Failed to load ' + this.src
      })
  }
}

// there is no way to catch loading errors in IE8
function ieOnEnd(
  script: HTMLScriptElement,
  opts?: {
    onError?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
    onSuccess?: (r: { status: string; script: HTMLScriptElement; message: string }) => void
  }
) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError,
    onSuccess
  } = opts || {}
  const s = script as LegacyIEScript
  s.onreadystatechange = function () {
    if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
    this.onreadystatechange = null
    onSuccess &&
      onSuccess({
        status: 'success',
        script: script,
        message: ''
      })
  }
}

export {}
