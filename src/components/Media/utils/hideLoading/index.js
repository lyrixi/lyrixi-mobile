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
  let chooseElement = element.querySelector('[data-type="upload"]')
  if (chooseElement) chooseElement.classList.remove('lyrixi-uploading')
  // 当前项遮罩
  let itemsElement = element.querySelectorAll(`[data-index]`)
  if (itemsElement) {
    for (let itemElement of itemsElement) {
      let itemIndex = Number(itemElement.getAttribute('data-index'))
      itemElement.classList.remove('lyrixi-uploading')
      // 更新失败状态
      if (Array.isArray(failIndexes) && failIndexes.includes(itemIndex)) {
        itemElement.classList.add('lyrixi-error')
      }
    }
  }

  Loading.hide()
}

export default hideLoading
