import React from 'react'

const Projeto = ({titulo, techs, descricao, imagem}) => {
  return (
    <div style={{marginTop: '200px'}}>
      
      <h2 style={{textAlign:'center', marginBottom:'100px', fontSize: '35px'}}> {titulo} </h2>
      <img width='800px' src={imagem}/>
      <h3 style={{textAlign: 'center', marginTop: '80px'}}> {techs} </h3>
      <p style={{textAlign: 'center'}} > {descricao}</p>
      <button style={{
        margin: '0 auto',
        display:'block',     
        background: 'rgba(68, 255, 143, 0.5)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '25px',
        border: 'none',
        padding: '15px 25px',
        fontSize: '15px',
        cursor: 'pointer'
      }}>
         Detalhes</button>
    </div>
  )
}

export default Projeto
