import React, { useEffect, forwardRef } from 'react'
import PreviewMain, { type PreviewMainRef } from './../PreviewMain'


import type { MediaPreviewModalProps } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Page from './../../Page'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { Page, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

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

export type { MediaPreviewModalProps } from './types'
