import React from 'react'
import Github from './assets/github.png'
import Instagram from './assets/instagram.png'
import Linkedin from './assets/linkedin.png'
import Angles from './assets/angles-down.png'


const Header = () => {
  return (
    <>
    <div className='header'>
      <p> Olá, meu nome é</p>
      <h1 className='name-header'> Matheus Damião </h1>
      <h3> Front-end Developer</h3>
      
    </div>

    <div className='btns-header'>
      <button> Diga Olá!</button>
      <div className='social-links'> 
        <a><img src={Github}/></a>
        <a><img src={Instagram}/></a>
        <a><img src={Linkedin}/></a>
      </div>
    </div>
    
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop: '120px', flexDirection: 'column'}}>
      <span> Ver projetos</span>
      <img style={{padding: '10px',width: '20px'}}src={Angles}/>
    </div>
    </>
  )
}

export default Header
