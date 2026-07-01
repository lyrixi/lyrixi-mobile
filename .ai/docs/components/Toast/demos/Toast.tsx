import React, { useEffect, useState } from 'react'
import { Page, Toast, Button } from 'lyrixi-mobile'

import type { ToastProps } from '../types'

type ToastConfig = ToastProps & { key: number }

function DeclarativeToast({
  onDismiss,
  duration,
  onClose,
  ...props
}: ToastProps & { onDismiss: () => void }) {
  useEffect(() => {
    const ms = typeof duration === 'number' ? duration : 2000
    const timer = window.setTimeout(onDismiss, ms)
    return () => {
      window.clearTimeout(timer)
    }
  }, [duration, onDismiss])

  return (
    <Toast
      {...props}
      duration={duration}
      onClose={() => {
        onClose?.()
        onDismiss()
      }}
    />
  )
}

export default function ToastDemo() {
  const [toast, setToast] = useState<ToastConfig | null>(null)

  const handleClose = () => {
    setToast(null)
  }

  const showToast = (props: ToastProps) => {
    setToast({ ...props, key: Date.now() })
  }

  return (
    <>
      <Page>
        <Page.Main>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button
              className="lyrixi-flex"
              color="primary"
              onClick={() => showToast({ content: 'Default Toast' })}
            >
              Show Default Toast
            </Button>

            <Button
              className="lyrixi-flex"
              color="info"
              onClick={() => showToast({ content: 'Top placement', placement: 'top' })}
            >
              Show Toast (placement: top)
            </Button>

            <Button
              className="lyrixi-flex"
              color="default"
              onClick={() => showToast({ content: 'Bottom placement', placement: 'bottom' })}
            >
              Show Toast (placement: bottom)
            </Button>

            <Button
              className="lyrixi-flex"
              color="warning"
              onClick={() =>
                showToast({
                  content: 'Mask not clickable',
                  maskClickable: false,
                  duration: 5000
                })
              }
            >
              Show Toast (maskClickable: false)
            </Button>

            <Button
              className="lyrixi-flex"
              color="info"
              onClick={() =>
                showToast({
                  content: 'Custom style',
                  className: 'demo-toast-custom',
                  style: { backgroundColor: '#333', color: '#fff' },
                  maskStyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                  duration: 3000
                })
              }
            >
              Show Toast (custom style)
            </Button>

            <Button
              className="lyrixi-flex"
              color="default"
              onClick={() =>
                showToast({
                  content: 'Check console for callbacks',
                  duration: 3000,
                  onOpen: () => {
                    console.log('Toast opened')
                  },
                  onClose: () => {
                    console.log('Toast closed')
                  }
                })
              }
            >
              Show Toast (onOpen / onClose)
            </Button>

            <Button className="lyrixi-flex" color="danger" onClick={handleClose}>
              Hide Toast
            </Button>
          </div>
        </Page.Main>
      </Page>

      {toast ? (
        <DeclarativeToast
          key={toast.key}
          duration={toast.duration}
          maskClickable={toast.maskClickable}
          placement={toast.placement}
          content={toast.content}
          maskClassName={toast.maskClassName}
          maskStyle={toast.maskStyle}
          className={toast.className}
          style={toast.style}
          onOpen={toast.onOpen}
          onClose={toast.onClose}
          onDismiss={handleClose}
        />
      ) : null}
    </>
  )
}
