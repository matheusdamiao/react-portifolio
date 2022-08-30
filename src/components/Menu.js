import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import Bars from './assets/bars-solid.svg'
import { Slide } from 'react-awesome-reveal'
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2'

const Menu = () => {
  

  const [menu, setMenu] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)


  let menuDiv

  if(menu){
    menuDiv =     
     <ul className='list-menu' style={{listStyle: 'none', paddingTop: '100px', margin: '0', width: '25%', height:'100%', paddingLeft: '0', position: 'fixed', backgroundColor: 'rgba(0,0,0,0.8', top: '0', right: '0', zIndex: '50', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
      <li style={{margin: '20px'}}><a style={{color: 'white'}} href='#projetos'>projetos</a></li>
      <li style={{margin: '20px'}}><a style={{color: 'white'}}href='#sobre'>sobre</a></li>
      <li style={{margin: '20px'}}><a style={{color: 'white'}}href='#contato'>contato</a></li>
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
        setMenu(false)
        
       }
    })

    // const divmenu = document.querySelector('.menuList-div');

    
    // window.addEventListener('click', (e)=>{
  
    //   const insideMenu = e.composedPath().includes(divmenu)
    //   if(!insideMenu){
    //     setMenu(false)
    //     divmenu.dispatchEvent(new Event('click'));
    //     setMenuAnimation(true)
    //   }
    // })
  
 

  }
  },[menuMobile],[menu],)


 

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
        <Link to="/"><div className='logo-div'>
          <p style={{fontSize: '30px', letterSpacing: '2px', fontFamily: 'Raleway'}}> MOD </p>
        </div>
        </Link>
        <ul>
          <Link to="/sobre" style={{fontFamily: 'Raleway'}}> Sobre</Link>
          <Link to="/projetos"  style={{fontFamily: 'Raleway'}}> Projetos </Link>
          <Link to="/contato"  style={{fontFamily: 'Raleway'}}> Contato</Link>

          
          {/* <li><a href='#projetos'>projetos</a></li>
          <li><a href='#sobre'>sobre</a></li>
          <li><a href='#contato'>contato</a></li> */}
        </ul>
      </div>

      <div className={menuMobile ? 'menu-mobile': 'menu-mobile-default' }>
        <Link to="/"><div className='logo-div'>
          <p style={{fontSize: '30px', letterSpacing: '2px', fontFamily: 'Raleway'}}> MOD </p>
        </div>
        </Link>
        <div className='menuList-div'>
            <UseAnimations
            animation={menu2}
            size={56}
            style={{ padding: 100 }}
            onClick={()=> setMenu(!menu)}
            strokeColor='white'
            speed={2}
            
          />
          
        </div>
      </div>

      {menuDiv}
    
    
    </div>
  )
}

export default Menu
