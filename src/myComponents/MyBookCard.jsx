import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function MyBookCard({index, book}) {
  return (
    <Col lg={2} md={3} xs={5} className='mb-4 epiBookCard d-flex flex-column' key={"bookCardId"+index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className='fw-bold'>{book.title}</Card.Title>
        <Card.Text className='m-0 text-start ps-1'>
          Genere: {book.category}
        </Card.Text>
        <Card.Text className='m-0 text-start ps-1'>
          ASIN: {book.asin}
        </Card.Text>
        <div className="mt-auto mb-3">
          <Button variant="EpicodeTemaColore1">BUY (€{book.price})</Button>
        </div>
      </Card.Body>
    </Col>
  )
}


export default MyBookCard