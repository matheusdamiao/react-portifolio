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
      id: 1,
      link: "https://matheusdamiao.github.io/site_fotografo/"
    },
    {
      titulo: 'Pokedex Search',
      techs: 'React / CSS',
      descricao: 'Training project consuming the PokeApi with some functionalities to manipulate data',
      imagem: require('./assets/pokedex.jpg'),
      id: 2,
      link: "https://matheusdamiao.github.io/react-pokedex/"
    },
    {
      titulo: 'Todo List Tracker',
      techs: 'React / Styled-Components',
      descricao: 'A simple CRUD to practice Class Components',
      imagem: require('./assets/tasks.jpg'),
      id: 3,
      link: "https://matheusdamiao.github.io/react-to-do-list/"
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
          id={project.id}
          link={project.link} />   
        
          </div>
          })
          }
          
         
    </div>
  )
}

export default Projetos
