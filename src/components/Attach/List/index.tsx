import React, { useRef } from 'react'

import Item from './../Item'

// 内库使用-start
import Media from './../../Media'
// 内库使用-end

/* 测试使用-start
import { Media } from 'lyrixi-mobile'
测试使用-end */

// File List
const List = ({
  // Value & Display Value
  list, // [{ fileName: '文件名', fileUrl: '全路径', status: 'choose|uploading|error|success'}]

  // Status
  allowClear,

  // Element
  uploadingRender,
  itemRender,

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

  return (
    <>
      {/* 列表 */}
      {list &&
        list.length > 0 &&
        list.map((item, index) => {
          // 判断当前项是否允许删除
          const canClear = typeof onChange === 'function' && Media.isAllowClear(allowClear, item)

          return (
            <Item
              key={index}
              item={item}
              index={index}
              uploadingRender={uploadingRender}
              itemRender={itemRender}
              onDelete={canClear ? handleDelete : null}
              onReUpload={onReUpload}
              onPreview={onPreview}
            />
          )
        })}
    </>
  )
}

export default List
