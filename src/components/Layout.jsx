import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import '../styles/layout.css'

function Layout() {
  return (
    <>
    <div className='layout '>
        <Navbar/>
          <Outlet/>
        <Footer/>
        </div>

    </>

  )
}

export default Layout