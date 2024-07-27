import React from 'react'
import Nav from '../Navbar'
import { Outlet } from 'react-router-dom'
import SearchBar from '../SearchBar'

const RootLayout = () => {
  return (
    <div>
      
      <Nav/>
      <SearchBar/>

        <Outlet/> 
        
      <p className='py-7 bg-slate-300 mx-auto text-center'>Footer Component</p>
    </div>
  )
}

export default RootLayout