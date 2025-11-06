import React from 'react'
import getStatusDefault from './getStatusDefault'

// 结果页, status: empty|500|success|waiting|info|warning|error
function Result({ status, title, description, imageRender, imageUrl, children, ...props }) {
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
      return <div className="result-title">{title}</div>
    }
    return <div className="result-title">{statusDefault?.title}</div>
  }

  return (
    <div {...props} className={`lyrixi-result${props?.className ? ' ' + props.className : ''}`}>
      {/* Image */}
      {getImageNode()}

      {/* Title */}
      {getTitleNode()}

      {/* Description */}
      {description && <div className="lyrixi-result-description">{description}</div>}

      {children}
    </div>
  )
}

export default Result
