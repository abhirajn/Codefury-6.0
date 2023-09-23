import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Mirror from '../Components/Mirror'
import Testimonias from '../Components/Testimonials/Testimonials'
import Login from './Login'
import Signup from './Signup'
<<<<<<< HEAD
=======
import Header from '../Components/Testimonials/Header'
>>>>>>> 5ba32c958530e4ea61f145607f8ace4d72fdb622
import Tipscard from '../Components/Tipscard'
import FAQ from '../Components/FAQ/FAQ'
import Pricing from '../Components/Pricing'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div className='flex flex-row overscroll-none overscroll-y-none'>

      <Header/>

<<<<<<< HEAD
{/*  */}
     <div className = 'fixed'>
     <Sidebar/>
     
     </div>
    <div>
    <Navbar/>
    <Hero />
        <Pricing/>
=======

        <Sidebar/>
        <Mirror/>
>>>>>>> 5ba32c958530e4ea61f145607f8ace4d72fdb622
     <FAQ/>
      <Testimonias/>

     <Footer/>
    </div>
    </div>
  )
}
