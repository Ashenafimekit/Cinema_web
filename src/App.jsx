import * as React from 'react'
import About from './components/About';
import Cont from './components/Cont';
import Gallery from './components/Gallery';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';


function App() {

   
  return (

     
    <BrowserRouter>
      <Routes>
        
        <Route path='/Home' element = {<Home/>} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/About' element={<About />} />
        <Route path='/GalleryPage' element={<GalleryPage/>} />
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path='/ContactPage' element={<ContactPage/>} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
