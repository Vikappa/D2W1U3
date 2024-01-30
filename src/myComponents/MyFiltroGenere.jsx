import Form from 'react-bootstrap/Form';

function MyFiltroGenere() {
  // Funzione per fermare la propagazione dell'evento
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Form.Select aria-label="Seleziona genere" className="w-100" id='filtroGenere' onClick={handleDropdownClick}>
      <option>Genere:</option>
      <option value="1">Fantasy</option>
      <option value="2">History</option>
      <option value="3">Horror</option>
      <option value="4">Romance</option>
      <option value="5">Sci-fi</option>
    </Form.Select>
  );
}

export default MyFiltroGenere;
