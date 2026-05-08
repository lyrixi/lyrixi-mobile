import type { ReactNode } from 'react'

export interface TransferItem {
  id: string | number
  name?: ReactNode
  [key: string]: unknown
}

export interface TransferTitles {
  selected?: ReactNode
  unSelected?: ReactNode
}

/** 也支持 [已选区标题, 未选区标题] */
export type TransferTitlesInput = TransferTitles | [ReactNode, ReactNode]
