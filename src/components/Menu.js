import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import Bars from './assets/bars-solid.svg'
import { Slide } from 'react-awesome-reveal'



const Menu = () => {
  

  const [menu, setMenu] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)


  let menuDiv

  if(menu){
    menuDiv = 
    
    <ul className='list-menu' style={{listStyle: 'none', paddingTop: '50px', margin: '0', width: '40%', height:'100%', position: 'fixed', backgroundColor: 'rgba(0,0,0,0.8', top: '0', right: '0', zIndex: '50'}}>
      <li><a href='#projetos'>projetos</a></li>
      <li><a href='#sobre'>sobre</a></li>
      <li><a href='#contato'>contato</a></li>
    </ul>
    

  
  }

  

  useEffect(()=>{

    const isBrowser = typeof window !== "undefined"
    if(isBrowser) {
    
    window.addEventListener('resize', ()=>{
      if (window.innerWidth < 800) {
        return setMenuMobile(true)
       } 
       else {
        setMenuMobile(false)
        setMenu(!menu)
       }
    })

    const divmenu = document.querySelector('.menuList-div');
    window.addEventListener('click', (e)=>{
  
      const insideMenu = e.composedPath().includes(divmenu)
      if(!insideMenu){
        setMenu(false)
      }
    })
  
  
    
  
    // const divMenu = document.querySelector('.div-menu-mobile');

    // window.addEventListener('click', (e)=>{
      
    //   const insideDiv = e.composedPath().includes(divMenu)
    //   if(!insideDiv) {
    //     setClicked(false)
    //   }

    // })

  }
  },[menuMobile],[menu])


 



       
  // const [menuState, setMenuState] = useState('closed');
  

  //   const toggleMenu = () => {
  //     setMenuState('active')
  //     if(menuState === 'active') {
  //       setMenuState('closed') 
  //     } 
  //     }           

  //   const closeMenu = () => {
  //     if(window.innerWidth > 800){
  //       setMenuState('closed')
  //     }}
    
    
   
  //     useEffect( ()=>{
  //       window.addEventListener('resize', closeMenu())
  //     })

   return (
    // <div>
      
        // <nav className='nav'>
        //   <div className='links'>
        //     <Link to="/"> home </Link>
        //     <a href="#projetos"> projetos </a>
        //     <a href="#sobre"> sobre </a>
        //     <a href="#contato"> contato </a> 
        //   </div>
        //   <img src={Bars} alt='menu-bars' className='bars' onClick={() => toggleMenu()}/>

        //   <div className='nav-mobile'>
          
        //     <div className={`menu-bar-${menuState}`} onChange={()=> closeMenu()} >
        //       <Link onClick={()=> toggleMenu()} to="/"> home </Link>
        //       <a onClick={()=> toggleMenu()}href="#projetos"> projetos </a>
        //       <a onClick={()=> toggleMenu()}href="#sobre"> sobre </a>
        //       <a onClick={()=> toggleMenu()}href="#contato"> contato </a> 
        //     </div>
        //   </div>
        // </nav>
        
      
    // </div>


    <div>
      <div className='menu-desktop'>
        <div className='logo-div'>
          <p> LOGO</p>
        </div>
        <ul>
          <li><a href='#projetos'>projetos</a></li>
          <li><a href='#sobre'>sobre</a></li>
          <li><a href='#contato'>contato</a></li>
        </ul>
      </div>

      <div className={menuMobile ? 'menu-mobile': 'menu-mobile-default' }>
        <div className='logo-div'>
          <p> LOGO</p>
        </div>
        <div className='menuList-div'>
          <p onClick={()=> setMenu(!menu)}> MENU </p>
        </div>
      </div>

      {menuDiv}
    
    
    </div>
  )
}

export default Menu
