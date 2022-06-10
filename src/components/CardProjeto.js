import React, { useState} from 'react'



const CardProjeto = ({titulo, techs, descricao, imagem, id}) => {






  return (
    <div className='cardProjeto' style={{marginTop: '200px'}}>
      
      
      <img width='600px' style={{opacity:'0.8'}} src={imagem}/>
      <h2 style={{textAlign:'center', lineHeight: '20px', marginTop:'30px', fontSize: '40px', fontFamily: '$advent-pro', fontWeight: '100'}}> {titulo} </h2>
      <h3 style={{textAlign: 'center', fontFamily:'Ralleway', fontWeight: '600', fontSize: '18px'}}> {techs} </h3>
      <p style={{textAlign: 'center', fontSize: '14px'}} > {descricao}</p>
      
    </div>
  )
}

export default CardProjeto
