import Loading from './Loading'
import SpinFade from './SpinFade'
import Ouroboros from './Ouroboros'
import BallWave from './BallWave'
import show from './show'
import hide from './hide'
import exists from './exists'

import type { LoadingComponents } from './Loading.Components.types'

const LoadingExport = Loading as LoadingComponents
LoadingExport.SpinFade = SpinFade
LoadingExport.Ouroboros = Ouroboros
LoadingExport.BallWave = BallWave
LoadingExport.show = show
LoadingExport.hide = hide
LoadingExport.exists = exists

export default LoadingExport
