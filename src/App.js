import './App.css';
import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Main from './components/Main';
import CardProjeto from './components/CardProjeto';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import Projetos from './components/Projetos';
import ProjetoCompleto from './components/ProjetoCompleto';



function App() {
  return (
    <>
    
    <Menu />
    <Routes>
        <Route index path="/" element={<Main />} /> 
        <Route path="projetos" element={<Projetos/>}/>
        <Route path=":projeto" element={<ProjetoCompleto/> } /> 
        <Route path="projetos/:projeto" element={<ProjetoCompleto />}/>
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
       
    </Routes>
    
    </>
  );
}

export default App;
