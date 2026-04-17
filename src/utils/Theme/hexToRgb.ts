// 颜色转为rgba
export default function hexToRgb(color) {
  if (!color.includes('#')) {
    return undefined
  }
  let rgb = `${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
    color.slice(5, 7),
    16
  )}`
  return rgb
}
