import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bannercard from '../home/Bannercard';

function Banner() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a book title to search");
      return;
    }

    try {
      const res = await fetch("https://book-store-pp85.vercel.app//all-books");
      const books = await res.json();

      const matchedBook = books.find(book =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (matchedBook) {
        navigate(`/book/${matchedBook._id}`);
      } else {
        alert("Book not found in database.");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Something went wrong during search.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      {/* Main Wrapper */}
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

        {/* Left Side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell Your Books <br />
            <span className='text-blue-700'>For the Best Prices</span>
          </h2>

          <p className='md:w-4/5 text-gray-700'>
            Discover, buy, and sell books effortlessly. Whether you're looking for your next great read or selling pre-loved books, we've got you covered with unbeatable prices and a seamless experience.
          </p>

          {/* Search Bar */}
          <div className="flex">
            <input
              type="search"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search a book..."
              className='py-2 px-4 rounded-l-md border border-gray-300 outline-none w-full'
            />
            <button
              onClick={handleSearch}
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md'
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2'>
          <Bannercard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
