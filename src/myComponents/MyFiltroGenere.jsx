import Form from 'react-bootstrap/Form';

function MyFiltroGenere({ genereSelezionato, setGenereselezionato }) {
  // Funzione per fermare la propagazione dell'evento
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const changeGenre = function(e){
    setGenereselezionato(e.target.value);
  }

  return (
    <Form.Select aria-label="Seleziona genere" className="w-100" id='filtroGenere'
     onClick={handleDropdownClick}
     onChange={changeGenre}>
      <option>Genere:</option>
      <option value="Fantasy">Fantasy</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Romance">Romance</option>
      <option value="Sci-fi">Sci-fi</option>
    </Form.Select>
  );
}

export default MyFiltroGenere;
