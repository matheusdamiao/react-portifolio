import React, { useState } from 'react'
import Projeto from './Projeto'


const Projetos = () => {

  const [project, setProject] = useState([
    {
      titulo: 'Projeto Fotógrafo',
      techs: 'HTML, CSS, JavaScript "Vanilla"',
      descricao: 'Testando alguma descrição qualquer aqui',
      imagem: require('./assets/fotografo.jpg')
    },
    {
      titulo: 'Pokedex',
      techs: 'React, Styled-Components',
      descricao: 'Testando alguma descrição qualquer aqui',
      imagem: require('./assets/pokedex.jpg')
    }
  ])


  return (
    <div className='projetos'>
      
        {project.map( (project, index)=> {
          return <Projeto titulo={project.titulo} techs={project.techs} descricao={project.descricao} imagem={project.imagem} key={index}/>
          })
        }
               
      
    </div>
  )
}

export default Projetos
