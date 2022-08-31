import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Main from './components/Main';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import Projetos from './components/Projetos';
import ProjetoCompleto from './components/ProjetoCompleto';
const root = document.getElementById('root');
// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  
    <BrowserRouter>
        <Menu />
          <Routes>
                
                <Route index path="/" element={<Main />} />
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path=":projeto" element={<ProjetoCompleto/> } /> 
                <Route path="projetos/:projeto" element={<ProjetoCompleto />}/>
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
            
          </Routes>
      </BrowserRouter>






    // <App />
  ,
  root
);


reportWebVitals();
