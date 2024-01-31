import Form from 'react-bootstrap/Form'

function CampoRicercaPerTitolo() {
  return (
    <>
      <Form.Label htmlFor="campoRicercaLibro">Cerca..</Form.Label>
      <Form.Control
        type="text"
        id="campoRicercaLibro"
        aria-describedby="Casella di ricerca per inserire il titolo da cerca (Ma perchè vuoi comprare un libro se sei cieco?)"
      />
    </>
  )
}

export default CampoRicercaPerTitolo