import React from 'react'
import { Clipboard, Toast } from 'lyrixi-mobile'

export default function ClipboardDemo() {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-mobile', {
      onSuccess: () => {
        Toast.open({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
