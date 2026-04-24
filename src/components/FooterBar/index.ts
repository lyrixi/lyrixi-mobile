import FooterBar from './FooterBar'
import Button from './Button'

type FooterBarWithButton = typeof FooterBar & { Button: typeof Button }

;(FooterBar as FooterBarWithButton).Button = Button

export type { FooterBarRef, FooterBarProps } from './FooterBar'
export type { FooterBarButtonRef, FooterBarButtonProps } from './Button'
export default FooterBar as FooterBarWithButton
