import React, { useState } from 'react'
import { Page, Toast, Button } from 'lyrixi-mobile'

type ToastDemoType = 'default' | 'top' | 'bottom' | 'mask' | 'custom' | null

export default function ToastDemo() {
  const [type, setType] = useState<ToastDemoType>(null)

  return (
    <Page>
      <Page.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button className="lyrixi-flex" color="primary" onClick={() => setType('default')}>
            Show Default Toast
          </Button>

          <Button className="lyrixi-flex" color="info" onClick={() => setType('top')}>
            Show Toast (placement: top)
          </Button>

          <Button className="lyrixi-flex" color="default" onClick={() => setType('bottom')}>
            Show Toast (placement: bottom)
          </Button>

          <Button className="lyrixi-flex" color="warning" onClick={() => setType('mask')}>
            Show Toast (maskClickable: false)
          </Button>

          <Button className="lyrixi-flex" color="info" onClick={() => setType('custom')}>
            Show Toast (custom style)
          </Button>

          <Button className="lyrixi-flex" color="danger" onClick={() => setType(null)}>
            Hide Toast
          </Button>
        </div>

        {type === 'default' && <Toast content="Default Toast" />}

        {type === 'top' && <Toast content="Top placement" placement="top" />}

        {type === 'bottom' && <Toast content="Bottom placement" placement="bottom" />}

        {type === 'mask' && <Toast content="Mask not clickable" maskClickable={false} />}

        {type === 'custom' && (
          <Toast
            content="Custom style"
            className="demo-toast-custom"
            style={{ backgroundColor: '#333', color: '#fff' }}
            maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          />
        )}
      </Page.Main>
    </Page>
  )
}
