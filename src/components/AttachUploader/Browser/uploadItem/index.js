import uploadFile from './uploadFile'

// 上传
function uploadItem(item, { uploadDir, getUploadUrl, getUploadParams, formatUploadedItem }) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let fileData = item.fileData

    // 用临时方案尝试
    let serverItem = await uploadFile({
      item,
      fileData,
      uploadDir,
      getUploadUrl,
      getUploadParams,
      formatUploadedItem
    })

    // 上传失败
    if (typeof serverItem === 'string') {
      resolve(serverItem)
      return
    }

    resolve({
      ...item,
      ...serverItem,
      // 状态
      status: 'success'
    })
  })
}

export default uploadItem
