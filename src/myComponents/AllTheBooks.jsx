import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasyBooks from '../books/fantasy.json';
import historyBooks from '../books/history.json';
import horrorBooks from '../books/horror.json';
import romanceBooks from '../books/romance.json';
import scifiBooks from '../books/scifi.json';
import MyBookCard from './MyBookCard';

function AllTheBooks() {
  const totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(totalBooklist) //knot-shuffle sull'array argomento

  return (
    <div className="container-fluid">
    <div className='row flex-wrap justify-content-evenly'>
      {totalBooklist.map((book, index) => (
        <MyBookCard key={index} book={book} />
        ))}
    </div>
        </div>
  )
}

export default AllTheBooks
