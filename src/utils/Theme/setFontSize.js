// 更新字体大小
function setFontSize(fontSize) {
  // 定义三套字体大小
  const fontSizes = {
    // m: 标准
    m: {
      xxxl: '20px',
      xxl: '18px',
      xl: '16px',
      l: '15px',
      m: '14px',
      s: '12px',
      xs: '11px'
    },
    // l: 中号
    l: {
      xxxl: '22px',
      xxl: '20px',
      xl: '18px',
      l: '17px',
      m: '16px',
      s: '14px',
      xs: '13px'
    },
    // xl: 大号
    xl: {
      xxxl: '24px',
      xxl: '22px',
      xl: '20px',
      l: '19px',
      m: '18px',
      s: '16px',
      xs: '15px'
    }
  }

  // 设置字体大小
  if (fontSizes?.[fontSize]) {
    let fontSizeData = fontSizes[fontSize]
    document.documentElement.style.setProperty('--lyrixi-font-size-xxxl', fontSizeData.xxxl)
    document.documentElement.style.setProperty('--lyrixi-font-size-xxl', fontSizeData.xxl)
    document.documentElement.style.setProperty('--lyrixi-font-size-xl', fontSizeData.xl)
    document.documentElement.style.setProperty('--lyrixi-font-size-l', fontSizeData.l)
    document.documentElement.style.setProperty('--lyrixi-font-size-m', fontSizeData.m)
    document.documentElement.style.setProperty('--lyrixi-font-size-s', fontSizeData.s)
    document.documentElement.style.setProperty('--lyrixi-font-size-xs', fontSizeData.xs)
  }
}

export default setFontSize
