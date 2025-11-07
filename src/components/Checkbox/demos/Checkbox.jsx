import React, { useState } from 'react'
import { Checkbox } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Checkbox checked={value} onChange={setValue}>
        Common
      </Checkbox>
      <br />
      <Checkbox
        checked={value}
        onChange={setValue}
        iconRender={({ checked }) => <span className="lyrixi-checkbox-icon lyrixi-tick" />}
      >
        Custom
      </Checkbox>
      <br />
      <Checkbox checked={value} onChange={setValue} iconPosition="right">
        Common iconPosition=right
      </Checkbox>
      <br />
      <Checkbox checked={true}>Checked</Checkbox>
      <br />
      <Checkbox checked={false} disabled>
        Common Disabled
      </Checkbox>
      <br />
      <Checkbox checked={true} disabled>
        Checked Disabled
      </Checkbox>
    </>
  )
}
