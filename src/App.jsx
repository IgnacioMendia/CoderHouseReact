import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import BestSellers from './components/bestSellers/BestSellers'
import Banner from './components/banner/Banner'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner />
      <BestSellers></BestSellers>
      
    </>
  )
}

export default App
