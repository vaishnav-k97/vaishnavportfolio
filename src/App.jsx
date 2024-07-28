import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Experience from './components/Experience'
import Education from './components/Education'
import Hobbies from './components/Hobbies'

export default function App() {
  return (
    <>
      <Navbar/>
      <div className='max-w-6xl pt-20 mx-auto'>
        <HeroSection/>
        <FeatureSection/>
        <Experience/>
        <Workflow/>
        <Education/>
        <Hobbies/>
        <Price/>
      </div>
    </>
  )
}
