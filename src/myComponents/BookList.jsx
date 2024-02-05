import React, { Component } from 'react';
import MyBookCard from './MyBookCard';
import Col from 'react-bootstrap/Col';
import CommentsColumn from './CommentsColumn';

class BookList extends Component {

  componentDidUpdate(prevProps) {
    if(this.props.bookDaRecensire.asin){

    }
  }

  render(){
let arrayDiLibri = this.props.arrayBooks.totalBooklist
let filtroGenere = this.props.genereselezionato
let filtroMinPrezzo = this.props.minPrezzo
let filtroMaxPrezzo = this.props.maxPrezzo
let filtroRicerca = this.props.ricerca
let bookDaRecensire = this.props.bookDaRecensire  
let setBookDaRecensire = this.props.setBookDaRecensire
// let carrello = this.props.carrello

  arrayDiLibri = [...arrayDiLibri.filter((book) => {
    if(book.title.toLowerCase().includes(filtroRicerca.toLowerCase()) || filtroRicerca === "") {
      return book
    } else {
      return null
    }
  })]

  arrayDiLibri = [...arrayDiLibri.filter((book) => {
    if(book.price >= filtroMinPrezzo && book.price  <= filtroMaxPrezzo) {
      return book
    } else {
      return null
    }
  })]

arrayDiLibri = [...arrayDiLibri.filter((book) => {
  if( book.category === filtroGenere.toLowerCase() || filtroGenere === "Genere:") {
    return book
  } else {
    return null
  }
})]


  return (
    
  <div className="container-fluid" key="bookListContainer">
    <div className='row flex-wrap justify-content-center'>
    <Col className={`d-flex flex-wrap justify-content-center ${this.props.bookDaRecensire.asin?"col-xs-12":"col-9"}`} id="areaLibri">
      {arrayDiLibri.map((book, index) => (
        <MyBookCard key={index} book={book} bookDaRecensire={bookDaRecensire} setBookDaRecensire={setBookDaRecensire}/>
        ))}
        </Col>
        <Col id="areaCommenti">
          <CommentsColumn setBookDaRecensire={setBookDaRecensire} bookDaRecensire={bookDaRecensire} />
        </Col>
    </div>
  </div>
  )
}
}

export default BookList
