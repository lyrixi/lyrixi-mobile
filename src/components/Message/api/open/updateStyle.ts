import type { MessageUpdateStyleParams } from './../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

// 更新class和style
function updateStyle(
  target: HTMLElement | null,
  { style, className, baseClassName }: MessageUpdateStyleParams
) {
  if (!target) return

  // 还原样式
  target.setAttribute('style', '')
  target.setAttribute('class', baseClassName)

  // 增加样式
  if (style) {
    // eslint-disable-next-line
    for (let stylePropName in style) {
      const el = target.style as unknown as Record<string, string>
      const v = style[stylePropName]
      el[stylePropName] = v == null ? '' : String(v)
    }
  }
  if (className) {
    target.className = DOMUtil.classNames(baseClassName, className)
  }
}

export default updateStyle
