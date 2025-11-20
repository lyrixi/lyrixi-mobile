import React, { useRef, useState } from 'react'
import vconsole from 'vconsole'
import { MediaUploader, Page, Toast } from 'lyrixi-mobile'

const { uploadList, validateListStatus } = MediaUploader
new vconsole()
export default () => {
  const imageUploaderRef = useRef(null)
  const [list, setList] = useState([
    {
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      filePath: '/lyrixi-mobile/assets/test/1.jpg',
      status: 'error'
    },
    {
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      filePath: '/lyrixi-mobile/assets/test/1.jpg'
    }
  ])

  function handlePhotoChange(newList) {
    console.log('update:', newList)
    // debugger
    setList(newList)
  }
  // 异步上传
  async function handleAsyncUploadList() {
    let newList = await imageUploaderRef.current.uploadList()
    console.log('newList:', newList)
  }

  // 异步上传
  async function handleAsyncUploader() {
    let newList = await uploadList(list)
    console.log('newList:', newList)
    setList(newList)
  }

  async function handleValidate() {
    let isOK = await validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
    }
  }

  return (
    <Page className="lyrixi-full">
      <Page.Header className="lyrixi-text-center">普通拍照</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <MediaUploader
          // reUpload={false}
          // async
          type="browser"
          uploadPosition="start"
          ref={imageUploaderRef}
          // timeout={2000}
          uploadDir={`businessName`}
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          count={4}
          // 离北京天安门差不多2.4公里
          watermark={['$address']}
          // watermark={['$datetime', '$model', '$address $distance:116.37,39.91']}
          // watermark={['0924-定位拍照', '$name $datetime', '$address $distance:116.37,39.91']}
          onChange={handlePhotoChange}
          upload={<div style={{ width: '100%', height: '100%', backgroundColor: 'ref' }}>1</div>}
          // allowChoose={list?.length ? false : true}
          // allowClear={false}
          // visibleCount={1}
          // style={{
          //   '--cell-width': '32px',
          //   '--cell-height': '32px',
          //   '--cell-radius': '6px',
          //   '--count-font-size': '12px',
          //   '--choose-icon-size': '12px'
          // }}
        />
        <div style={{ height: '50px', background: '#f8f8f8' }} onClick={handleAsyncUploadList}>
          imageUploaderRef.current.uploadList
        </div>
        <div style={{ height: '50px', background: '#f8f8f8' }} onClick={handleAsyncUploader}>
          uploadList
        </div>
        <div style={{ height: '50px', background: '#f8f8f8' }} onClick={handleValidate}>
          validateListStatus
        </div>
      </Page.Main>
    </Page>
  )
}
