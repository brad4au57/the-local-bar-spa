import React, { useState } from "react";
import infoLogo from "../assets/stacked-light-bg.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function BarInfo(props) {
  const [modalShow, setModalShow] = useState(false);

  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  return (
    <Container className="text-center info-section">
      <img src={infoLogo} className="info-logo" alt="stacked light logo" />
      <p className="text-uppercase info-header-text">
        Sl&aacute;inte! When you're here, <br />
        you're one of the locals
      </p>
      <p className="info-body-text">
        We’re fiercely independent, priding ourself on simple, honest, modern
        pub fare. Obsessively, we seek the best, most mouth-watering ingredients
        we can find locally from farmers, growers, makers and markets, fusing
        them together to create innovative flavours and fresh, vibrant,
        sumptuous dishes; putting our passion for your palate on a plate.
      </p>
      <p className="info-body-text pt-3">
        Open from lunch ’till late daily, every dish we serve is lovingly
        handmade with heart from our home on Temple Lane.
      </p>
      <Button
        variant="outline-primary"
        className="text-uppercase mt-3 mb-5 py-3 px-5"
        onClick={handleModalShow}
      >
        Click to email
      </Button>

      <Modal show={modalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Do you like this?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This site isn't real! But if you like it, I can make one just like it
          for you. To check out my other work or to get in touch, go to{" "}
          <a
            href="http://www.bradbales.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>BradBales.com</strong>
          </a>{" "}
          to see more!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
