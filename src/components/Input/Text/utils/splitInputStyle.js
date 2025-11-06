function splitStyle(externalStyle) {
  const {
    color,
    fontSize,
    height,
    lineHeight,
    minHeight,
    maxHeight,
    textAlign,
    textIndent,
    ...style
  } = externalStyle || {}

  const inputStyle = {}
  if (color) {
    inputStyle.color = color
  }
  if (fontSize) {
    inputStyle.fontSize = fontSize
  }
  if (height) {
    inputStyle.height = height
  }
  if (minHeight) {
    inputStyle.minHeight = minHeight
  }
  if (maxHeight) {
    inputStyle.maxHeight = maxHeight
  }
  if (textAlign) {
    inputStyle.textAlign = textAlign
  }
  if (textIndent) {
    inputStyle.textIndent = textIndent
  }
  if (lineHeight) {
    inputStyle.lineHeight = lineHeight
  }

  return {
    style: style,
    inputStyle: inputStyle
  }
}

export default splitStyle
