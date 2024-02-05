import Button from 'react-bootstrap/Button';

function BottoneApriRecensione(props) {

  return (
    <>
      <Button className="me-2 mb-2 btn-EpicodeTemaColore5 rounded-pill d-flex justify-content-center align-items-center my-auto" onClick={() => {
        props.setBookDaRecensire(props.book)
      }}>Recensioni</Button>
    </>
  );
}

export default BottoneApriRecensione;