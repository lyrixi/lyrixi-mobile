import React from 'react'
import { Request, Toast } from 'lyrixi-mobile'

export default () => {
  async function handleClick() {
    let response = await Request.get(
      'https://lyrixi.github.io/lyrixi-mobile/assets/district/zh_CN/86.json.info'
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request get</div>
    </>
  )
}
