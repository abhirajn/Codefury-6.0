import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Mirror from '../Components/Mirror'
import Testimonias from '../Components/Testimonials/Testimonials'
import Login from './Login'
import Signup from './Signup'
import Header from '../Components/Testimonials/Header'
import Tipscard from '../Components/Tipscard'
import FAQ from '../Components/FAQ/FAQ'
import Pricing from '../Components/Pricing'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div className='flex flex-row overscroll-none overscroll-y-none'>

      {/* <Header/> */}
{/*  */}
     <div className = 'fixed'>
     <Sidebar/>
     </div>
    <div>
    <Navbar/>
    <Hero />

    <Pricing/>
       
     <FAQ/>
     <Testimonias/>
       
     <Footer/>
    </div>
    </div>
  )
}
