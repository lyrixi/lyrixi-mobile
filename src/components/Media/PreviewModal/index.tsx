import React, { useEffect, forwardRef, type CSSProperties } from 'react'
import PreviewMain, { type PreviewMainRef } from './../PreviewMain'
import DOMUtil from './../../../utils/DOMUtil'

// 内库使用-start
import Page from './../../Page'
import NavBarModal from './../../Modal/NavBarModal'
import type { ModalProps } from './../../Modal/Modal'
// 内库使用-end

import type { MediaListItem, FileImageCompressOptions, MediaComponentProps } from './../types'

/* 测试使用-start
import { Page, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

export interface MediaPreviewModalProps {
  list?: MediaListItem[]
  /** 当前项下标（部分调用方使用 `current`） */
  index?: number
  current?: number
  mediaType?: string | string[]
  maxCount?: number
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressOptions
  open?: boolean
  allowChoose?: boolean
  allowClear?: boolean | ((item: MediaListItem) => boolean)
  mainStyle?: CSSProperties
  mainClassName?: string
  safeArea?: boolean
  navBarStyle?: CSSProperties
  navBarClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  cancelPosition?: 'left' | 'right'
  onBeforeChoose?: MediaComponentProps['onBeforeChoose']
  onChoose?: MediaComponentProps['onChoose']
  onFileChange?: MediaComponentProps['onFileChange']
  onUpload?: MediaComponentProps['onUpload']
  onChange?: MediaComponentProps['onChange']
  onClose?: () => void
}

const PreviewModal = forwardRef<PreviewMainRef, MediaPreviewModalProps>(function PreviewModal(
  {
    list,
    index: indexProp,
    current,
    mediaType,
    maxCount,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'],
    fileImageCompress,
    open,
    allowChoose = false,
    allowClear = false,
    mainStyle,
    mainClassName,
    safeArea,
    navBarStyle,
    navBarClassName,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    portal,
    cancelPosition = 'right',
    onBeforeChoose,
    onChoose,
    onFileChange,
    onUpload,
    onChange,
    onClose
  },
  ref
) {
  const index = indexProp ?? current

  useEffect(() => {
    if (!list?.length || !list[0]?.fileUrl) {
      if (open) {
        onClose?.()
      }
    }
    // eslint-disable-next-line
  }, [list])

  function handleClose() {
    onClose?.()
  }

  return (
    <NavBarModal
      open={open}
      safeArea={safeArea}
      navBarStyle={navBarStyle}
      navBarClassName={navBarClassName}
      modalStyle={modalStyle}
      modalClassName={DOMUtil.classNames('lyrixi-modal-media-preview', modalClassName)}
      maskStyle={maskStyle}
      maskClassName={DOMUtil.classNames('lyrixi-mask-media-preview', maskClassName)}
      portal={portal}
      cancelPosition={cancelPosition}
      onClose={handleClose}
    >
      <Page.Main>
        <PreviewMain
          ref={ref}
          list={list}
          index={index}
          mediaType={mediaType}
          maxCount={maxCount}
          sourceType={sourceType}
          sizeType={sizeType}
          fileImageCompress={fileImageCompress}
          open={open}
          closable={false}
          allowChoose={allowChoose}
          allowClear={allowClear}
          className={mainClassName}
          style={mainStyle}
          onBeforeChoose={onBeforeChoose}
          onChoose={onChoose}
          onFileChange={onFileChange}
          onUpload={onUpload}
          onChange={onChange}
          onClose={onClose}
        />
      </Page.Main>
    </NavBarModal>
  )
})

export default PreviewModal
