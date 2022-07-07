import React, { useState} from 'react'



const CardProjeto = ({titulo, techs, descricao, imagem, id, link}) => {






  return (
    <div className='cardProjeto' style={{marginTop: '200px', backgroundColor: "#f1f1f0", padding:"50px", borderRadius: '25px'}}>
      
      
      <img max-width='600px' width='100%' style={{opacity:'0.8'}} src={imagem} alt="foto"/>
      <h2 style={{textAlign:'center', lineHeight: '40px', marginTop:'30px', fontSize: '40px', fontFamily: '$advent-pro', fontWeight: '100'}}> {titulo} </h2>
      <h3 style={{textAlign: 'center', fontFamily:'Ralleway', fontWeight: '600', fontSize: '18px'}}> {techs} </h3>
      <p style={{textAlign: 'center', fontSize: '14px'}} > {descricao}</p>
      <button className='btn'>       
        <a href={link} target="_blank" rel="noreferrer"> Ver projeto </a>
      </button>
      
    </div>
  )
}

export default CardProjeto


