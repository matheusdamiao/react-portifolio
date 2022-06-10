import React, { useState } from 'react'
import CardProjeto from './CardProjeto'
import { Link, Outlet } from 'react-router-dom'

const Projetos = () => {

  const [project, setProject] = useState([
    {
      titulo: 'Portifólio para fotógrafo',
      techs: 'HTML / CSS / JavaScript "Vanilla"',
      descricao: 'Small website designed  and developed to an imaginary professional photographer',
      imagem: require('./assets/fotografo.jpg'),
      id: 1
    },
    {
      titulo: 'Pokedex Search',
      techs: 'React / CSS',
      descricao: 'Training project consuming the PokeApi with some functionalities to manipulate data',
      imagem: require('./assets/pokedex.jpg'),
      id: 2
    },
    {
      titulo: 'Todo List Tracker',
      techs: 'React / Styled-Components',
      descricao: 'A simple CRUD to practice Class Components',
      imagem: require('./assets/tasks.jpg'),
      id: 3
    }
  ])


  return (
    <div className='projetos'>
      
          {project.map( (project, index)=> {
          return <div>
          
          <CardProjeto 
          titulo={project.titulo} 
          techs={project.techs} 
          descricao={project.descricao} 
          imagem={project.imagem} 
          key={index} 
          id={project.id} />   

          <Link to={`${project.id}`} >
          
          <button style={{
          margin: '0 auto',
          display:'block',     
          background: 'rgba(68, 255, 143, 0.5)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '25px',
          border: 'none',
          padding: '15px 25px',
          fontSize: '15px',
          cursor: 'pointer',
          textDecoration: 'none'
          
        }}>
           Detalhes</button>
           
        </Link>
        
          </div>
          })
          }
          
         <Outlet /> 
    </div>
  )
}

export default Projetos
