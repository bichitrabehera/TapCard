import React from 'react'
import Header from '../Components/HeroSection'
import KeyFeatures from '../Components/KeyFeatures'
import HowToUse from "../Components/HowToUse";
import WhereToUse from "../Components/WhereToUse"

const Home = () => {
  return (
   <>
   <div className="">
    <Header/>
    <KeyFeatures/>
    <HowToUse/>
    <WhereToUse/>
   </div>
   </>
  )
}

export default Home