import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
    <Menu />
    <Routes>
        <Route index path="/" element={<Main />}/> 
        <Route path="projetos" element={<Projetos/>} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
