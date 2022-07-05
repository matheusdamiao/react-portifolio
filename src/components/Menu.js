import React from 'react'
import './style.scss'
import { Routes, Route, Link } from 'react-router-dom';
import Bars from './assets/bars-solid.svg'



const Menu = () => {
  return (
    <div>
      
        <nav className='nav'>
          <div className='links'>
            <Link to="/"> home </Link>
            <Link to="/projetos"> projetos </Link>
            <Link to="/sobre"> sobre </Link>
            <Link to="/contato"> contato </Link> 
          </div>
            <img src={Bars} alt='menu-bars' className='bars'/>
        </nav>
        
      
    </div>
  )
}

export default Menu
