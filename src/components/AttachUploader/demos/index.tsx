import React, { useState } from 'react'
import vconsole from 'vconsole'
import { Page, AttachUploader, type AttachUploaderItem } from 'lyrixi-mobile'

new vconsole()

export default function AttachUploaderDemo() {
  const [list, setList] = useState<AttachUploaderItem[]>([
    {
      fileName: '1.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.jpg'
    },
    {
      fileName: '2.doc',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.docx'
    },
    {
      fileName: '2022_PDF.pdf',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.pdf'
    }
  ])
  function handlePhotoChange(newList: AttachUploaderItem[]) {
    console.log(newList)
    setList(newList)
  }
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">附件上传</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <AttachUploader
          maxCount={2}
          extension={['image']}
          uploadPosition="start"
          list={list}
          onChange={handlePhotoChange}
        />
      </Page.Main>
    </Page>
  )
}
