import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-y21m.onrender.com//all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Failed to fetch books:", err));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-12'>All Books are here</h2>

      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {books.map(book => (
          <div
            key={book._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <img
              src={book.imageUrl}
              alt={book.bookTitle}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{book.bookTitle}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {book.description?.slice(0, 100) || "No description available."}...
              </p>

              {/* 🔗 Buy Now leads to Single Book page */}
              <Link to={`/book/${book._id}`}>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Buy Now
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
