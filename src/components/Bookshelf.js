// src/components/Bookshelf.js
import React from 'react';

function Bookshelf({ books, setBookshelf }) {
  const removeFromBookshelf = (index) => {
    const updatedBookshelf = [...books];
    updatedBookshelf.splice(index, 1);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setBookshelf(updatedBookshelf);
  };

  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(', ')}</p>
          <button  onClick={() => removeFromBookshelf(index)}>Remove from Bookshelf</button>
        </div>
      ))}
    </div>
  );
}

export default Bookshelf;
