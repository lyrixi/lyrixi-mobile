// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getList(platform) {
  const list = [
    {
      id: 'wechatMiniProgram',
      // 需要相反显示
      name: LocaleUtil.locale('浏览器拍照', 'noKey_8aa7d6484388695501c2cd7f434b5de0')
    },
    {
      id: 'browser',
      // 需要相反显示
      name: LocaleUtil.locale('小程序拍照', 'noKey_ac5428f5890edb02a740bb243ed51dda')
    }
  ]

  if (platform === 'browser') {
    return list[1]
  }
  if (platform === 'wechatMiniProgram') {
    return list[0]
  }
  return list
}

export default getList
