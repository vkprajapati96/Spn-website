import React from 'react'
import {Router,Routes,Route} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import CallButton from './components/CallButton'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ScrollTop from './components/ScrollTop'


  function App() {
  return (
    <div>

    <ScrollTop/>
    <CallButton/>
      <Navbar/>


      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='privacy-policy' element={<PrivacyPolicy/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App