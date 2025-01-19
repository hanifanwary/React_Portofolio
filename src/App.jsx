import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Component/Element/navbar/navbar'
import home from './Component/Layout/home'
import HomeLayout from './Component/Layout/home'
import About from './Component/Layout/about'
import Projects from './Component/Layout/Projects'
import ContactLayout from './Component/Layout/contact'
import Footers from './Component/Layout/footer'
import ScrollToTop from './Component/Element/scroll to top/scrollToTop'



function App() {

  
  return (
    <>
    <Navbar></Navbar>
    {/* home Layout */}
    <HomeLayout></HomeLayout>
    {/* About layout */}
    <About></About>
    {/* Projects */}
    <Projects></Projects>
    {/* Contact */}
    <ContactLayout></ContactLayout>
    {/* footers */}
    <Footers></Footers>
    <ScrollToTop></ScrollToTop>
    </>
  )
}

export default App
