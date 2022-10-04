import React from 'react'
// import { Routes, Route, Link, Outlet } from 'react-router-dom'
// import Header from './Header'
// import Projetos from './Projetos'
// import Sobre from './Sobre'
import Contato from './Contato'
import Footer from './Footer'
import NewHeader from './NewHeader'
import NewProjetos from './NewProjetos'
import Stack from './Stack'
import About from './About'
import Contact from './Contact'


const Main = () => {
  return (
     <>
     {/* <Header /> */}  
      {/* <Projetos /> */}
       {/* <Sobre /> */}
     <NewHeader/>
     <NewProjetos />
     <Stack />
     <About />
     <Contact />
     {/* <Contato /> */}
     <Footer />
    </>
  )
}

export default Main
