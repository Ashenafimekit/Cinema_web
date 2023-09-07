import React from 'react'
import Header from './Header'
import Gallery from './Gallery'
import About from './About'
import Cont from './Cont'
import Footer from './Footer'
import Slide from './Slide'


const Home = () => {
  return (
    <div>
        <Header/>
        <Slide/>
        <Gallery/>
        <About/>
        <Cont/>
        <Footer/>
    </div>
  )
}

export default Home