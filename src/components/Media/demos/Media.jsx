import React, { useEffect, useState, useRef } from 'react'
import { HistoryUtil, Toast, Page, Divider, Bridge, Media } from 'lyrixi-mobile'
// import VConsole from 'vconsole'
// new VConsole()

export default () => {
  const imageUploaderRef = useRef(null)

  const [list, setList] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=1',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=1',
      fileType: 'image',
      status: 'error'
    },
    {
      id: '2',
      fileThumbnail: 'https://macqj.oss-cn-beijing.aliyuncs.com/2024/12/248300cfc75e100.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=2',
      fileType: 'image'
      // status: 'uploading'
    },
    {
      id: '3',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=3',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=3',
      fileType: 'image'
    },
    {
      id: '4',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=4',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=4',
      fileType: 'image'
    },
    {
      id: '5',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=5',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4?id=5',
      fileType: 'video',
      status: 'success'
    },
    {
      id: '6',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=6',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4?id=6',
      fileType: 'video',
      status: 'error'
    }
  ])

  useEffect(() => {
    Bridge.load(() => {
      console.log('加载桥接')
    })
  }, [])

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
          // onFileChange和onChoose的返回值一致, 都是数组
          onFileChange={(localFile) => {
            return [
              {
                status: 'choose',
                localFile: localFile,
                fileThumbnail: localFile.fileUrl,
                fileUrl: localFile.fileUrl,
                fileType: localFile.fileType
              }
            ]
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
