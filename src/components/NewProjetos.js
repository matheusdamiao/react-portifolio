import React, { useEffect, useState } from 'react'
import style from "./NewProjetos.module.css"

import imagem1mobileSVG from './assets/projeto-1-mobile-svg.svg'
import imagem1desktopSVG from './assets/projeto-1-desk-svg.svg'

import imagem2desktopSVG from './assets/projeto-2-desk-svg.svg'
import imagem2mobileSVG from './assets/projeto-2-mobile-svg.svg'


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
                <img src={isMobile ? imagem1mobileSVG : imagem1desktopSVG} alt=''/>
            </div>

            <div className={style.projeto1texto}>
                <h2>Site Institucional e blog para advogadas</h2>
                <h3> GatsbyJS / React / Netlify CMS / Figma / Sass </h3>
                <p>  Neste projeto, para o desenvolvimento do design do site e blog de um escritório de advocacia, vi a necessidade de primeiramente elaborar um design style que melhor traduzisse os valores do escritório e que, ao mesmo tempo, contribuisse com consistência ao design do site. A nova logotipo criada, juntamente com paleta de cores e uma temática de fotos nortearam o design de um website com tema moderno de tom monocromático, que transmite tranquilidade e serenidade, e ainda traduz para o design a importância da relação pacífica e humanizada entre os conflitos familiares -- valor de suma importância para as duas advogadas sócias deste escritório. O projeto encontra-se em construção.          
                     </p>
                <a href='https://cupulilleemedeirosadvocacia.netlify.app/home'  target="_blank" rel="noreferrer"> Visite o site </a>
            </div>
        </div>


        <div className={style.projeto2}>
            <div className={style.imagem}>
                 <img src={isMobile ? imagem2mobileSVG: imagem2desktopSVG} alt=''/>
            </div>
            
            <div className={style.projeto2texto}>
                <h2>Site para Fotógrafo</h2>
                <h3> JavaScript “Vanilla” / CSS / Figma </h3>
                <p> Neste projeto, desenvolvi um site completo de portifólio para um profissional de fotografia. Para tanto, fiz uma pesquisa comparativa entre os diferentes tipos de UIs utilizados para sites de fotógrafos e assim construi um design que contivesse as principais informações, tais como as diferentes áreas de atuação, os relatos de seus clientes e um formulário de contato.
                    A navegação pelas fotos foi facilitada pela utilização de carroseis. 
                                         </p>
                <a href='https://matheusdamiao.github.io/site_fotografo/'  target="_blank" rel="noreferrer"> Visite o site </a>
            </div>
        </div>


      
    </div>
  )
}

export default NewProjetos
