import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Component } from 'react';
import BottoneApriRecensione from './BottoneApriRecensione'

class MyBookCard extends Component {

  state = {
    selected: false
  }


  render(){
    let book = this.props.book
    let visibilitàModale = this.props.visibilitàModale
    let bookDaRecensire = this.props.bookDaRecensire
    let setBookDaRecensire = this.props.setBookDaRecensire
  const aggiornaStato = () => {
      this.setState(prevState => ({
        selected: !prevState.selected
      }))
    }
    


  return (
    <Col xs={2} className={this.state.selected ? 'py-3 m-md-1 epiBookCard d-flex flex-column rounded-2 selectedBook' : 'py-3 m-md-1 epiBookCard d-flex flex-column rounded-2'}>
      <Card.Img variant="top" src={book.img} className='rounded-top-2' />
      <Card.Body className="d-flex flex-column ">
        <Card.Title className='fw-bold mb-2'>{book.title}</Card.Title>
        <Card.Text className='m-0 text-start ps-1'>
          Genere: {book.category}
        </Card.Text>
        <Card.Text className='m-0 text-start ps-1 mb-3'>
          ASIN: {book.asin}
        </Card.Text>
        <div className="mt-auto mb-3 d-flex gap-2 align-items-baseline justify-content-evenly">
          <Button onClick={aggiornaStato} 
          className='rounded-pill d-flex align-items-center justify-content-baseline'
          variant="EpicodeTemaColore1">Aggiungi (€{book.price})</Button>
          <BottoneApriRecensione book={book}  visibilitàModale={visibilitàModale} setBookDaRecensire={setBookDaRecensire} bookDaRecensire={bookDaRecensire}/>
        </div>
      </Card.Body>
    </Col>
  )
}
}


export default MyBookCard