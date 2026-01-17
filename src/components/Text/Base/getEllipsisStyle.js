// 默认行高
import { defaultRowHeight } from './defaultConstant'

function getEllipsisStyle({ rows, rowHeight }, containerElement) {
  let ellipsisStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: rows,
    maxHeight: rows * (rowHeight || defaultRowHeight) + 'px',
    lineHeight: (rowHeight || defaultRowHeight) + 'px'
  }

  if (containerElement) {
    for (let key in ellipsisStyle) {
      containerElement.style[key] = ellipsisStyle[key]
    }
  }
  return ellipsisStyle
}

export default getEllipsisStyle
