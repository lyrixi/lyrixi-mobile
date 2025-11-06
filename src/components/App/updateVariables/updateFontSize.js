// 内库使用-start
import Storage from './../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { Storage } from 'lyrixi-mobile'
测试使用-end */

// 根据ua或者storage中的lyrixiFontScale更新字体大小
export default function updateVariables() {
  // 读取lyrixiFontScale设置
  let fontScale =
    Storage.getLocalStorage('lyrixiFontScale') ||
    navigator.userAgent.match(/lyrixiFontScale\/([\w]*)/)?.[1] ||
    ''

  // 定义三套字体大小
  const fontSizes = [
    // 标准
    {
      xxxl: '20px',
      xxl: '18px',
      xl: '16px',
      l: '15px',
      m: '14px',
      s: '12px',
      xs: '11px'
    },
    // 中号
    {
      xxxl: '22px',
      xxl: '20px',
      xl: '18px',
      l: '17px',
      m: '16px',
      s: '14px',
      xs: '13px'
    },
    // 大号
    {
      xxxl: '24px',
      xxl: '22px',
      xl: '20px',
      l: '19px',
      m: '18px',
      s: '16px',
      xs: '15px'
    }
  ]

  const currentFontSize = fontScale && Number(fontScale) <= 2 ? fontSizes[Number(fontScale)] : null

  // 设置字体大小
  if (currentFontSize) {
    document.documentElement.style.setProperty('--lyrixi-font-size-xxxl', currentFontSize.xxxl)
    document.documentElement.style.setProperty('--lyrixi-font-size-xxl', currentFontSize.xxl)
    document.documentElement.style.setProperty('--lyrixi-font-size-xl', currentFontSize.xl)
    document.documentElement.style.setProperty('--lyrixi-font-size-l', currentFontSize.l)
    document.documentElement.style.setProperty('--lyrixi-font-size-m', currentFontSize.m)
    document.documentElement.style.setProperty('--lyrixi-font-size-s', currentFontSize.s)
    document.documentElement.style.setProperty('--lyrixi-font-size-xs', currentFontSize.xs)
  }
}
