import FooterBar from './FooterBar'
import Button from './Button'

type FooterBarWithButton = typeof FooterBar & { Button: typeof Button }

;(FooterBar as FooterBarWithButton).Button = Button

export type { FooterBarButtonProps, FooterBarButtonRef, FooterBarProps, FooterBarRef } from './types'
export default FooterBar as FooterBarWithButton
