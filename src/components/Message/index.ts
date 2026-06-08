import Combo from './Combo'
import Modal from './Modal'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import Title from './Title'
import Button from './Button'

import open from './api/open'
import close from './api/close'

import type { MessageComponents } from './types/Message.modules.types'

const Message = {} as MessageComponents

Message.Combo = Combo
Message.Modal = Modal
Message.Header = Header
Message.Main = Main
Message.Footer = Footer
Message.Title = Title
Message.Button = Button
Message.open = open
Message.close = close

export default Message
