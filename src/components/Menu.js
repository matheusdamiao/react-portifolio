import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import Bars from './assets/bars-solid.svg'



const Menu = () => {
  const [menuState, setMenuState] = useState('closed');
  
  const toggleMenu = () => {
    menuState !== 'open' ? (setMenuState('open')) : (setMenuState('closed'))
         }

  return (
    <div>
      
        <nav className='nav'>
          <div className='links'>
            <Link to="/"> home </Link>
            <Link to="/projetos"> projetos </Link>
            <Link to="/sobre"> sobre </Link>
            <Link to="/contato"> contato </Link> 
          </div>
          <div>
            <img src={Bars} alt='menu-bars' className='bars' onClick={toggleMenu}/>
            <div className={`menu-bar-${menuState === 'open'? 'active' : 'closed'}`}>
              <Link to="/"> home </Link>
              <Link to="/projetos"> projetos </Link>
              <Link to="/sobre"> sobre </Link>
              <Link to="/contato"> contato </Link> 
            </div>
          </div>
        </nav>
        
      
    </div>
  )
}

export default Menu
