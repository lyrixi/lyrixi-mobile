import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 内库使用-start
import { Page, Divider } from 'lyrixi-mobile'
// 内库使用-end

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>钉钉选择照片(结果不同)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // 抵消 padding
          }}
          style={a11yDark}
          showLineNumbers // 显示行号（可选）
          wrapLongLines // 自动换行（可选
        >
          {`Bridge.chooseMedia({
  count: 5,
  sizeType: ['compressed'],
  sourceType: ['album', 'camera'],
  onSuccess: async (res) => {
    // Difference is result => res.localFiles
  }
})`}
        </SyntaxHighlighter>
        <Divider>钉钉上传(类似微信小程序上传)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // 抵消 padding
          }}
          style={a11yDark}
          showLineNumbers // 显示行号（可选）
          wrapLongLines // 自动换行（可选
        >
          {`Bridge.uploadFile({
  url: window.origin + ownServerUrl,
  localFile: localFile, // { fileType: '', filePath: '' }
  header: {
    'Content-Type': 'multipart/form-data',
    Cookie: document.cookie
  },
  data: {
    filePath: localFile.filePath,
    uploadPath: uploadDir,
    // other formData
  },
  onSuccess: function (result) {
    // Own server return result
  },
  onError: function (error) {
    // error
  }
})`}
        </SyntaxHighlighter>
      </Page.Main>
    </Page>
  )
}
