import type React from 'react'

export interface AccordionGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getActiveIndex: () => number | null | undefined
  openIndex: (index: number) => void
  close: () => void
}

export interface AccordionGroupProps {
  value?: number | null
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
  onChange?: (index: number | null) => void
}
