import React from 'react'
import Navbar from '../Components/navbar'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import WhyChooseUs from '../Components/WhyUs'
import WhereToUse from '../Components/WhereToUse'
import Footer from '../Components/Footer'

const Home = () => {
  return (
   <>
   <div className="">
    <Navbar/>
    <Header/>
    <AboutUs/>
    <WhyChooseUs/>
    <WhereToUse/>
    <Footer/>
   </div>
   </>
  )
}

export default Home