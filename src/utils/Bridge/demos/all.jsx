import React, { useEffect, useRef, useState } from 'react'
import vconsole from 'vconsole'

import { Loading, Button, Bridge, Page, Location, Media, Share, Divider, Card } from 'lyrixi-mobile'

new vconsole()

export default () => {
  const [videos, setVideos] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      status: 'success'
    },
    {
      id: '2',
      fileThumbnail: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      status: 'error'
    }
  ])
  const [photos, setPhotos] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      status: 'success'
    },
    {
      id: '2',
      fileThumbnail: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      fileUrl: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      status: 'error'
    }
  ])
  const [location, setLocation] = useState([])
  const [shareTo, setShareTo] = useState({
    wechat: {
      title: '标题',
      description: '描述',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    wecom: {
      title: '标题',
      description: '描述',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    dingtalk: {
      title: '标题',
      description: '描述',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    lark: {
      title: '标题',
      description: '描述',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    }
  })

  const imageLocalFiles = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLocation({
        latitude: 31.990374883871525,
        longitude: 118.73769931504451,
        type: 'gcj02',
        address: '南京新城科技园'
      })
    }, 5000)
  }, [])

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>组件</Divider>
        <Card>
          <Divider>定位</Divider>
          <Location.Combo
            // config={{
            //   key: '',
            //   type: 'bmap'
            // }}
            allowClear
            autoSize
            clickAction="location"
            placeholder={'点击定位'}
            value={location}
            previewVisible
            chooseVisible
            onChange={(result) => {
              console.log(result)
              setLocation(result)
            }}
          />
        </Card>

        <Card>
          <Divider>拍照</Divider>
          <Media list={photos} count={20} />
        </Card>

        <Card>
          <Divider>小视频</Divider>
          <Media list={videos} count={20} type="video" />
        </Card>

        <Divider>界面接口</Divider>
        <Card>
          <Divider>打开新窗口接口</Divider>
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
        </Card>
        <Card>
          <Divider>关闭当前网页窗口接口(仅客户端与企微)</Divider>
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
        </Card>
        <Card>
          <Divider>监听页面返回事件(仅客户端与企微)</Divider>
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
        </Card>

        <Card>
          <Divider>修改页面title</Divider>
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
        </Card>

        <Card>
          <Divider>退出至登录页面(仅客户端)</Divider>
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
        </Card>

        <Card>
          <Divider>返回首页(仅订货客户端支持)</Divider>
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
        </Card>

        <Divider>扫码接口</Divider>
        <Card>
          <Divider>调用365扫码接口</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.scanQRCode({
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
            scanQRCode
          </Button>
        </Card>

        <Divider>媒体接口</Divider>
        <Card>
          <Divider>拍照或从手机相册选择媒体接口(仅支持客户端,微信,企微,小程序)</Divider>
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
        </Card>

        <Card>
          <Divider>上传文件接口(仅支持客户端,微信,企微,小程序)</Divider>
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
        </Card>

        <Card>
          <Divider>媒体文件预览接口</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.previewMedia({
                sources: [
                  { fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png' },
                  { fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png' }
                ],

                index: 0,
                current: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
              })
            }}
          >
            previewMedia
          </Button>
        </Card>

        <Divider>文件接口</Divider>
        <Card>
          <Divider>预览文件接口(仅客户端支持)</Divider>
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
        </Card>

        <Divider>地理位置接口</Divider>
        <Card>
          <Divider>查看地理位置接口(客户端、企微、支付宝生活号、飞书、钉钉)</Divider>
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
        </Card>

        <Card>
          <Divider>获取地理位置接口</Divider>
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
        </Card>

        <Card>
          <Divider>分享: 支持勤策(ios、android)、微信、企微、小程序、飞书、钉钉</Divider>
          <Share.Combo
            onBeforeOpen={() => {
              Loading.show({
                content: '获取小程序分享链接'
              })
              return new Promise((resolve) => {
                setTimeout(() => {
                  Loading.hide()
                  setShareTo({
                    wechat: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    miniprogram: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://servicewechat.com/wxascheme/jump_wxa?url=weixin://dl/business/?t=IUGVzjsue7u',
                      miniProgramId: 'gh_00011085b545',
                      miniProgramPath:
                        '/pages/Login/index?sharePath=%2Fpages%2FBlog%2FShareDetail%2Findex%3Finfoid%3D5083717378142702100&tenantid=6019160693176440421'
                    },
                    moments: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    wecom: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    dingtalk: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    lark: {
                      title: '标题',
                      description: '描述',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    }
                  })
                  resolve(true)
                }, 2000)
              })
            }}
            shareTo={shareTo}
          >
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
            >
              分享
            </Button>
          </Share.Combo>
        </Card>
      </Page.Main>
    </Page>
  )
}
