// 与Attach.showLoading共用

// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

// 显隐Loading
function showLoading(rootDOM, { content, index } = {}) {
  if (!rootDOM) return
  // 根节点遮罩
  rootDOM.classList.add('lyrixi-uploading')
  // 新增按钮遮罩
  let chooseDOM = rootDOM.querySelector('[data-type="upload"]')
  if (chooseDOM) chooseDOM.classList.add('lyrixi-uploading')
  // 当前项遮罩
  let itemDOM = typeof index === 'number' ? rootDOM.querySelector(`[data-index="${index}"]`) : null
  if (itemDOM) {
    itemDOM.classList.remove('lyrixi-error')
    itemDOM.classList.add('lyrixi-uploading')
  }

  Loading.show(content ? { content } : { className: 'lyrixi-hide' })
}

export default showLoading
