import Taro from '@tarojs/taro'

async function upload(file, { uploadDir, watermark, uploadExtraParams, maxWidth }) {
  return new Promise((resolve) => {
    let formData = {
      uploadPath: uploadDir,
      file1: file.tempFilePath
    }

    if (watermark) {
      formData.watermark = watermark
    }

    if (uploadExtraParams && typeof uploadExtraParams === 'object') {
      for (const paramKey in uploadExtraParams) {
        if (uploadExtraParams.hasOwnProperty(paramKey)) {
          let value = uploadExtraParams[paramKey]
          formData[paramKey] = value
        }
      }
    }

    if (maxWidth) {
      formData.maxWidth = maxWidth
    }

    Taro.uploadFile({
      url: `${Taro.getStorageSync(
        'appsvrUrl'
      )}/platform/fileupload/v1/doUploadImageForMinProgram.do`,
      filePath: file.tempFilePath,
      name: 'file',
      withCredentials: true,
      formData: formData,
      header: {
        'Content-Type': 'multipart/form-data',
        Cookie: `x-token=${Taro.getStorageSync('x-token')}`,
        Authorization: `Bearer ${Taro.getStorageSync('x-token')}` // 上传需要单独处理cookie
      },
      success(result) {
        if (result.statusCode === 200) {
          try {
            resolve(JSON.parse(result.data))
          } catch (error) {
            resolve('照片数据错误')
          }
        }
      },
      fail() {
        resolve('上传失败')
      }
    })
  })
}

function uploadImage({ sourceType, uploadDir, watermark, uploadExtraParams }) {
  return new Promise((resolve) => {
    Taro.chooseMedia({
      count: 1,
      sourceType: sourceType || ['camera'],
      mediaType: ['image'],
      sizeType: ['compressed'],
      success: async (res) => {
        let files = res.tempFiles || []

        const file = files[0]
        const result = await upload(file, {
          uploadDir,
          watermark,
          uploadExtraParams,
          maxWidth
        })
        if (result.code === '1' && result.data.length) {
          resolve({
            ...result.data?.[0]
          })
        } else {
          resolve('选择图片失败')
        }
      },
      fail: function (e) {
        resolve('')
        console.log('chooseImage fail', e)
      }
    })
  })
}
export default uploadImage
