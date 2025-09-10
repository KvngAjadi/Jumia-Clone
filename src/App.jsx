import React from 'react'

import Hero from './Component/Hero'
import Home from"./Pages/Home";
import NavBar from './Component/NavBar';

const App = () => {
  return (
    <div> <section className='flex flex-col bg-[#6AC1D5]'>
    <NavBar/>
      <Home/>
    <Hero/>
   </section></div>
   
  
  )
}

export default App
