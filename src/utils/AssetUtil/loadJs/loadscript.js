// https://github.com/eldargab/load-script
module.exports = function load(src, { type, async, text, attrs, onError, onSuccess } = {}) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let script = document.createElement('script')

  script.type = type || 'text/javascript'
  script.async = async
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

function setAttributes(script, attrs) {
  // eslint-disable-next-line
  for (let attr in attrs) {
    script.setAttribute(attr, attrs[attr])
  }
}

function stdOnEnd(script, { onError, onSuccess } = {}) {
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
function ieOnEnd(script, { onError, onSuccess } = {}) {
  script.onreadystatechange = function () {
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
