import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Addcomment() {
  const [voto, setVoto] = useState(3); // stato per il voto
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logica per gestire il submit del form
    console.log('voto:', voto);
    console.log('Comment:', comment);

    // Reset dei campi del form
    setVoto(1);
    setComment('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Voto (1-5)</InputGroup.Text>
        <Form.Control
          type="range"
          min="1"
          max="5"
          value={voto}
          onChange={e => setVoto(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Commento:</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="Commento"
          required
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </InputGroup>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
}

export default Addcomment;

