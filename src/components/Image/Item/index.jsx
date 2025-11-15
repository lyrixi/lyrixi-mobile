import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Img from './Img'
import Uploading from './../Uploading'
import Reload from './Reload'
import Delete from './Delete'
import RemainCount from './RemainCount'

// 照片视频预览
const Item = ({
  // Value & Display Value
  item,
  index,
  remainCount,

  // Element
  uploading,

  // Events
  onDelete,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
}) => {
  return (
    <div
      // Element
      data-index={index}
      // Style, 状态status: choose|uploading|fail|success
      className={DOMUtil.classNames('lyrixi-media-item', item.className, item.status)}
      // Events
      onClick={(e) => {
        e.stopPropagation()

        onPreview && onPreview(e)
      }}
    >
      {/* 缩略图 */}
      {item.fileLocalUrl || item.fileThumbnail ? (
        <Img fileUrl={item.fileLocalUrl || item.fileThumbnail} />
      ) : null}

      {/* 重新上传图标 */}
      <Reload
        onClick={(e) => {
          onReUpload && onReUpload(item, index)
        }}
      />

      {/* 上传中 */}
      <Uploading uploading={uploading} item={item} />

      {/* 自定义dom */}
      {item.children}

      {/* 删除按钮 */}
      {onDelete && (
        <Delete
          onClick={(e) => {
            onDelete(item, index)
          }}
        />
      )}

      {typeof remainCount === 'number' && remainCount > 0 ? (
        <RemainCount count={remainCount} />
      ) : null}
    </div>
  )
}

export default Item
