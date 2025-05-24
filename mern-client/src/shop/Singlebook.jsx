import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Singlebook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://book-store-pp85.vercel.app//book/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error("Failed to fetch book:", err));
  }, [id]);

  if (!book) {
    return <div className="text-center mt-20 text-lg text-gray-500">Loading book details...</div>;
  }

  return (
    <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center animate-fade-in">
        
        {/* Image with animation */}
        <div className="w-full md:w-1/2">
          <img
            src={book.imageUrl}
            alt={book.bookTitle}
            className="rounded-lg shadow-xl w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Book info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-blue-700">{book.bookTitle}</h1>
          <p className="text-gray-600 text-lg">by <span className="font-semibold text-black">{book.authorName}</span></p>
          <p className="text-sm bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full font-medium">{book.category}</p>
          <p className="text-sm bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full font-medium gap-10">{book.Price}</p>
          <p className="text-gray-700 leading-relaxed mt-4">
            {book.description}
          </p>

          <div className="flex items-center gap-4 mt-6">
             <a
              href={book.bookpdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Buy
            </a>
            <a
              href={book.bookpdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Read / Download PDF
            </a>
            <Link
              to="/shop"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebook;
