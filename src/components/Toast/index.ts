import open from './api/open'
import close from './api/close'

import type { ToastComponents } from './types/Toast.modules.types'

const Toast = {} as ToastComponents

Toast.open = open
Toast.close = close

export default Toast
