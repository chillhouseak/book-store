import React, { useEffect, useState } from 'react'
import Bookscard from '../components/Bookscard';
function Favouritebooks() {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("https://book-store-y21m.onrender.com/all-books").then(res=> res.json()).then(data => setBooks(data.slice(0,6)))
    },[])
  return (
    <div>
      <Bookscard books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default Favouritebooks
