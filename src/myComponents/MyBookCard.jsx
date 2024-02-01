import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Component } from 'react';

class MyBookCard extends Component {

  state = {
    selected: false
  }


  render(){

  const aggiornaStato = () => {
      this.setState(prevState => ({
        selected: !prevState.selected
      }))
    }
    
  let book = this.props.book
  return (
    <Col xl={2} lg={3} md={3} sm={5} xs={10} className={this.state.selected ? 'py-3 m-md-1 epiBookCard d-flex flex-column rounded-2 selectedBook' : 'py-3 m-md-1 epiBookCard d-flex flex-column rounded-2'}>
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
          <Button onClick={aggiornaStato} variant="EpicodeTemaColore1">ADD TO CART (€{book.price})</Button>
        </div>
      </Card.Body>
    </Col>
  )
}
}


export default MyBookCard