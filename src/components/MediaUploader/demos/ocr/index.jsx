import React, { useState } from 'react'
import vconsole from 'vconsole'
import { Bridge, Page, MediaUploader } from 'lyrixi-mobile'
import Ocr from './Ocr'
Bridge.load()

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
    <Page>
      <Page.Header className="lyrixi-text-center">OCR识别</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <MediaUploader
          sizeType={['compressed']}
          sourceType={['camera']}
          list={list}
          maxUploadCount={15}
          onChange={handlePhotoChange}
        />
      </Page.Main>
    </Page>
  )
}
