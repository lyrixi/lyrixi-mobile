// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载本地js文件
async function loadLocalJsFiles(localJsFiles) {
  for (let localJsFile of localJsFiles) {
    let result = await AssetUtil.loadLocalJs(localJsFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Local js files loaded successfully'
  }
}

export default loadLocalJsFiles
