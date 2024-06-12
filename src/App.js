import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
