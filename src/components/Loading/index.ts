import _Loading from './Loading'
import SpinFade from './SpinFade'
import Ouroboros from './Ouroboros'
import BallWave from './BallWave'
import show from './show'
import hide from './hide'
import exists from './exists'

import type { LoadingComponents } from './types/Loading.modules.types'

const Loading = _Loading as LoadingComponents
Loading.SpinFade = SpinFade
Loading.Ouroboros = Ouroboros
Loading.BallWave = BallWave
Loading.show = show
Loading.hide = hide
Loading.exists = exists

export default Loading
