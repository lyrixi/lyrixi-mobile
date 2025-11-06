// 默认行高
import { defaultRowHeight } from './defaultConstant'

function getEllipsisStyle({ rows, rowHeight }, containerDOM) {
  let ellipsisStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: rows,
    maxHeight: rows * (rowHeight || defaultRowHeight) + 'px',
    lineHeight: rowHeight || defaultRowHeight + 'px'
  }

  if (containerDOM) {
    for (let key in ellipsisStyle) {
      containerDOM.style[key] = ellipsisStyle[key]
    }
  }
  return ellipsisStyle
}

export default getEllipsisStyle
