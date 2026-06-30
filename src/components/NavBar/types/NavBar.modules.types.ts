import Button from '../Button'
import Left from '../Left'
import NavBar from '../NavBar'
import Right from '../Right'
import Title from '../Title'

export type NavBarComponents = typeof NavBar & {
  Title: typeof Title
  Button: typeof Button
  Left: typeof Left
  Right: typeof Right
}
