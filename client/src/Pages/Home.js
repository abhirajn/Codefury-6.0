import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Testimonias from '../Components/Testimonials/Testimonials'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import Tipscard from '../Components/Tipscard'
import FAQ from '../Components/FAQ/FAQ'

export default function Home() {
  return (
    <div>
      <Header/>
        <Sidebar/>
     <FAQ/>
      <Testimonias/>

      <Footer/>
    </div>
  )
}
