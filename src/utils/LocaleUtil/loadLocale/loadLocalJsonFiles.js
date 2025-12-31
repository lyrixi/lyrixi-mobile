// 内库使用-start
import AssetUtil from './../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 加载本地json文件
async function loadLocalJsonFiles(localJsonFiles) {
  for (let localJsonFile of localJsonFiles) {
    let result = await AssetUtil.loadLocalJson(localJsonFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Local json files loaded successfully'
  }
}

export default loadLocalJsonFiles
