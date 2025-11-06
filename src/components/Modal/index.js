import Modal from './Modal'
import NavBarModal from './NavBarModal'
import DropdownModal from './DropdownModal'

import FilterModal from './FilterModal'

import getClassNameByAnimation from './api/getClassNameByAnimation'

// NavBar
Modal.NavBarModal = NavBarModal

// Dropdown
Modal.DropdownModal = DropdownModal

// Filter
Modal.FilterModal = FilterModal

// Js Api
Modal.getClassNameByAnimation = getClassNameByAnimation

export default Modal
