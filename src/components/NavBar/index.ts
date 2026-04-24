import NavBar from './NavBar'
import Title from './Title'
import Button from './Button'

type NavBarWithParts = typeof NavBar & {
  Title: typeof Title
  Button: typeof Button
}

;(NavBar as NavBarWithParts).Title = Title
;(NavBar as NavBarWithParts).Button = Button

export default NavBar as NavBarWithParts
