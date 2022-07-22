import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import Bars from './assets/bars-solid.svg'



const Menu = () => {
  
       
  const [menuState, setMenuState] = useState('closed');

    const toggleMenu = () => {
      setMenuState('active')
      if(menuState === 'active') {
        setMenuState('closed') 
      } 
      }           

    const closeMenu = () => {
      if(window.innerWidth > 800){
        setMenuState('closed')
      }}
    
      window.addEventListener('resize', closeMenu)
   
   return (
    // <div>
      
        <nav className='nav'>
          <div className='links'>
            <Link to="/"> home </Link>
            <Link to="/projetos"> projetos </Link>
            <Link to="/sobre"> sobre </Link>
            <Link to="/contato"> contato </Link> 
          </div>
          <img src={Bars} alt='menu-bars' className='bars' onClick={() => toggleMenu()}/>
          <div className='nav-mobile'>
          
            <div className={`menu-bar-${menuState}`} onChange={()=> closeMenu()} >
              <Link onClick={()=> toggleMenu()} to="/"> home </Link>
              <Link onClick={()=> toggleMenu()}to="/projetos"> projetos </Link>
              <Link onClick={()=> toggleMenu()}to="/sobre"> sobre </Link>
              <Link onClick={()=> toggleMenu()}to="/contato"> contato </Link> 
            </div>
          </div>
        </nav>
        
      
    // </div>
  )
}

export default Menu
