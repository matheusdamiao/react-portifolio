import React from 'react'
import Code from './assets/figma-components/code-solid 1.png'
import um from './assets/figma-components/Component 1.png'
import dois from './assets/figma-components/Component 2.png'
import tres from './assets/figma-components/Component 3.png'
import quatro from './assets/figma-components/Component 4.png'
import cinco from './assets/figma-components/Component 5.png'
import seis from './assets/figma-components/Component 6.png'
import sete from './assets/figma-components/Component 7.png'
import oito from './assets/figma-components/Component 8.png'
import nove from './assets/figma-components/Component 9.png'
import foto from './assets/figma-components/foto-sobre.png'

import Github from './assets/github.png'
import Doc from './assets/file-lines-solid 1.png'


const Sobre = () => {
  return (
    <>
    
    <h1 style={{ marginTop: '200px', marginBottom: '100px', fontSize: '40px', textAlign: 'center'}}> sobre mim </h1>
    
    <div className='sobre'>
      
      <div style={{width: '500px'}}>

      <img src={foto} style={{margin: '0 auto', display: 'block', width:'200px', marginBottom:'50px'}} alt="avatar"/>

      <p>
      Me chamo <span style={{fontWeight: '900'}}>Matheus Oliveira Damião </span>, nasci em Florianópolis, mas sou carioca por convivência. Vivo no Rio de Janeiro desde 2011 quando me mudei para estudar Letras na UFRJ. 
      Professor de idiomas desde então, engressei pro mestrado e depois segui para o doutorado. No entanto, a solitária e pouco valorizada carreira acadêmica que levava, somado ao crescente encolhimento na área de Humanidades, tiveram um grande impacto sobre mim, e lá pelo fim do meu PhD, resolvi, apesar da insegurança inicial, repensar toda minha carreira e embarcar em uma nova trajetória. 
      Foi quando descobri a área de desenvolvimento web, com suas linguagens e experiências incríveis. Me apaixonei por web design, sobretudo quando encontrei o vasto mundo do UX/UI e cá estou eu, de malas prontas, dando meus primeiros passos nesta nova carreira.
      O caminho está só no começo, eu sei, mas a sensação é de que já trilho como se fosse um sonho de criança.
      A tecnologia me cativou com sua constante mudança, com sua calorosa e ativa comunidade e com um mundo de saberes incrivelmente vastos. 
      </p>
      </div>

      <div style={{width: '350px'}}>
        <h2 style={{textAlign: 'center', fontSize:'35px', marginBottom: '130px', marginTop: '60px'}}> Skills <img src={Code}/> </h2>
        <div style={{width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
          <img width="60px" src={um} style={{padding: '20px'}} alt="icon"/>
          <img width="70px" src={dois} style={{padding: '20px'}} alt="icon"/>
          <img width="80px" src={tres} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={quatro} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={cinco} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={seis} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={sete} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={oito} style={{padding: '20px'}} alt="icon"/>
          <img width="60px" src={nove} style={{padding: '20px'}} alt="icon"/>
        </div>

        <div style={{marginTop: '50px'}}>
          <button className='btn' style={{marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '200px', height: '50px'}}> Currículo <img src={Doc} style={{width:'20px'}} alt="doc" /></button>
          <a href='https://github.com/matheusdamiao' target="_blank" rel="noreferrer"> <button className='btn' style={{backgroundColor: 'rgba(134, 134, 134, 0.5)', width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '50px'}}> Github  <img src={Github} style={{width:'35px'}} alt="github"/> </button> </a>
        </div>
      </div>

    </div>



    </>
    
  )
}

export default Sobre
