import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = 'Events' title = 'Our Exciting Events'/>
        <Events/>
        <About/>
        <Title subTitle = 'Gallery' title = 'Our Events Photos'/>
        <Gallery/>
        <Title subTitle = 'Contact Us' title = 'Get Involved'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App