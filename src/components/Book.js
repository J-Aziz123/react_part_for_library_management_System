import React from 'react';

const Book = ({ book, addToCart }) => {
  return (
    <div className="book">
      <img src={`/images/${book.image}`} alt={book.title} className="book-image" /> {/* Updated the image path */}
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Published Date: {book.publishedDate}</p>
      <p>Price: ${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default Book;
