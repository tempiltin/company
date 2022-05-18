import React from 'react'
import DataFilter from './Components/UZ/DataFilterportfolio/DataFilter'
import Header from './Components/UZ/Header/Header'
import Navbar from './Components/UZ/Navbar/Navbar'
import SecAbout from './Components/UZ/Sec-About/SecAbout'
import Section1 from './Components/UZ/Section1/Section1'
import Services from './Components/UZ/Services/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Services />
      <SecAbout />
      <DataFilter />

    </>
  )
}

export default App