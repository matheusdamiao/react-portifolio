import React from 'react'
import { useState } from 'react'
import style from './Contact.module.css'
import zap from './assets/whatsapp.svg'
import { useEffect } from 'react'

const Contact = () => {

 
  const [erros, setErros] = useState({})
  const [buttonText, setButtonText] = useState('Enviar mensagem')
  const [isValid, setIsValid] = useState(false)
  const [formData, setFormData] = useState({nome: '', email: '', mensagem: ''})



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    console.log(isValid)
    setErros(validar(formData))
    setIsValid(true)
        
  }

  
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const fetching = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "formulario", ...formData })
    })
      .then(() => setButtonText('Mensagem enviada! Obrigado! '))
      .catch(error => alert("Ops, Erro! A mensagem não foi enviada. Por favor, tente novamente")); 

      setFormData({nome: '', email: '', mensagem: ''})
  }



  useEffect(()=> {
    console.log(erros)
    
    if(Object.keys(erros).length === 0 && isValid) {
      console.log('Sem erros! Vamos fazer o post!')
      console.log(formData)
      fetching()

    } else if(!Object.keys(erros).length === 0) {
      console.log(`Deu este erro aqui: ${erros}`)

    }    
  },[erros])


  const validar = (values) => {
    const erros = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.nome) {
      erros.nome = 'Insira seu nome';
    } else if (values.nome.length < 3) {
      erros.nome = 'Ops! Nome muito pequeno.'
    }

    if(!values.email) {
      erros.email = 'Insira seu e-mail'
    } else if (!regex.test(values.email)){
      erros.email = 'E-mail inválido. Por favor, verifique as informações'
    }
    
    if(!values.mensagem) {
      erros.mensagem = 'Insira alguma mensagem'
    }

    return erros
  }


  const updateInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className={style.wrapper}>
      
        <div className={style.title}>
          <h3> Contato</h3>
          <span></span>
          <h1>Quer falar comigo?</h1>
          <p> Preencha os dados abaixo se você quiser me chamar para construir ou participar de algum projeto.</p>
        </div>

        <form name='formulario' onSubmit={handleSubmit} netlify>
          <input type="hidden" name="form-name" value="formulario" />
          <input value={formData.nome} placeholder='nome' type='text' name='nome' onChange={updateInput}/>
          <span>{erros?.nome}</span>
          <input value={formData.email} placeholder='email' type='email' name='email' onChange={updateInput}/>
          <span>{erros?.email}</span>
          <textarea value={formData.mensagem} placeholder='mensagem' name='mensagem' onChange={updateInput}/>
          <span style={{marginTop: '10px'}}>{erros?.mensagem}</span>         
          <button type='submit'> {buttonText} </button>
        </form>

        <span> Ou, se preferir </span>

        <a href='https://api.whatsapp.com/send?phone=5521999283924' className={style.zap} target="_blank" rel="noreferrer"><img src={zap} alt=''/> Chamar no Whatsapp </a>
        
    </div>
  )
}

export default Contact
