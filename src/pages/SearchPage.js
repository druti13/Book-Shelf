import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; 
import BookList from '../components/BookList';
import './SearchPage.css';
function SearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (q) => {
    if (q.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchBooks(value);
  };

  return (
    <div>
      <h1>Let's Search Your Book Search</h1>
      <div className="search-bar">
        <FaSearch className="search-icon " />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books... Press Enter"
        />
      </div>
      <BookList books={books} />
    </div>
  );
}

export default SearchPage;
