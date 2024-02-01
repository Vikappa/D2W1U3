import Form from 'react-bootstrap/Form'

function CampoRicercaPerTitolo({ ricerca, setRicerca }) {
    
    const handleDropdownClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
      }

      const updateInput = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(e.target.value)
        setRicerca(e.target.value)
        console.log(ricerca)
      }
  return (
    <>
      <Form.Label
       onClick={handleDropdownClick}
        htmlFor="campoRicercaLibro">Cerca..</Form.Label>
      <Form.Control  onClick={handleDropdownClick} onChange={updateInput}
        type="text"
        id="campoRicercaLibro" placeholder='Titolo..' value={ricerca.ricerca}
        aria-describedby="Casella di ricerca per inserire il titolo da cerca (Ma perchè vuoi comprare un libro se sei cieco?)"
      />
    </>
  )
}

export default CampoRicercaPerTitolo