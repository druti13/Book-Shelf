// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import './BookshelfPage.css'; // Import CSS file

function BookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} setBookshelf={setBookshelf} />
    </div>
  );
}

export default BookshelfPage;
