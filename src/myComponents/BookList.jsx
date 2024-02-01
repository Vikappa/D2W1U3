import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyBookCard from './MyBookCard';

class BookList extends Component {
  render(){
let arrayDiLibri = this.props.arrayBooks.totalBooklist
let filtroGenere = this.props.genereselezionato
let filtroMinPrezzo = this.props.minPrezzo
let filtroMaxPrezzo = this.props.maxPrezzo
let filtroRicerca = this.props.ricerca
let bookDaRecensire = this.props.bookDaRecensire  
let setBookDaRecensire = this.props.setBookDaRecensire
// let carrello = this.props.carrello
let mostraModaleRecensione = this.props.mostraModaleRecensione
let visibilitàModale = this.props.visibilitàModale

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
    <div className='row flex-wrap justify-content-evenly'>
      {arrayDiLibri.map((book, index) => (
         <MyBookCard key={index} book={book} visibilitàModale={visibilitàModale} mostraModaleRecensione={mostraModaleRecensione}  bookDaRecensire={bookDaRecensire} setBookDaRecensire={setBookDaRecensire}/>
        ))}
    </div>
  </div>
  )
}
}

export default BookList
