import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const BooksGrid = ({ addToCart }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    axios.get('http://localhost:2024/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const filteredBooks = books.filter(book => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (minPrice === '' || book.price >= minPrice) &&
      (maxPrice === '' || book.price <= maxPrice) &&
      (rating === '' || book.rating >= rating)
    );
  });

  return (
    <div className="books-grid">
      <div className="filters">
        <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} />
        <input type="number" placeholder="Min Price" value={minPrice} onChange={handleMinPrice} />
        <input type="number" placeholder="Max Price" value={maxPrice} onChange={handleMaxPrice} />
        <select value={rating} onChange={handleRating}>
          <option value="">All Ratings</option>
          <option value="1">1 & up</option>
          <option value="2">2 & up</option>
          <option value="3">3 & up</option>
          <option value="4">4 & up</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="books-list">
        {filteredBooks.map(book => (
          <Book key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;
