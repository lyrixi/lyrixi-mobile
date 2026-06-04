/**
 * App Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AppProps {
  /** 启用日志，默认 `true` */
  enableLogger?: boolean
  /** 桥接配置，默认 `null` */
  bridgeConfig?: object
  /** 后门元素，默认 `null` */
  backdoor?: HTMLElement
  /** 预加载函数，默认 `null` */
  preload?: () => Promise<boolean | string>
  /** 加载中渲染 */
  loadingRender?: () => ReactNode
  /** 地图配置，默认 `{}` */
  map?: {onSuccess: function, onError: function, [key: string]: any}
  /** 应用内容 */
  children?: ReactNode
}
