import React, { type MouseEvent } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Img from './Img'
import Uploading from './../Uploading'
import Reload from './Reload'
import Delete from './Delete'
import RemainCount from './RemainCount'
import type { MediaListItem } from './../types'
import type { MediaUploadingProps } from './../Uploading'

export interface MediaItemProps {
  item: MediaListItem
  index: number
  remainCount?: number | null
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: MediaListItem) => React.ReactNode
  onDelete?: (item: MediaListItem, index: number) => void
  onReUpload?: (item: MediaListItem, index: number) => void
  onPreview?: (item: MediaListItem, index: number) => void
}

// 照片视频预览
const Item = ({
  // Value & Display Value
  item,
  index,
  remainCount,

  // Element
  uploadingRender,
  itemRender,

  // Events
  onDelete,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
}: MediaItemProps) => {
  return (
    <div
      // Element
      data-index={index}
      // Style, 状态status: choose|uploading|error|success
      className={DOMUtil.classNames(
        'lyrixi-media-item',
        typeof item.className === 'string' ? item.className : null,
        `lyrixi-${item.status}`
      )}
      // Events
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        onPreview && onPreview(item, index)
      }}
    >
      {/* 缩略图 */}
      {item?.localFile?.tempFileThumbnail || item?.fileThumbnail ? (
        <Img
          reloadKey={item?.reloadKey}
          fileUrl={String(item?.localFile?.tempFileThumbnail || item?.fileThumbnail || '')}
        />
      ) : null}

      {/* 重新上传图标 */}
      <Reload
        onClick={() => {
          onReUpload && onReUpload(item, index)
        }}
      />

      {/* 上传中 */}
      <Uploading uploadingType="item" item={item} uploadingRender={uploadingRender} />

      {/* 删除按钮 */}
      {onDelete && (
        <Delete
          onClick={() => {
            onDelete(item, index)
          }}
        />
      )}

      {typeof remainCount === 'number' && remainCount > 0 ? (
        <RemainCount count={remainCount} />
      ) : null}

      {itemRender && itemRender(item)}
    </div>
  )
}

export default Item
