import _NavBar from './NavBar'
import Title from './Title'
import Button from './Button'
import Left from './Left'
import Right from './Right'

import type { NavBarComponents } from './types/NavBar.modules.types'

const NavBar = _NavBar as NavBarComponents

NavBar.Title = Title
NavBar.Button = Button
NavBar.Left = Left
NavBar.Right = Right

export default NavBar
