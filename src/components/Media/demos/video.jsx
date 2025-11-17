import React, { useRef, useState, useEffect } from 'react'
import { Bridge, Media } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {
    Bridge.load(() => {
      console.log('加载桥接')
    })
  }, [])

  const videosRef = useRef(null)
  const [list, setList] = useState([
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

  return (
    <div id="root" className="lyrixi-position-relative" style={{ height: '300px' }}>
      <Media ref={videosRef} type="video" list={list} />
    </div>
  )
}
