import React, { useState} from 'react'
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import CardProjeto from './CardProjeto'

const ProjetoCompleto = () => {
   
    const { id } = useParams();

  return (
    <>
       <p> Testando {id} </p>
    </>
  )
}

export default ProjetoCompleto
