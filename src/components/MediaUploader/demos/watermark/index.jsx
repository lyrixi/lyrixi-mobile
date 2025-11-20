import React, { useRef, useState } from 'react'
import { MediaUploader, Page } from 'lyrixi-mobile'
import getWatermark from './getWatermark'

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

  return (
    <Page className="lyrixi-full">
      <Page.Header className="lyrixi-text-center">普通拍照</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <MediaUploader
          getWatermark={getWatermark(['$datetime', '$model', '$address $distance:116.37,39.91'])}
          onChange={handlePhotoChange}
        />
      </Page.Main>
    </Page>
  )
}
