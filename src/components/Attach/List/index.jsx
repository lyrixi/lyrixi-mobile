import React, { useRef } from 'react'

import Item from './../Item'

// File List
const List = ({
  // Value & Display Value
  list, // [{ fileName: '文件名', fileUrl: '全路径', status: 'choose|uploading|error|success'}]

  // Status
  allowClear,

  // Element
  uploadingRender,

  // Events
  onChange,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
}) => {
  // 因为在click事件内改变数据的可能性, 所以更新句柄, 防止synchronization模式读取创建时的状态
  const onReUploadRef = useRef()
  const onPreviewRef = useRef()

  onReUploadRef.current = onReUpload
  onPreviewRef.current = onPreview

  // Delete
  function handleDelete(item, index) {
    let newList = list.filter((attach, attachIndex) => {
      return attachIndex !== index
    })
    onChange && onChange(newList, { action: 'delete' })
  }

  console.log(typeof onChange === 'function' && allowClear, '====')

  return (
    <>
      {/* 列表 */}
      {list &&
        list.length > 0 &&
        list.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              index={index}
              uploadingRender={uploadingRender}
              onDelete={typeof onChange === 'function' && allowClear ? handleDelete : null}
              onReUpload={onReUpload}
              onPreview={onPreview}
            />
          )
        })}
    </>
  )
}

export default List
