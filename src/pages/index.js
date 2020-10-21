import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
} from '../components/InfoSection/Data'
import Services from '../components/Services'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navbar isOpen={isOpen} toggleOpen={toggleOpen} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <Services />
      <InfoSection {...homeObjectThree} />
    </>
  )
}

export default Home
