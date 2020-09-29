import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CountryList from './countrylist'


function OrderNow() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Order Now</Button>}
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content >
        <Modal.Description>
        </Modal.Description>
        <CountryList/>

      </Modal.Content>
    </Modal>
  )
}

export default OrderNow
