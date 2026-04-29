import React, { type FC } from 'react'

// 主体内容
const Content: FC<Record<string, unknown>> = ({ data }) => {
  console.log(data)
  return <div>Waiting to be replaced </div>
}

export default Content
