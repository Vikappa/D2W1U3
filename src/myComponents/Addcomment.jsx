import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Addcomment(props) {
  const [voto, setVoto] = useState(3)
  const [comment, setComment] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props)


    setVoto(3);
    setComment('');
  
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(

            {
                comment: {
            "coment": comment,
            "rate": voto.toString(),
            "elementId": props.asin
        },

    }
        
        ),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYmZhMjViMjYxNTAwMTk4YTY5ZDEiLCJpYXQiOjE3MDY4MDMxMDYsImV4cCI6MTcwODAxMjcwNn0.Nd53m85hDCboOWQbiPqo7w_rfR59J3N42S42IYpZ2cM",
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            // la response ci vuole dire che il salvataggio della prenotazione è andato a buon fine!
            alert('Commento inviato :)')

          } else {
            throw new Error('Errore nel salvataggio del commento! :(')
          }
        })
        .catch((e) => {
          alert(e)
        })
    

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

