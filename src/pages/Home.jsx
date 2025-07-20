import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import WhyChooseUs from '../Components/WhyUs'
import WhereToUse from '../Components/WhereToUse'

const Home = () => {
  return (
   <>
   <div className="">
    <Header/>
    <AboutUs/>
    <WhyChooseUs/>
    <WhereToUse/>
   </div>
   </>
  )
}

export default Home