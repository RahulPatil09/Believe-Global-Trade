import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Empowering from './Components/Empowering'
import Aboutus from './Components/Aboutus'
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'
import Services from './Components/Services'
import WhyChooseUs from './Components/WhyChooseUs'
import Feedback from './Components/Feedback'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Process from './Components/Process'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Aboutus/>
              <Product />
              <Services/>
              <Process/>
              <WhyChooseUs/>
              <Feedback/>
              <ContactUs/>
              <Footer/>
            </>
          } />
          <Route path="/about" element={
            <>
              <Aboutus/>
              <Footer/>
            </>
          } />
          <Route path="/products" element={
            <>
              <Product/>
              <Footer/>
            </>
          } />
          <Route path="/services" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/import-services" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/customs-support" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/product-sourcing" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/export-services" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/documentation" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/market-access" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/agriculture" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/machinery" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/services/textiles" element={
            <>
              <Services/>
              <Footer/>
            </>
          } />
          <Route path="/feedback" element={
            <>
              <Feedback/>
              <Footer/>
            </>
          } />
          <Route path="/contact-us" element={
            <>
              <ContactUs/>
              <Footer/>
            </>
          } />
          <Route path="/why-choose-us" element={
            <>
              <WhyChooseUs/>
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
