import React from 'react'
import style from "./About.module.css"
import Frame5 from './assets/Frame5.svg'
import instaIcon from './assets/instagram-square.svg'
import GitIcon from './assets/github-square.svg'
import linkedin from './assets/linkedin-square.svg'



const About = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h3>Sobre mim</h3>
        <span></span>
        <h1> Quem sou eu</h1>
      </div>

      <div className={style.wrapperContent}>

    
        <div className={style.divTexto}>
            <p>
            Me chamo <span>Matheus Oliveira Damião</span>, nasci em Florianópolis, mas sou carioca por convivência. Vivo no Rio de Janeiro desde 2011 quando me mudei para estudar Letras na UFRJ. Professor de idiomas desde então, me tornei mestre e segui para o doutorado. No entanto, a solitária e pouco valorizada carreira acadêmica que levava, somado ao crescente encolhimento na área de Humanidades, tiveram um grande impacto sobre mim, e lá pelo fim do meu PhD, resolvi, apesar da insegurança inicial, repensar toda minha carreira e embarcar em uma nova trajetória. Foi quando descobri a área de desenvolvimento web, com suas linguagens e experiências incríveis. Me apaixonei por web design, sobretudo quando encontrei o vasto mundo do UX/UI e cá estou eu, de malas prontas, dando meus primeiros passos nesta nova carreira. O caminho está só no começo, eu sei, mas a sensação é de que já trilho como se fosse um sonho de criança. A tecnologia me cativou com sua constante mudança, com sua calorosa e ativa comunidade e com um mundo de saberes incrivelmente vastos.  Para conhecer mais sobre mim, siga-me nas redes sociais.
            </p>
        </div>

                  
            
         <div className={style.divImagens}>
             <img alt='' src={Frame5}/>
            <div className={style.divIcones}>
                 <a href='https://www.instagram.com/damiaomatheuso/' target="_blank" rel="noreferrer"><img src={instaIcon}alt=''/></a>
                 <a href='https://github.com/matheusdamiao' target="_blank" rel="noreferrer"><img src={GitIcon}alt=''/></a>
                 <a href='https://www.linkedin.com/in/matheus-damiao/' target='_blank' rel="noreferrer"><img src={linkedin} alt=''/></a>
             </div>
         </div>
              
        

      </div>


    </div>
  )
}

export default About
