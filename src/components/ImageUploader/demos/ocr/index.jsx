import React, { useState } from 'react'
import vconsole from 'vconsole'
import { Bridge, Layout, ImageUploader } from 'lyrixi-mobile'
import Ocr from './Ocr'
Bridge.ready()

new vconsole()
export default () => {
  const [list, setList] = useState([
    {
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg',
      filePath: '/lyrixi-mobile/assets/test/1.jpg'
      // ocrResult: { message: '1', code: '1' },
      // ocr_result: { message: '1', code: '1' },
      // image_path: 'user'
      // bizId: '1'
    }
  ])

  function handlePhotoChange(newList) {
    // debugger
    // setList(
    //   newList.map((item) => {
    //     if (item.ocrResult) item.ocr_result = item.ocrResult
    //     if (item.filePath) item.image_path = item.filePath
    //     return item
    //   })
    // )
    setList(newList)
  }
  return (
    <Layout className="lyrixi-full">
      <Layout.Header className="lyrixi-text-center">OCR识别</Layout.Header>
      <Layout.Main className="lyrixi-bg-white">
        <ImageUploader
          uploadDir={`businessName`}
          sizeType={['compressed']}
          sourceType={['camera']}
          list={list}
          count={15}
          formatUploadResult={({ platform, result }) => {
            return Ocr.recognizeItem(result.data.url)
          }}
          // watermark={handleLeaveWM()}
          onChange={handlePhotoChange}
        />
      </Layout.Main>
    </Layout>
  )
}
