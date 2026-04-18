import React, { useEffect, useState, useRef } from 'react'
import { Toast, Page, Divider, Bridge, Button, Attach } from 'lyrixi-mobile'

export default () => {
  const uploadRef = useRef(null)
  const [list, setList] = useState([
    {
      fileName: '1',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      status: 'error'
    },
    {
      fileName: '2',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
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
    let isOK = Attach.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      let result = await uploadRef.current.uploadList()
      console.log('上传结果：', result)
      return
    }
  }

  function handleBeforeChoose() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Default Attach</Divider>
        <Attach
          // uploadRender={({uploadType}) => {
          //   console.log(uploadType)
          //   return <div>上传</div>
          // }}
          ref={uploadRef}
          reUpload={false}
          // async
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={list}
          maxCount={9}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
          onUpload={(item) => {
            console.log(item)
            return item
          }}
        />
        <Divider>Custom Attach</Divider>
        <Attach
          className="custom-upload"
          reUpload={false}
          // async
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={customList}
          maxCount={9}
          onChange={(newList) => {
            console.log('修改:', newList)
            setCustomList(newList)
          }}
          onUpload={(item) => {
            console.log(item)
            return item
          }}
        >
          {Array.isArray(customList) && customList.length ? (
            <Attach.List
              list={customList}
              onPreview={() => {
                console.log('preview')
                return false
              }}
            />
          ) : (
            'Custom Attach Render'
          )}
        </Attach>
      </Page.Main>
      <Page.Footer>
        <Button className="lyrixi-flex" color="primary" onClick={handleAsyncUpload}>
          Sync Attach
        </Button>
      </Page.Footer>
    </Page>
  )
}
