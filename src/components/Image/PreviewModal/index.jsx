import React, { useEffect, forwardRef } from 'react'
import PreviewMain from './../PreviewMain'
import DOMUtil from './../../../utils/DOMUtil'

// 内库使用-start
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

const PreviewModal = forwardRef(
  (
    {
      open,
      type, // video | image
      // list, // 需要预览的资源列表{fileUrl: '图片或视频的地址', fileThumbnail: '封面地址', type: 'video|image, 默认image', children: node}
      current, // 当前显示的资源序号或者当前资源的src链接

      onOpen,
      onClose,

      // Style
      allowChoose = false,
      allowClear = false,
      portal,

      // Config
      count,
      sourceType = ['album', 'camera'],
      sizeType = ['compressed'], // ['original', 'compressed']
      maxWidth,
      list, // 需要预览的资源列表{fileUrl: '图片或视频的地址', fileThumbnail: '封面地址', type: 'video|image, 默认image', children: node}

      // Events
      onBeforeChoose,
      onChoose,
      onFileChange,
      onUpload,
      onChange,

      modalClassName,
      modalStyle,
      mainClassName,
      mainStyle
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
        className={DOMUtil.classNames('lyrixi-image-preview-modal', modalClassName)}
        style={modalStyle}
        open={open}
        animation="slideUp"
        onClose={handleClose}
        onOpen={onOpen}
        ok={false}
        portal={portal}
      >
        <PreviewMain
          className={mainClassName}
          style={mainStyle}
          ref={ref}
          open={open}
          type={type}
          list={list}
          current={current}
          // Style
          allowClose={false}
          allowChoose={allowChoose}
          allowClear={allowClear}
          // Config
          count={count}
          sourceType={sourceType}
          sizeType={sizeType}
          maxWidth={maxWidth}
          // Events
          onBeforeChoose={onBeforeChoose}
          onChoose={onChoose}
          onFileChange={onFileChange}
          onUpload={onUpload}
          onChange={onChange}
          onClose={onClose}
        />
      </NavBarModal>
    )
  }
)

export default PreviewModal
