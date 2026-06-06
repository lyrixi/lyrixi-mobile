import React, { useState } from 'react'
import { Page, Divider, Switch } from 'lyrixi-mobile'

export default function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <Page>
      <Page.Main>
        <Divider>Size m</Divider>
        <Switch
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          // disabled
          checked={checked}
          on="On On On On"
          off="Off"
          onChange={setChecked}
        />
        <Divider>Size s</Divider>
        <Switch
          size="s"
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          size="s"
          // disabled
          checked={checked}
          on="On On On On"
          off="Off"
          onChange={setChecked}
        />
        <Divider>Size l</Divider>
        <Switch size="l" checked={checked} onChange={setChecked} />
        <Switch size="l" checked={checked} on="On On On On" off="Off" onChange={setChecked} />
      </Page.Main>
    </Page>
  )
}
