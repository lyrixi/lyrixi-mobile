/**
 * VideoPlayer Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface VideoPlayerProps {
  /** 视频地址 */
  src?: string
  /** 自动播放，默认 `false` */
  autoPlay?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 封面图，默认 `''` */
  poster?: string
  /** 子元素 */
  children?: ReactNode
  /** 错误事件 */
  onError?: (error: object) => void
}

export interface VideoPlayerRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 暂停播放 */
  pause?: () => void
  /** 开始播放 */
  play?: () => void
}
