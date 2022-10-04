import React from 'react'
import style from './Stack.module.css'
import icon1 from '../components/assets/figma-components/css3-brands1.svg'
import icon2 from '../components/assets/figma-components/figma-brands1.svg'
import icon3 from '../components/assets/figma-components/html5-brands1.svg'
import icon4 from '../components/assets/figma-components/icons8-adobe-photoshop1.svg'
import icon5 from '../components/assets/figma-components/icons8-gatsby1.svg'
import icon6 from '../components/assets/figma-components/icons8-netlify1.svg'
import icon7 from '../components/assets/figma-components/js-brands1.svg'
import icon8 from '../components/assets/figma-components/npm-brands1.svg'
import icon9 from '../components/assets/figma-components/react-brands1.svg'
import icon10 from '../components/assets/figma-components/sass-brands1.svg'
import icon11 from '../components/assets/figma-components/Vector-1.svg'
import icon12 from '../components/assets/figma-components/Vector.svg'
import githubIcon from '../components/assets/github1.svg'
import curriculoIcon from '../components/assets/file-icon.svg'
import curriculo from '../components/assets/curriculum.pdf'






const Stack = () => {
  return (
    <div className={style.divMain}>
      <div className={style.titulo}>
        <h3>Ferramentas</h3>
        <span></span>
        <h1>Stack &amp; Tools </h1>
        <p> Estas são as principais tecnologias que utilizo para desenvolver meu projetos.</p>
      </div>

      <div className={style.icones}>
        
        <div>
        <img src={icon1} alt=''/>
        <p style={{textAlign: 'center'}}>CSS</p>
        </div>
        
        <div>
        <img src={icon2} alt=''/>
        <p style={{textAlign: 'center'}}>Figma</p>
        </div>
        
        <div>
        <img src={icon3} alt=''/>
        <p style={{textAlign: 'center'}}>HTML 5</p>
        </div>
        
        <div>
        <img src={icon4} alt=''/>
        <p style={{textAlign: 'center'}}>Photoshop</p>
        </div>
        
        <div>
        <img src={icon5} alt=''/>
        <p style={{textAlign: 'center'}}>Gatsby</p>
        </div>

        <div>
        <img src={icon6} alt=''/>
        <p style={{textAlign: 'center'}}>Netlify</p>
        </div>

        <div>
        <img src={icon7} alt=''/>
        <p style={{textAlign: 'center'}}>JavaScript</p>
        </div>

        <div>
        <img src={icon8} alt=''/>
        <p style={{textAlign: 'center'}}>NPM</p>
        </div>

        <div>
        <img src={icon9} alt=''/>
        <p style={{textAlign: 'center'}}>React</p>
        </div>

        
        <div>
          <img src={icon10} alt=''/>
          <p style={{textAlign: 'center'}}>Sass</p>
        </div>
        
        
        <div>
        <img src={icon11} alt=''/>
        <p style={{textAlign: 'center'}}>Git</p>
        </div>

        
        <div>
        <img src={icon12} alt=''/>
        <p style={{textAlign: 'center'}}>Bootstrap</p>
        </div>
        





      </div>


      <div className={style.buttons}>
        <a className={style.link} href={curriculo} target="_blank" rel="noreferrer">  Currículo <img alt='' src={curriculoIcon}/> </a>
        <a className={style.link} href='https://github.com/matheusdamiao' target="_blank" rel="noreferrer">GitHub <img alt='' src={githubIcon}/> </a>
      </div>
    </div>
  )
}

export default Stack
