import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyBookCard({index, book}) {
  return (
    <Card className='mb-4 epiBookCard' key={"bookCardId"+index} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
      Genere: {book.category}
      </Card.Text>
      <Card.Text>
      ASIN: {book.asin}
      </Card.Text>
      <Button variant="EpicodeTemaColore1">BUY (€{book.price})</Button>
    </Card.Body>
  </Card>
  );
}

export default MyBookCard;