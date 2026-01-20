// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载本地js文件
async function loadRemoteJsonFiles(localJsonFiles) {
  for (let localJsonFile of localJsonFiles) {
    let result = await AssetUtil.loadLocalJson(localJsonFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Remote js files loaded successfully'
  }
}

export default loadRemoteJsonFiles
