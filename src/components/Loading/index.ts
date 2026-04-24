import Loading from './Loading'
import SpinFade from './SpinFade'
import Ouroboros from './Ouroboros'
import BallWave from './BallWave'
import show from './show'
import hide from './hide'
import exists from './exists'

type LoadingWithStatics = typeof Loading & {
  SpinFade: typeof SpinFade
  Ouroboros: typeof Ouroboros
  BallWave: typeof BallWave
  show: typeof show
  hide: typeof hide
  exists: typeof exists
}

const LoadingExport = Loading as LoadingWithStatics
LoadingExport.SpinFade = SpinFade
LoadingExport.Ouroboros = Ouroboros
LoadingExport.BallWave = BallWave
LoadingExport.show = show
LoadingExport.hide = hide
LoadingExport.exists = exists

export default LoadingExport
