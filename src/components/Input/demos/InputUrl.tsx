import React, { useEffect, useRef } from 'react'
import { Input } from 'lyrixi-mobile'

export default function InputUrlDemo() {
  const inputUrlRef = useRef(null)

  useEffect(() => {
    console.log(inputUrlRef.current)
  }, [])

  return (
    <>
      <Input.Url
        ref={inputUrlRef}
        readOnly
        placeholder="Input"
        value="www.baidu.com/"
        rightIconNode={<div>click left area will copy link</div>}
      />
    </>
  )
}
