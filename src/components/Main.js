import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Projetos from './Projetos'
import Sobre from './Sobre'
import Contato from './Contato'
import Footer from './Footer'


const Main = () => {
  return (
     <>
     <Header />
     <Projetos />
     <Sobre />
     <Contato />
     <Footer />
    </>
  )
}

export default Main
