import React, { useEffect, useState } from 'react'
import style from "./NewProjetos.module.css"
import imagem1 from './assets/projeto-1-desktop.png';
import imagem1mobile from './assets/projeto-1-mobile.png'
import imagem2 from './assets/projeto-2-desktop.png'
import imagem2mobile from './assets/projeto-2-mobile.png'

const NewProjetos = () => {

    const [isMobile, setMobile] = useState(false)

    useEffect(()=>{
        const checkSize = ()=>{
            const resize = window.innerWidth < 1000
            setMobile(resize)
        }
       
        window.addEventListener('resize', ()=> checkSize())
        
        return window.removeEventListener('resize', ()=> checkSize())

    },[])

    
  return (
    <div id='projetos' className={style.divProjetos}>
        <div className={style.titulo}>
            <h3> Trabalhos selecionados</h3>
            <span></span>
            <h1> Projetos</h1>
        </div>

        <div className={style.projeto1}>
            <div className={style.imagem}>
                <img src={isMobile ? imagem1mobile : imagem1} alt=''/>
            </div>

            <div className={style.projeto1texto}>
                <h2>Site Institucional e blog para advogadas</h2>
                <h3> GatsbyJS / React / Netlify CMS / Sass </h3>
                <p> Neste projeto, elaborei um redesign do logotipo e da paleta de cores, produzindo um design style que melhor transmitisse os valores do escritório. 
                     </p>
                <button> Visite o site </button>
            </div>
        </div>


        <div className={style.projeto2}>
            <div className={style.imagem}>
                 <img src={isMobile ? imagem2mobile: imagem2} alt=''/>
            </div>
            
            <div className={style.projeto2texto}>
                <h2>Site para Fotógrafo</h2>
                <h3> JavaScript “Vanilla” / CSS / Figma </h3>
                <p> Neste projeto, desenvolvi um site completo de portifólio para um profissional de fotografia. 
                    Dividi as áreas de atuação e adicionei carroseis de imagem para facilitar a navegação.
                                         </p>
                <button> Visite o site </button>
            </div>
        </div>


      
    </div>
  )
}

export default NewProjetos
