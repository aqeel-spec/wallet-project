import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

export default function MyVerticallyCenteredModal(props) {
    const [value, setValue] = useState(props.balance || 0);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-white'
    >
      <Modal.Header closeButton style={{ '--bs-modal-close-color': 'gray' }}>
        <Modal.Title id="contained-modal-title-vcenter">
          User Balance : {props.balance} ETH
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
            <Form.Group className="mb-3 px-5 " controlId="exampleForm.ControlInput1">
                <div className='d-flex w-75 items-center m-auto justify-content-between gap-2 align-items-center'>
                <Form.Control
                    className='input'
                    type="number"
                    value={value} // Bind value to state
                    onChange={(e) => setValue(Number(e.target.value))} // Handle manual input
                />
                </div>
            </Form.Group>
            </Form>
            <div as={'div'} className='font-weight-bold pb-2  '><strong>Balance : <span className='font-weight-normal  pb-3'>0 ETH</span></strong></div>
            <p><strong>Total</strong> : <span className='font-weight-normal pb-5'>{props.total} ETH</span></p>
            <Button size={"lg"} className='button w-100 align-items-center text-center items-center  ' >Buy</Button>
      </Modal.Body>
    </Modal>
  );
}