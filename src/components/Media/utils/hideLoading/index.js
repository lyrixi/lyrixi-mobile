// 与Attach.hideLoading共用

// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

function hideLoading(element, { failIndexes } = {}) {
  if (!element) return
  // 根节点遮罩
  element.classList.remove('lyrixi-uploading')
  // 新增按钮遮罩
  let chooseDOM = element.querySelector('[data-type="upload"]')
  if (chooseDOM) chooseDOM.classList.remove('lyrixi-uploading')
  // 当前项遮罩
  let itemsDOM = element.querySelectorAll(`[data-index]`)
  if (itemsDOM) {
    for (let itemDOM of itemsDOM) {
      let itemIndex = Number(itemDOM.getAttribute('data-index'))
      itemDOM.classList.remove('lyrixi-uploading')
      // 更新失败状态
      if (Array.isArray(failIndexes) && failIndexes.includes(itemIndex)) {
        itemDOM.classList.add('lyrixi-error')
      }
    }
  }

  Loading.hide()
}

export default hideLoading
