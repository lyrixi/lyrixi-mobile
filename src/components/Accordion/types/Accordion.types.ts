import type React from 'react'

export interface AccordionRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  open: () => void
  close: () => void
}

export interface AccordionProps {
  // Value & Display Value
  minHeight?: number
  ellipsis?: { expandText?: React.ReactNode; collapseText?: React.ReactNode }
  arrowPosition?: 'left' | 'right'
  // Status
  open?: boolean
  // Style
  style?: React.CSSProperties
  className?: string
  arrowClassName?: string
  // Elements
  title?: React.ReactNode
  headerRender?: (options: { open: boolean; onClick: () => void }) => React.ReactNode
  ellipsisRender?: (options: { open: boolean; onClick: () => void }) => React.ReactNode
  arrowRender?: (options: { open: boolean }) => React.ReactNode
  children?: React.ReactNode
  // Events
  onOpen?: () => void
  onClose?: () => void
}
