import React, { useEffect, forwardRef, useImperativeHandle, useRef } from 'react'
// Compatible with lower version
// import 'core-js/es/array/flat'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Zoom, Pagination } from 'swiper/modules'
import fileChoose from './../utils/fileChoose'
import choose from './../utils/choose'
import uploadItem from './../utils/uploadItem'
import showLoading from './../utils/showLoading'
import hideLoading from './../utils/hideLoading'
import getActiveIndex from './getActiveIndex'

import PreviewDelete from './PreviewDelete'
import PreviewClose from './PreviewClose'
import PreviewChoose from './PreviewChoose'
import PreviewReload from './PreviewReload'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
import Toast from './../../Toast'
import VideoPlayer from './../../VideoPlayer'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, LocaleUtil, Toast, VideoPlayer } from 'lyrixi-mobile'
测试使用-end */

const PreviewMain = forwardRef(
  (
    {
      safeArea,

      // Modal
      open = true,

      // Main: common
      type, // video | image
      current, // 当前显示的资源序号或者当前资源的src链接

      // 样式
      className,
      style,
      allowClose = false,
      allowChoose = false,
      allowClear = false,

      // Config
      async = false,
      reUpload = true,
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

      onClose,

      ...props
    },
    ref
  ) => {
    const videoPlayers = useRef([])
    const swiperRef = useRef(null)

    // 因为在click事件内改变数据的可能性, 所以更新句柄, 防止synchronization模式读取创建时的状态
    const onFileChangeRef = useRef()
    onFileChangeRef.current = onFileChange

    const onChangeRef = useRef()
    onChangeRef.current = onChange

    // Judge wether to display choose button
    let chooseVisible = allowChoose
    if (typeof count === 'number' && (list || []).length >= count) {
      chooseVisible = false
    }

    // Expose
    useImperativeHandle(ref, () => {
      return {
        mainDOM: swiperRef.current,
        getMainDOM: () => swiperRef.current
      }
    })
    useEffect(() => {
      if (!open || typeof swiperRef?.current?.swiper?.slideTo !== 'function') return
      swiperRef.current.swiper.slideTo(getActiveIndex({ current, list }), 0)
      // eslint-disable-next-line
    }, [open])

    // 显隐Loading
    function _showLoading(options) {
      showLoading(swiperRef.current, options)
    }

    function _hideLoading(options) {
      hideLoading(swiperRef.current, options)
    }

    // 滑动视频需要暂停其它视频
    function handleSwipe() {
      // 暂停所有视频
      if (type === 'video') {
        for (let videoPlayer of videoPlayers.current) {
          videoPlayer?.pause?.()
        }
      }
    }

    // 上传
    async function uploadList(newList, { action } = {}) {
      // eslint-disable-next-line
      if (!newList) newList = [...list]
      if (!newList) return

      let hasUploaded = false
      // 开始上传
      _showLoading({ content: LocaleUtil.locale('上传中', 'lyrixi_uploading') })
      for (let [index, item] of newList.entries()) {
        // 只上传未上传或上传失败的照片
        if (item.status === 'choose' || item.status === 'error') {
          newList[index] = await uploadItem(item, { onUpload })
          hasUploaded = true
        }
      }
      _hideLoading()

      // 不支持重新上传，则过滤上传失败的照片
      if (!reUpload) {
        if (Array.isArray(newList) && newList.length) {
          let failCount = 0
          // eslint-disable-next-line
          newList = newList.filter((photo) => {
            if (
              photo.status === 'error' ||
              photo.status === 'choose' ||
              photo.status === 'uploading'
            ) {
              failCount++
              return false
            }
            return true
          })
          // 上传失败
          if (failCount) {
            Toast.show({
              content: `${LocaleUtil.locale(
                `网络异常，上传失败${failCount}张`,
                'lyrixi_upload_error_count',
                [failCount]
              )}`
            })
          }
        }
      }

      if (hasUploaded) {
        onChangeRef.current && onChangeRef.current(newList, { action: action || 'upload' })
      }

      return newList
    }

    // Delete
    function handleDelete() {
      let index = swiperRef.current?.swiper?.activeIndex
      if (typeof index !== 'number') {
        console.error('lyrixi PreviewMain: index is not a number', swiperRef.current)
        return
      }

      let newList = list.filter((photo, photoIndex) => {
        return photoIndex !== index
      })
      onChangeRef.current && onChangeRef.current(newList, { action: 'delete' })
    }

    // 选择照片
    async function handleFileChange(e) {
      _showLoading()
      let chooseResult = await fileChoose({
        file: e.nativeEvent.target,
        async,
        sizeType,
        maxWidth,
        count,
        list,
        uploadPosition: 'end',
        uploadList,
        onFileChange: onFileChangeRef.current,
        onChange: onChangeRef.current
      })
      _hideLoading()
      onClose && onClose()
      return chooseResult
    }

    // 选择照片
    async function handleChoose(e) {
      _showLoading()
      let chooseResult = await choose({
        async,
        sizeType,
        maxWidth,
        count,
        list,
        uploadPosition: 'end',
        uploadList,
        onChoose,
        onChange: onChangeRef.current
      })
      _hideLoading()
      onClose && onClose()
      return chooseResult
    }

    // 重新上传
    async function handleReUpload() {
      if (typeof onChange !== 'function') {
        console.warn('lyrixi Image: onChange is not a function')
        return
      }
      let index = swiperRef.current?.swiper?.activeIndex
      if (typeof index !== 'number') {
        console.error('lyrixi PreviewMain: index is not a number', swiperRef.current)
        return
      }

      let item = list[index]
      let newList = [...list]
      // 开始上传
      _showLoading({
        content: LocaleUtil.locale('上传中', 'lyrixi_uploading'),
        index: index
      })
      newList[index] = await uploadItem(item, { onUpload })
      _hideLoading(newList[index].status === 'error' ? { failIndexes: [index] } : undefined)

      onChangeRef.current && onChangeRef.current(newList, { action: 'reUpload' })
    }

    function handleTouchStart(_, e) {
      e.stopPropagation()
      // 解决拖动时影响document弹性
      if (e.currentTarget.touchMovePreventDefault) return
      e.currentTarget.touchMovePreventDefault = true
      e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault, false)
    }

    return (
      <Swiper
        {...props}
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        // initialSlide={activeIndex}
        navigation={false}
        zoom={type !== 'video' ? true : false}
        // Bullet pagination
        pagination={{
          type: 'fraction',
          className: 'image-preview-main-pagination'
        }}
        modules={[Zoom, Pagination]}
        onSlideChange={handleSwipe}
        className={DOMUtil.classNames(
          'lyrixi-image-preview-main',
          className,
          allowClose ? 'lyrixi-closable' : '',
          chooseVisible && typeof onChange === 'function' ? 'lyrixi-choosable' : '',
          allowClear && typeof onChange === 'function' ? 'lyrixi-clearable' : '',
          open ? '' : 'lyrixi-hide'
        )}
        style={{
          height: '100%',
          backgroundColor: 'black',
          ...style
        }}
        // fix touch move
        touchMoveStopPropagation={true}
        touchStartForcePreventDefault={true}
        touchStartPreventDefault={true}
        passiveListeners={true}
        onTouchStart={handleTouchStart}
      >
        {Array.isArray(list) &&
          list
            .filter((item) => {
              return item?.fileUrl || false
            })
            .map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={DOMUtil.classNames('lyrixi-image-preview-main-item', item.status)}
                >
                  <div className="swiper-zoom-container">
                    {type !== 'video' && (
                      <img
                        alt=""
                        className="swiper-zoom-target"
                        fileUrl={item.fileLocalUrl || item.fileUrl}
                      />
                    )}
                    {type === 'video' && (
                      <VideoPlayer
                        ref={(currentVideoPlayer) =>
                          (videoPlayers.current[index] = currentVideoPlayer)
                        }
                        poster={item.fileLocalUrl || item.fileThumbnail}
                        fileUrl={item.fileLocalUrl || item.fileUrl}
                        autoPlay={false}
                      />
                    )}
                    {item.children}
                  </div>
                  {/* ReUpload: Display while parentNode has fail class  */}
                  <PreviewReload onReUpload={handleReUpload} />
                </SwiperSlide>
              )
            })}
        {/* Close */}
        {allowClose && <PreviewClose onClose={onClose} />}
        {/* Delete */}
        {allowClear && typeof onChange === 'function' ? (
          <PreviewDelete onDelete={handleDelete} />
        ) : null}
        {/* Choose */}
        {chooseVisible && typeof onChange === 'function' ? (
          <PreviewChoose
            type={type}
            // file框属性
            sourceType={sourceType}
            // Choose events
            onChoose={onChoose ? handleChoose : null}
            onFileChange={onFileChange ? handleFileChange : null}
            // File框不支持onBeforeChoose
            onBeforeChoose={
              typeof onBeforeChoose === 'function'
                ? async (e) => {
                    _showLoading()
                    let isOk = await onBeforeChoose(e)
                    _hideLoading()
                    return isOk
                  }
                : null
            }
          />
        ) : null}
        {safeArea === true && <SafeArea />}
      </Swiper>
    )
  }
)

export default PreviewMain
