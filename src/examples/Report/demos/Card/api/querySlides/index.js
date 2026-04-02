// 第三方库导入

// 公共组件导入

// 内部组件导入

// 样式图片等资源文件导入

// 获取滑块
function querySlides() {
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          id: 'week',
          name: 'Week'
        },
        {
          id: 'month',
          name: 'Month'
        }
      ]
    })
  })
}

export default querySlides
