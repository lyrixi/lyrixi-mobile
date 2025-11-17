// 校验文件框上传文件大小
function validateMaxSize(fileSize, maxSize) {
  if (maxSize && fileSize) {
    if (fileSize > maxSize) {
      return false
    }
  }
  return true
}

export default validateMaxSize
