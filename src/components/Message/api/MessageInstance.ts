// 内库使用-start
import type { ReactDOMClientCompatRoot } from '../../../utils/ReactDOMClientCompat'
// 内库使用-end

export type MessageInstance = {
  root: ReactDOMClientCompatRoot | null
  rootElement: HTMLDivElement | null
}

const messageInstance: MessageInstance = {
  root: null,
  rootElement: null
}

export default messageInstance
