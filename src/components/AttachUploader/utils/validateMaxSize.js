// 内库使用-start
import Toast from './../../Toast'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 校验文件框上传文件大小
function validateMaxSize(target, maxSize) {
  if (maxSize && target.value && target.files[0] && target.files[0].size) {
    // 体积控制
    if (target.files[0].size / 1024 > maxSize) {
      Toast.show({
        content: LocaleUtil.locale(`文件大小不能超过${Math.abs(maxSize / 1024)}M`)
      })

      return false
    }
  }
  return true
}

export default validateMaxSize
