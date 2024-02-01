import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


function Modalerecensione(props) {

console.log(props)
  
    return (
      <>
        <Modal show={props.visibilitàModale} fullscreen={true} onHide={() => props.mostraModaleRecensione(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{props.bookDaRecensire.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Container>
              <Row>
                <Col xs={4}>
                  <img src={props.bookDaRecensire.img}/>
                  <p>{props.bookDaRecensire.asin}</p>
                  <h3>Genere</h3>
                <h3>Prezzo</h3>
                  </Col>
                <Col xs={8} >

                </Col>
              </Row>
            </Container>

          </Modal.Body>
        </Modal>
      </>
    );
  
}

export default Modalerecensione;
