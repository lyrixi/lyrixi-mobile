import React, { type FC } from 'react'

import type { ContentProps } from './types'

// 主体内容
const Content: FC<ContentProps> = ({ data }) => {
  console.log(data)
  return <div>Waiting to be replaced </div>
}

export type { ContentProps } from './types'

export default Content
