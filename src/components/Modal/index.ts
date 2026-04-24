import Modal from './Modal'
import NavBarModal from './NavBarModal'
import DropdownModal from './DropdownModal'

import FilterModal from './FilterModal'

import getClassNameByAnimation from './api/getClassNameByAnimation'

type ModalWithParts = typeof Modal & {
  NavBarModal: typeof NavBarModal
  DropdownModal: typeof DropdownModal
  FilterModal: typeof FilterModal
  getClassNameByAnimation: typeof getClassNameByAnimation
}

// NavBar
;(Modal as ModalWithParts).NavBarModal = NavBarModal

// Dropdown
;(Modal as ModalWithParts).DropdownModal = DropdownModal

// Filter
;(Modal as ModalWithParts).FilterModal = FilterModal

// Js Api
;(Modal as ModalWithParts).getClassNameByAnimation = getClassNameByAnimation

export type { ModalRef, ModalProps } from './Modal'
export default Modal as ModalWithParts
