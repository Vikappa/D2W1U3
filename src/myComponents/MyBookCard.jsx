import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function MyBookCard({index, book}) {
  return (
    <Col xl={2} lg={3} md={3} sm={5} xs={10} className='py-3 m-md-1 epiBookCard d-flex flex-column rounded-2' key={"bookCardId"+index}>
      <Card.Img variant="top" src={book.img} className='rounded-top-2' />
      <Card.Body className="d-flex flex-column ">
        <Card.Title className='fw-bold mb-2'>{book.title}</Card.Title>
        <Card.Text className='m-0 text-start ps-1'>
          Genere: {book.category}
        </Card.Text>
        <Card.Text className='m-0 text-start ps-1 mb-3'>
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