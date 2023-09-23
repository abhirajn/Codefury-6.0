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

export default function Home() {
  return (
    <div>

      <Header/>


        <Sidebar/>
        <Mirror/>
     <FAQ/>
      <Testimonias/>

      <Footer/>
    </div>
  )
}
