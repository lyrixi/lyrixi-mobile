import React, { useEffect, forwardRef } from 'react'
import PreviewMain from './../PreviewMain'
import DOMUtil from './../../../utils/DOMUtil'

// 内库使用-start
import Page from './../../Page'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { Page, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

const PreviewModal = forwardRef(
  (
    {
      // Value & Display Value
      list, // 需要预览的资源列表{fileUrl: '图片或视频的地址', fileThumbnail: '封面地址', fileType: 'video|image'}
      index, // 当前显示的资源序号或者当前资源的src链接
      mediaType, // video | image
      maxCount,
      sourceType = ['album', 'camera'],
      sizeType = ['compressed'], // ['original', 'compressed']
      fileImageCompress,

      // Status
      open,
      allowChoose = false,
      allowClear = false,

      // Style
      mainStyle,
      mainClassName,
      safeArea,
      navBarStyle,
      navBarClassName,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,
      cancelPosition = 'right',

      // Events
      onBeforeChoose,
      onChoose,
      onFileChange,
      onUpload,
      onChange,
      onClose
    },
    ref
  ) => {
    // 在预览页面, 列表被删除完成时, 隐藏modal
    useEffect(() => {
      if (!list || !list.length || !list[0].fileUrl) {
        if (open) {
          onClose && onClose()
        }
      }
      // eslint-disable-next-line
    }, [list])

    // 图片单击隐藏, 视频单击无反应, 显示不能触发
    function handleClose() {
      if (onClose) onClose()
    }

    return (
      <NavBarModal
        // Status
        open={open}
        // Style
        safeArea={safeArea}
        navBarStyle={navBarStyle}
        navBarClassName={navBarClassName}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-media-preview-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={DOMUtil.classNames('lyrixi-media-preview-mask', maskClassName)}
        // Element
        portal={portal}
        cancelPosition={cancelPosition}
        animation="slideUp"
        // Events
        onClose={handleClose}
      >
        <Page.Main>
          <PreviewMain
            ref={ref}
            // Value & Display Value
            list={list}
            index={index}
            mediaType={mediaType}
            maxCount={maxCount}
            sourceType={sourceType}
            sizeType={sizeType}
            fileImageCompress={fileImageCompress}
            // Status
            open={open}
            closable={false}
            allowChoose={allowChoose}
            allowClear={allowClear}
            // Style
            className={mainClassName}
            style={mainStyle}
            // Events
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
  }
)

export default PreviewModal
