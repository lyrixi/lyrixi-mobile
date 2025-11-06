import React from 'react'
import { Clipboard, Toast } from 'lyrixi-mobile'

export default () => {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-mobile', {
      onSuccess: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
