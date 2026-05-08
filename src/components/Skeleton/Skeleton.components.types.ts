import type { CSSProperties } from 'react'

export interface SkeletonBlockProps {
  animated?: boolean
  className?: string
  style?: CSSProperties
}

export interface SkeletonAvatarProps {
  animated?: boolean
  className?: string
  style?: CSSProperties
}

export interface SkeletonTitleProps {
  animated?: boolean
  className?: string
  style?: CSSProperties
}

export interface SkeletonItemProps {
  animated?: boolean
  className?: string
  style?: CSSProperties
}

export interface SkeletonTabsProps {
  length?: number
  animated?: boolean
  className?: string
  style?: CSSProperties
  tabClassName?: string
  tabStyle?: CSSProperties
}

export interface SkeletonParagraphProps {
  length?: number
  divider?: string
  animated?: boolean
  className?: string
  style?: CSSProperties
  avatarVisible?: boolean
  avatarClassName?: string
  avatarStyle?: CSSProperties
  titleVisible?: boolean
  titleClassName?: string
  titleStyle?: CSSProperties
  itemClassName?: string
  itemStyle?: CSSProperties
  oddClassName?: string
  oddStyle?: CSSProperties
  evenClassName?: string
  evenStyle?: CSSProperties
}
