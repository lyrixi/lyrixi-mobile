import React, { useRef, useState } from 'react'

// 内库使用-start
import Bridge from './../../../../utils/Bridge'
import Media from './../../../Media'
// 内库使用-end

/* 测试使用-start
import { Bridge, Media } from 'lyrixi-mobile'
测试使用-end */

// 预览
function Thumbnail({ src, onPreview }) {
  // 预览类型: browser|native
  const previewTypeRef = useRef(Bridge?.platform === 'browser' ? 'browser' : null)
  const [previewCurrent, setPreviewCurrent] = useState(null)

  // 图片加载完成
  function handleImgLoad(e) {
    e.currentTarget.parentNode.classList.add('lyrixi-success')
    e.currentTarget.parentNode.style.backgroundImage = `url(${src})`
  }
  // 图片加载失败
  function handleImgError(e) {
    e.currentTarget.parentNode.classList.add('lyrixi-error')
  }

  // 未签显示签名
  return (
    <>
      <div
        className="lyrixi-signature-edit-image"
        onClick={async () => {
          // 自定义预览
          if (typeof onPreview === 'function') {
            let goOn = await onPreview(src)
            if (goOn === false) return
            previewTypeRef.current = goOn
          }

          // 本地能力预览照片
          if (previewTypeRef.current === 'nativeMedia') {
            Bridge.previewMedia({ sources: [{ fileUrl: src }] })
          }
          // 浏览器预览
          else {
            previewTypeRef.current = 'browser'
            setPreviewCurrent(0)
          }
        }}
      >
        <img src={src} alt="" onLoad={handleImgLoad} onError={handleImgError} />
      </div>

      {/* 预览 */}
      {previewTypeRef.current === 'browser' && (
        <Media.PreviewModal
          open={typeof previewCurrent === 'number'}
          onClose={() => {
            setPreviewCurrent(null)
          }}
          list={[{ src: src }]} // 需要预览的资源列表{src: '图片或视频的地址', type: 'video|image, 默认image', fileThumbnail: '封面地址'}
          current={previewCurrent}
        />
      )}
    </>
  )
}

export default Thumbnail
