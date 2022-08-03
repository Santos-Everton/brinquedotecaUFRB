import './App.css';
import Home from './components/Home';
import PermanenciaHome from './components/PermanenciaHome';
import Criancas from './components/Criancas';
import Responsavel from './components/Responsavel';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Nav variant='tabs'>
                    <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
                    <Nav.Link as={Link} to="/PermanenciaHome">Controle de Permanências</Nav.Link>
                    <Nav.Link as={Link} to="/Criancas">Crianças</Nav.Link>
                    <Nav.Link as={Link} to="/Responsavel">Responsáveis</Nav.Link>
                </Nav>
            
            <Routes>
                <Route path="/" exact={true} element={<Home/>}> </Route>
                <Route path="/PermanenciaHome" element={<PermanenciaHome/>}> </Route>
                <Route path="/Criancas" element={<Criancas/>}> </Route>
                <Route path="/Responsavel" element={<Responsavel/>}> </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;