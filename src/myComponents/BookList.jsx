import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyBookCard from './MyBookCard';

class BookList extends Component {
  render(){

let arrayDiLibri = this.props.arrayBooks.totalBooklist

  return (
    <div className="container-fluid">
    <div className='row flex-wrap justify-content-evenly'>
      {arrayDiLibri.map((book, index) => (
         <MyBookCard key={index} book={book} />
        ))}
    </div>
        </div>
  )
}
}

export default BookList
