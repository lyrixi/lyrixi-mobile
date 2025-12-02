import React from 'react'
import Item from './../Item'
import isAllowClear from './../utils/isAllowClear'

// 照片视频预览
const List = ({
  // Value & Display Value
  list, // [{id: '', fileName: '', fileThumbnail: '', fileUrl: '', status: 'choose|uploading|error|success'}]
  ellipsis,

  // Status
  allowClear,

  // Element
  uploadingRender,

  // Events
  onChange,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
}) => {
  // Delete
  function handleDelete(item, index) {
    let newList = list.filter((photo, photoIndex) => {
      return photoIndex !== index
    })
    onChange && onChange(newList, { action: 'delete' })
  }

  const maxCountVisible = ellipsis?.count

  return (
    <>
      {/* 图片列表 */}
      {list && list.length > 0
        ? list.map((item, index) => {
            if (maxCountVisible && index + 1 > maxCountVisible) return null

            // 判断当前项是否允许删除
            const canClear = typeof onChange === 'function' && isAllowClear(allowClear, item)

            return (
              <Item
                key={index}
                // Value & Display Value
                item={item}
                index={index}
                // Element
                remainCount={
                  maxCountVisible && index === maxCountVisible - 1
                    ? list.length - maxCountVisible
                    : null
                }
                uploadingType="item"
                uploadingRender={uploadingRender}
                // Events
                onDelete={canClear ? handleDelete : null}
                onReUpload={onReUpload}
                onPreview={onPreview}
              />
            )
          })
        : null}
    </>
  )
}

export default List
