import type { ComponentType, CSSProperties, MouseEvent, ReactNode, SVGProps } from 'react'

export interface MessageComboButton {
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => boolean | void | Promise<boolean | void>
}

/** Modal / Main 共用的对话框主体（头、内容、底） */
export interface MessageBodyProps {
  // Value & Display Value
  content?: ReactNode
  buttonsLayout?: 'vertical' | 'horizontal'
  buttons?: MessageComboButton[]
  // Style
  titleClassName?: string
  titleStyle?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
  footerClassName?: string
  footerStyle?: CSSProperties
  // Elements
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  iconSize?: string
  iconRender?: () => ReactNode
  title?: ReactNode
}
