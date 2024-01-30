import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasyBooks from '../books/fantasy.json';
import historyBooks from '../books/history.json';
import horrorBooks from '../books/horror.json';
import romanceBooks from '../books/romance.json';
import scifiBooks from '../books/scifi.json';

function AllTheBooks() {
  const totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ];

  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {totalBooklist.map((book, index) => (
        <Card className='mb-4 epiBookCard' key={"bookCardId"+index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
         <p>Genere: {book.category}</p>     
         <p>ASIN: {book.asin}</p>
            </Card.Text>
            <Button variant="EpicodeTemaColore1">BUY (€{book.price})</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllTheBooks;
