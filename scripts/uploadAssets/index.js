const path = require('path')
const assets = path.resolve(__dirname, './assets')
const serverPathPrefix = 'p/qince/h5/common/'

// 上传到阿里云 OSS
const upload = require('./upload')
upload(assets, serverPathPrefix)
