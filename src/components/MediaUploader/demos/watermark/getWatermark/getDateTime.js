// 获取系统时间, 获取失败时返回系统时间(手机时间)
function getDateTime() {
  return new Promise((resolve) => {
    resolve(new Date().toLocaleString())
  })
}
export default getDateTime
