import Button from 'react-bootstrap/Button';

function BottoneApriRecensione(props) {

  return (
    <>
      <Button className="me-2 mb-2" onClick={() => {
        props.setBookDaRecensire(props.book)
        props.mostraModaleRecensione(true)
      }}>Recensioni</Button>
    </>
  );
}

export default BottoneApriRecensione;