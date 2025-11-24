import React from 'react'
import getStatusDefault from './getStatusDefault'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

// 结果页, status: empty|500|success|waiting|info|warning|error
function Result({
  // Value & Display Value
  status,
  title,
  description,

  // Style
  style,
  className,

  // Element
  imageRender,
  imageUrl,
  children
}) {
  let statusDefault = getStatusDefault(status)

  // 渲染图片
  function getImageNode() {
    if (imageUrl === null && imageRender === null) return null

    if (imageRender) {
      return imageRender()
    }
    if (typeof imageUrl === 'string') {
      return <img alt="" src={imageUrl} className="lyrixi-result-image" />
    }
    return statusDefault?.image
  }

  // 渲染标题
  function getTitleNode() {
    if (title === null) return null
    if (title) {
      return <div className="lyrixi-result-title">{title}</div>
    }
    return <div className="lyrixi-result-title">{statusDefault?.title}</div>
  }

  return (
    <div
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-result', className)}
    >
      {/* Element: Image */}
      {getImageNode()}

      {/* Value & Display Value: Title */}
      {getTitleNode()}

      {/* Value & Display Value: Description */}
      {description && <div className="lyrixi-result-description">{description}</div>}

      {/* Element: Children */}
      {children}
    </div>
  )
}

export default Result
