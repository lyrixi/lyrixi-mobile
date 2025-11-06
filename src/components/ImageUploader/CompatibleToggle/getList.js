// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getList(forceType) {
  const list = [
    {
      id: 'wechatMiniprogram',
      // 需要相反显示
      name: LocaleUtil.locale('浏览器拍照')
    },
    {
      id: 'browser',
      // 需要相反显示
      name: LocaleUtil.locale('小程序拍照')
    }
  ]

  if (forceType === 'browser') {
    return list[1]
  }
  if (forceType === 'wechatMiniprogram') {
    return list[0]
  }
  return list
}

export default getList
