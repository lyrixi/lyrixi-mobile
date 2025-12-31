// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载本地js文件
async function loadRemoteJsFiles(localJsFiles) {
  for (let localJsFile of localJsFiles) {
    let result = await AssetUtil.loadRemoteJs(localJsFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Remote js files loaded successfully'
  }
}

export default loadRemoteJsFiles
