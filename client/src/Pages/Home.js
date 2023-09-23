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

<<<<<<< HEAD
    
=======

>>>>>>> 4bab81f745b28d45ae9986ee406a1d2efe69b5f3
{/*  */}
     <div className = 'fixed'>
     <Sidebar/>
     </div>

    <div>
    <Navbar/>
    <Hero />
<<<<<<< HEAD
    <Pricing/>
        {/* <Sidebar/> */}
        {/* <Mirror/> */}
     <FAQ/>
     <Testimonias/>

=======
        <Pricing/>
        <Mirror/>
        <FAQ/>
      <Testimonias/>
>>>>>>> 4bab81f745b28d45ae9986ee406a1d2efe69b5f3
     <Footer/>
    </div>
    </div>
  )
}
