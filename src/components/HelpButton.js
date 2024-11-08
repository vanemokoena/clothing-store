
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

const HelpButton = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="my-3">
        Help
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</p>
          <p><strong>Express Shipping:</strong> Delivery within 2-3 business days.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpButton;
