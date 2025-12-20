import React, { useRef } from 'react'
import vconsole from 'vconsole'

import { Loading, Button, Bridge, Page, Divider, Card } from 'lyrixi-mobile'

new vconsole()

export default () => {
  const imageLocalFiles = useRef(null)

  return (
    <Page>
      <Page.Main>
        <Divider>窗口接口</Divider>
        <Card>
          <Card.Header>打开新窗口接口</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.openWindow({ title: '测试', url: 'https://www.baidu.com/' })
              }}
            >
              openWindow
            </Button>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>关闭当前网页窗口接口(仅客户端与企微)</Card.Header>
          <Card.Main>
            <a href="/#/test?title=test&isFromApp=confirm-close:11">返回提示11, 并关闭webview</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm-close">返回提示, 并关闭webview</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm:11">返回提示11</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm">返回提示</a>
            <br />
            <a href="/#/test?title=test&isFromApp=1">返回时将会关闭webview</a>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.closeWindow()
              }}
            >
              closeWindow(全平台支持)
            </Button>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.back()
              }}
            >
              back(全平台支持)
            </Button>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>监听页面返回事件(仅客户端与企微)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.onHistoryBack(() => {
                  console.log('返回监听')
                  alert('返回监听')
                })
              }}
            >
              onHistoryBack
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>修改页面title</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.setTitle({
                  title: '自定义标题'
                })
              }}
            >
              setTitle
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>退出至登录页面(仅客户端)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.logOut()
              }}
            >
              logout
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>返回首页(仅订货客户端支持)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.goHome()
              }}
            >
              goHome
            </Button>
          </Card.Main>
        </Card>

        <Divider>媒体接口</Divider>
        <Card>
          <Card.Header>扫码接口</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.scanCode({
                  scanType: ['barCode'],
                  onSuccess: (res) => {
                    console.log(res)
                    alert(JSON.stringify(res))
                  },
                  onError: (error) => {
                    console.log(error)
                    alert(JSON.stringify(error))
                  }
                })
              }}
            >
              scanCode
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>拍照或从手机相册选择媒体接口(仅支持客户端,微信,企微,小程序)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.chooseMedia({
                  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                  onSuccess: (res) => {
                    console.log(res)
                    alert(JSON.stringify(res))
                    imageLocalFiles.current = res?.localFiles
                  },
                  onError: (error) => {
                    console.log(error)
                    alert(JSON.stringify(error))
                  },
                  onCancel: (res) => {
                    console.log(res)
                    alert(JSON.stringify(res))
                  }
                })
              }}
            >
              chooseMedia
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>上传文件接口(全平台支持)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                if (!imageLocalFiles.current) {
                  console.log('chooseMedia first!')
                  alert('chooseMedia first!')
                  return
                }
                Loading.show({
                  content: '上传中...'
                })
                Bridge.uploadFile({
                  url: '',
                  header: {
                    'Content-Type': 'multipart/form-data',
                    Cookie: document.cookie
                  },
                  data: {
                    uploadDir: 'test'
                  },
                  localFile: imageLocalFiles.current[0],
                  onSuccess: function (res) {
                    console.log(res)
                    alert(JSON.stringify(res))
                    Loading.hide()
                  },
                  onError: function (error) {
                    console.log(error)
                    alert(JSON.stringify(error))
                    Loading.hide()
                  },
                  onCancel: function (res) {
                    console.log(res)
                    alert(JSON.stringify(res))
                    Loading.hide()
                  }
                })
              }}
            >
              uploadFile
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>媒体文件预览接口</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.previewMedia({
                  sources: [
                    {
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                    },
                    {
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                    }
                  ],

                  index: 0,
                  current: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                })
              }}
            >
              previewMedia
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>预览文件接口(仅客户端支持)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.previewFile({
                  url: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                })
              }}
            >
              previewFile
            </Button>
          </Card.Main>
        </Card>

        <Divider>地理位置接口</Divider>
        <Card>
          <Card.Header>查看地理位置接口(客户端、企微、支付宝生活号、飞书、钉钉)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.openLocation({
                  slatitude: 32.02, // 起点纬度
                  slongitude: 118.79, // 起点经度
                  sname: '起点', // 起点名
                  latitude: 39.81, // 纬度，浮点数，范围为90 ~ -90
                  longitude: 116.49, // 经度，浮点数，范围为180 ~ -180。
                  name: '终点', // 位置名
                  address: '终点地址名', // 地址详情说明
                  scale: 16 // 地图缩放级别,整形值,范围从1~28。默认为16
                })
              }}
            >
              openLocation
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>获取地理位置接口</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Loading.show({
                  content: '定位中...'
                })
                Bridge.getLocation({
                  type: 'gcj02',
                  onSuccess: (res) => {
                    Loading.hide()
                    console.log(res)
                    alert(JSON.stringify(res))
                  },
                  onError: (error) => {
                    Loading.hide()
                    console.log(error)
                    alert(JSON.stringify(error))
                  }
                })
              }}
            >
              getLocation(gcj02)
            </Button>

            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Loading.show({
                  content: '定位中...'
                })
                Bridge.getLocation({
                  type: 'wgs84',
                  onSuccess: (res) => {
                    Loading.hide()
                    console.log(res)
                    alert(JSON.stringify(res))
                  },
                  onError: (error) => {
                    Loading.hide()
                    console.log(error)
                    alert(JSON.stringify(error))
                  }
                })
              }}
            >
              getLocation(wgs84)
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>分享: 客户端、微信、企微、小程序、飞书、钉钉</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.share({
                  title: '标题',
                  description: '描述',
                  imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                  url: 'https://lyrixi.github.io/lyrixi-mobile/'
                })
              }}
            >
              Share
            </Button>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
