import Modal from './Modal'
import NavBarModal from './NavBarModal'
import DropdownModal from './DropdownModal'

import FilterModal from './FilterModal'

import getClassNameByAnimation from './api/getClassNameByAnimation'

import type { ModalComponents } from './Modal.Components.types'

// NavBar
;(Modal as ModalComponents).NavBarModal = NavBarModal

// Dropdown
;(Modal as ModalComponents).DropdownModal = DropdownModal

// Filter
;(Modal as ModalComponents).FilterModal = FilterModal

// Js Api
;(Modal as ModalComponents).getClassNameByAnimation = getClassNameByAnimation

export default Modal as ModalComponents
