import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

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
    </>
  )
}

export default Home
