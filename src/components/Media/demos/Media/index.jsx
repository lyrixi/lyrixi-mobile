import React, { useEffect, useState, useRef } from 'react'
import { HistoryUtil, Toast, Page, Divider, Bridge, Media } from 'lyrixi-mobile'
// import VConsole from 'vconsole'
// new VConsole()

export default () => {
  const imageUploaderRef = useRef(null)

  const [list, setList] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileType: 'image',
      status: 'error'
    },
    {
      id: '2',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl:
        'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg',
      fileType: 'image'
      // status: 'uploading'
    },
    {
      id: '3',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileType: 'image'
    },
    {
      id: '4',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileType: 'image'
    },
    {
      id: '5',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      fileType: 'video',
      status: 'success'
    },
    {
      id: '6',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      fileType: 'video',
      status: 'error'
    }
  ])

  const [customList, setCustomList] = useState([])

  useEffect(() => {
    Bridge.load(() => {
      console.log('加载桥接')
    })
  }, [])

  // 异步上传
  async function handleAsyncUpload() {
    let isOK = Media.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      let result = await imageUploaderRef.current.uploadList()
      console.log('上传结果：', result)
      return
    }
  }

  return (
    <Page>
      <Page.Main>
        <Divider>Default Media</Divider>
        <Media
          // async
          // reUpload={false}

          // Default
          allowClear
          allowChoose
          uploadPosition="start"
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          maxCount={9}
          onFileChange={(localFile) => {
            console.log('localFile:', localFile)
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
        />

        <Divider>Preview Operate</Divider>
        <Media
          ref={imageUploaderRef}
          // Preview operate: start
          upload={<div style={{ width: '100%', height: '100%', backgroundColor: 'ref' }}>1</div>}
          allowChoose={list?.length ? false : true}
          ellipsis={{ count: 1 }}
          style={{
            '--cell-width': '32px',
            '--cell-height': '32px',
            '--cell-radius': '6px',
            '--count-font-size': '12px',
            '--choose-icon-size': '12px'
          }}
          previewAllowChoose={true}
          previewAllowClear={true}
          onPreview={(item, index) => {
            HistoryUtil.navigate('imagePreview=1', {
              onBack: () => {
                imageUploaderRef.current?.setPreviewVisible?.(null)
              }
            })
            return 'browser'
          }}
          // Preview operate: end
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          maxCount={9}
          onFileChange={({ localFile }) => {
            console.log('localFile:', localFile)
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
        />
      </Page.Main>
    </Page>
  )
}
