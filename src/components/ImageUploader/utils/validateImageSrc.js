// 校验照片是否存在
function validateImageSrc(fileUrl) {
  return new Promise((resolve) => {
    let img = new Image()
    img.fileUrl = fileUrl
    img.onload = function () {
      resolve(true)
    }
    img.onerror = function () {
      resolve(false)
    }
  })
}

export default validateImageSrc
