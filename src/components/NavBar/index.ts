import NavBar from './NavBar'
import Title from './Title'
import Button from './Button'

import type { NavBarComponents } from './NavBar.Components.types'

;(NavBar as NavBarComponents).Title = Title
;(NavBar as NavBarComponents).Button = Button

export default NavBar as NavBarComponents
