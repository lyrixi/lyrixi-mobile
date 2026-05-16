import SafeArea from './SafeArea'

import { safeAreaDebug } from './SafeArea.debug'

import type { SafeAreaComponents } from './SafeArea.Components.types'

;(SafeArea as SafeAreaComponents).debug = safeAreaDebug

export default SafeArea as SafeAreaComponents
