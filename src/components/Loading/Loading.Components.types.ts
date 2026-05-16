import BallWave from './BallWave'
import exists from './exists'
import hide from './hide'
import Loading from './Loading'
import Ouroboros from './Ouroboros'
import show from './show'
import SpinFade from './SpinFade'

export type LoadingComponents = typeof Loading & {
  SpinFade: typeof SpinFade
  Ouroboros: typeof Ouroboros
  BallWave: typeof BallWave
  show: typeof show
  hide: typeof hide
  exists: typeof exists
}
