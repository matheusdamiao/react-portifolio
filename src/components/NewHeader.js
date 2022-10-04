import React from 'react'
import style from "./NewHeader.module.css"
import arrow from '../components/assets/arrow-down-solid.svg'

const NewHeader = () => {
  return (
    <div className={style.hero}>
      
      <div className={style.mainHero}>
        <h3>Front-End Developer &#38; UI Designer</h3> 
        <span></span>
        <h1> <span>Hello</span><span>!</span> I'm Matheus Damião </h1>
        <h2> Construo aplicações web com tecnologia e design modernos</h2> 
      </div>   

             
      <a className={style.link} href='/#projetos'> <img src={arrow} alt='' width={20}/> Conheça meus projetos </a>
      
    </div>
  )
}

export default NewHeader
