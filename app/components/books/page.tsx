import React from 'react';
import './Books.css';
import Image from 'next/image';

const books = [
  { id: 1, title: "Tom Clancy Defense Protocol", author: "Brian Andrews & Jeffrey Wilson", image: "/book1.jpg" },
  { id: 4, title: "Avenging Angel", author: "Kristen Ashley", image: "/book4.jpg" },
  { id: 2, title: "Stuart Woods Golden Hour", author: "Stuart Woods (Written by Brett Battles)", image: "/book2.jpg" },
  { id: 3, title: "The House of Cross", author: "James Patterson", image: "/book3.jpg" },
  { id: 5, title: "Merry Mistletoe Madness", author: "Kristen Ashley", image: "/book5.jpg" },
  { id: 6, title: "City of Night Birds", author: "Juhea Kim", image: "/book6.jpg" },
  { id: 7, title: "Storm Of The Century", author: "Stephen King", image: "/book7.jpg" },
];

const Books = () => {
  
  const allBooks = [...books, ...books];

  return (
    <div className="books-carousel">
        <h1 className='text-center text-6xl mb-6'>Apple Books</h1>
      <div className="carousel-track">
        
        {allBooks.map((book, index) => (
          <div className="book-item" key={`${book.id}-${index}`}>
            <Image width={400} height={400} src={book.image} alt={book.title} />
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
