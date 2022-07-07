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
        <a href="https://github.com/matheusdamiao" target="_blank" rel="noreferrer"><img src={Github} alt="github"/></a>
        <a href="https://www.instagram.com/damiaomatheuso/" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram"/></a>
        <a href="https://www.linkedin.com/in/matheus-dami%C3%A3o-b18021219/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin"/></a>
      </div>
    </div>
    
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop: '120px', flexDirection: 'column'}}>
      <span> Ver projetos</span>
      <img style={{padding: '10px', width: '50px'}} src={Angles} alt="angles-down"/>
    </div>
    </>
  )
}

export default Header
