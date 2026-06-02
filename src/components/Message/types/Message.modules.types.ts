import Combo from '../Combo'
import Modal from '../Modal'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import Icon from '../Icon'
import Title from '../Title'
import Button from '../Button'
import open from '../api/open'
import close from '../api/close'

export type MessageComponents = {
  Combo: typeof Combo
  Modal: typeof Modal
  Header: typeof Header
  Main: typeof Main
  Footer: typeof Footer
  Icon: typeof Icon
  Title: typeof Title
  Button: typeof Button
  open: typeof open
  close: typeof close
}
