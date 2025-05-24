import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Myfooter from './components/Myfooter'

const App = () => {
  return (
  <>
    <Navbar/>
    <div>
  <Outlet/>
    </div>
    
    <Myfooter/>
  </>
  )
}

export default App
