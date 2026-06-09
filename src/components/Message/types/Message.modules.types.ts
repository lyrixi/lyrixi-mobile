import Combo from '../Combo'
import Modal from '../Modal'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
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
  Title: typeof Title
  Button: typeof Button
  open: typeof open
  close: typeof close
}
