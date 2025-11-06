import React from 'react'
import { Page, Message, Button } from 'lyrixi-mobile'

export default () => {
  const handleOpenMessage = () => {
    Message.open({
      icon: 'lyrixi-icon-config color-primary',
      title: 'Title',
      content: '<div>Content</div>',
      buttonsLayout: 'vertical',
      buttons: [
        {
          name: 'Button 1',
          onClick: () => {
            console.log('Button 1 clicked')
            return true // Close the message
          }
        },
        {
          name: 'Button 2',
          className: 'primary',
          onClick: () => {
            console.log('Button 2 clicked')
            return true // Close the message
          }
        }
      ]
    })
  }

  const handleOpenHorizontalMessage = () => {
    Message.open({
      icon: 'lyrixi-icon-config color-primary',
      title: 'Horizontal Layout',
      content: '<div>This message uses horizontal button layout</div>',
      buttonsLayout: 'horizontal',
      buttons: [
        {
          name: 'Cancel',
          onClick: () => {
            console.log('Cancel clicked')
            return true
          }
        },
        {
          name: 'Confirm',
          className: 'primary',
          onClick: () => {
            console.log('Confirm clicked')
            return true
          }
        }
      ]
    })
  }

  const handleOpenSimpleMessage = () => {
    Message.open({
      title: 'Simple Message',
      content: '<div>This is a simple message without icon</div>',
      buttons: [
        {
          name: 'OK',
          className: 'primary',
          onClick: () => {
            console.log('OK clicked')
            return true
          }
        }
      ]
    })
  }

  const handleCloseMessage = () => {
    Message.close()
  }

  return (
    <Page>
      <Page.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button className="lyrixi-flex" color="primary" onClick={handleOpenMessage}>
            Open Message (Vertical)
          </Button>

          <Button className="lyrixi-flex" color="secondary" onClick={handleOpenHorizontalMessage}>
            Open Message (Horizontal)
          </Button>

          <Button className="lyrixi-flex" color="default" onClick={handleOpenSimpleMessage}>
            Open Simple Message
          </Button>

          <Button className="lyrixi-flex" color="danger" onClick={handleCloseMessage}>
            Close Current Message
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
