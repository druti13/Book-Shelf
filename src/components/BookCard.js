// src/components/BookCard.js
import React from 'react';

function BookCard({ book }) {
  const addToBookshelf = () => {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...currentBookshelf, book]));
  };

  // Construct the cover image URL using the cover_i identifier
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/128x193?text=No+Cover';

  return (
    <div className="book-card">
      <img src={coverImageUrl} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button  onClick={addToBookshelf}>Add to Bookshelf</button>
    </div>
  );
}

export default BookCard;
