import React from 'react'
import './style.scss'
import { Routes, Route, Link } from 'react-router-dom';




const Menu = () => {
  return (
    <div>
      
        <nav className='nav'>
            <Link to="/"> home </Link>
            <Link to="/projetos"> projetos </Link>
            <Link to="/sobre"> sobre </Link>
            <Link to="/contato"> contato </Link> 

        </nav>
      
    </div>
  )
}

export default Menu
