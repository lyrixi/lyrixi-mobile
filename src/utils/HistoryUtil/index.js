import HistoryUtil from './HistoryUtil'

// Instance methods
const History = function () {
  let s = this
  // 此方法将会自动调用
  s.back = function () {
    // 如果未返回, 则调用返回
    setTimeout(() => {
      if (window.location.href.indexOf(s.urlParameter) !== -1) {
        window.history.go(-1)
      }
    }, 100)

    // Remove handler
    window.removeEventListener('popstate', s.back, false)

    // Trigger onBack
    if (s.onBack) {
      s.onBack()
    }
  }
  s.onBack = null
  // 增加一条新的历史记录并且支持回调(此方法为新方法，不依赖History实例)
  /*
    HistoryUtil.navigate(`nestedRoute=true`, {
      onBack: () => {
        // Nested route back
      }
    })
  */
  s.navigate = function (urlParameter, { onBack }) {
    s.onBack = onBack
    s.urlParameter = urlParameter

    // 路径增加routePath
    let path = window.location.href
    if (path.indexOf(urlParameter) === -1) {
      path += `${path.indexOf('?') === -1 ? '?' : '&'}${urlParameter}`

      // 增加历史记录
      window.history.pushState(
        {
          href: path
        },
        document.title,
        path
      )
    }

    // Add handler
    window.removeEventListener('popstate', s.back, false)
    window.addEventListener('popstate', s.back, false)
  }
}

// Static methods
for (let key in HistoryUtil) {
  History[key] = HistoryUtil[key]
}

export default History
