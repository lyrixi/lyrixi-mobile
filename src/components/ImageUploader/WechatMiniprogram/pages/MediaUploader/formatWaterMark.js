const parseUrlJson = (urlJsonStr) => {
  let watermark = null
  if (!urlJsonStr) {
    return null
  }
  try {
    watermark = JSON.parse(urlJsonStr)
  } catch (error) {
    watermark = JSON.parse(decodeURIComponent(decodeURIComponent(urlJsonStr)))
  }
  return watermark
}

export default parseUrlJson
