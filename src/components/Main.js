import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './Header'
import Projetos from './Projetos'
import Sobre from './Sobre'
import Contato from './Contato'


const Main = () => {
  return (
     <>
     <Header />
     <Projetos />
     <Sobre />
     <Contato />
      </>
  )
}

export default Main
