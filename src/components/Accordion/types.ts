import type React from 'react'

export interface AccordionRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  open: () => void
  close: () => void
}

export interface AccordionProps {
  open?: boolean
  style?: React.CSSProperties
  className?: string
  minHeight?: number
  title?: React.ReactNode
  headerRender?: (props: { open: boolean; onClick: () => void }) => React.ReactNode
  ellipsis?: { expandText?: React.ReactNode; collapseText?: React.ReactNode }
  ellipsisRender?: (props: { open: boolean; onClick: () => void }) => React.ReactNode
  arrowClassName?: string
  arrowPosition?: 'left' | 'right'
  arrowRender?: (props: { open: boolean }) => React.ReactNode
  children?: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}

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

export interface AccordionTransitionProps {
  open: boolean
  children?: React.ReactNode
  minHeight?: number
}
