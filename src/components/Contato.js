import React, { useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc} from "firebase/firestore"

const Contato = () => {

  const [inputs, setInputs] = useState({})

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


  const handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form", ...inputs })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

   
    
  };



  // const handleSubmit = (e) =>{
  //   e.preventDefault();
        
  // const setData = async () => {
  //  try {
  //    const docRef = await addDoc(collection(db, "form"), {
  //      nome: inputs.nome,
  //      email: inputs.email,
  //      telefone: inputs.telefone,
  //      message: inputs.message,
  //      time: new Date()
  //    });
  //    console.log(docRef)
  //  } catch (e) {
  //    console.log(e.message)
  //  }
  // }

  
  // // setData(inputs)
  // // setInputs({})
  // }


  const updateInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs( {
      ...inputs, [name]: [value]
    })
    
  }


  



  return (
    <div>
      <div className='header-form'>
       <h1> Vamos trocar uma ideia? </h1> 
        <p> Preencha o formulário ou, se preferir, entre em contato comigo por meio de um dos links abaixo </p><br /><br />
      </div>

      <form className='form' name='form' onSubmit={handleSubmit} netlify>
        <input type="hidden" name="form-name" value="form" />
        <label> 
          <input type="text" placeholder='Nome' name='name' value={inputs.nome || ''} onChange={updateInput}/>
        </label>
        <label>
          <input type="email" placeholder='E-mail' name='email' value={inputs.email || ''} onChange={updateInput}/>
        </label>
        <label>
          <input type="text" placeholder='Telefone' name='telefone' value={inputs.telefone || ''} onChange={updateInput}/>
        </label>
        <label>
          <textarea placeholder='Mensagem' width="200px" name='message' value={inputs.message || ''} onChange={updateInput}/>
        </label>
        <button className="btn-form" type='submit'> Enviar </button>
      </form>
      
    </div>
  )
}

export default Contato
