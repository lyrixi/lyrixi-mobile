import React, { useState } from 'react'
import vconsole from 'vconsole'
import { Page, AttachUploader } from 'lyrixi-mobile'

new vconsole()

export default () => {
  const [list, setList] = useState([
    {
      name: '1.jpg',
      src: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg'
    },
    {
      name: '2.doc',
      src: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.docx'
    },
    {
      name: '2022_PDF.pdf',
      size: 1024 * 1024 * 21,
      src: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.pdf'
    }
  ])
  function handlePhotoChange(newList) {
    console.log(newList)
    setList(newList)
  }
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">附件上传</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <AttachUploader
          // visibleCount={1}
          maxCount={2}
          extension={['image']} // ['image', 'video', 'audio', 'jpg等指定后缀']
          uploadPosition="start"
          list={list}
          onChange={handlePhotoChange}
          onDelete={handlePhotoChange}
        // 缩略图显示
        // visibleCount={1}
        // ModalProps={{
        //   captionProps: {
        //     caption: '附件列表'
        //   },
        //   listExtraHeaderRender: () => {
        //     return <div>修改前</div>
        //   }
        // }}
        // style={{ border: '1px solid red' }}
        />
      </Page.Main>
    </Page>
  )
}
