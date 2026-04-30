import SafeArea from './SafeArea'

function debug() {
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-bottom', '34px')
}

type SafeAreaWithDebug = typeof SafeArea & { debug: typeof debug }

;(SafeArea as SafeAreaWithDebug).debug = debug

export type { SafeAreaProps, SafeAreaRef, SafeAreaType, SafeAreaPosition } from './types'
export default SafeArea as SafeAreaWithDebug
