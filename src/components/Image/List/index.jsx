import React from 'react'
import Item from './../Item'

// 照片视频预览
const List = ({
  list, // [{id: '', fileName: '', fileThumbnail: '', fileUrl: '', status: 'choose|uploading|error|success'}]
  uploading,
  ellipsis,
  allowClear,
  // Events
  onChange,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
  // ...props
}) => {
  // Delete
  function handleDelete(item, index) {
    let newList = list.filter((photo, photoIndex) => {
      return photoIndex !== index
    })
    onChange && onChange(newList, { action: 'delete' })
  }

  const maxVisible = ellipsis?.max

  return (
    <>
      {/* 图片列表 */}
      {list && list.length > 0
        ? list.map((item, index) => {
            if (maxVisible && index + 1 > maxVisible) return null
            return (
              <Item
                key={index}
                remainCount={
                  maxVisible && index === maxVisible - 1 ? list.length - maxVisible : null
                }
                item={item}
                index={index}
                uploading={uploading}
                onDelete={typeof onChange === 'function' && allowClear ? handleDelete : null}
                onReUpload={onReUpload}
                onPreview={(e) => {
                  onPreview && onPreview(item, index)
                }}
              />
            )
          })
        : null}
    </>
  )
}

export default List
