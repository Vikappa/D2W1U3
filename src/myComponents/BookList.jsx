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
let carrello = this.props.carrello

const arrayDiLibriDaRenderizzare = [...arrayDiLibri.filter((book) => {
  if(book.title.toLowerCase().includes(filtroRicerca.toLowerCase()) || filtroRicerca === "") {
    return book
  } else {
    return null
  }
})]

  return (
  <div className="container-fluid" key="bookListContainer">
    <div className='row flex-wrap justify-content-evenly'>
      {arrayDiLibriDaRenderizzare.map((book, index) => (
         <MyBookCard key={index} book={book} />
        ))}
    </div>
  </div>
  )
}
}

export default BookList
