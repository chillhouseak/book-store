import React from 'react'
import Banner from '../components/Banner.jsx'
import Favouritebooks from './Favouritebooks.jsx'
import FavBook from './FavBook.jsx'
import PromoBanner from './PromoBanner.jsx'
import OtherBooks from './OtherBooks.jsx'
import Review from './Review.jsx'

function Home() {
  return (
    <div>
        <Banner/>
        <Favouritebooks/>
        <FavBook/>
        <PromoBanner/>
        <OtherBooks/>
        <Review/>
    </div>
  )
}

export default Home
