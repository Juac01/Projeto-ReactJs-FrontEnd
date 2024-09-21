
import App from './pages/app';//Aqui se sobre entende que o arquivo index ela já considera 
import Contato from './pages/contato';
import NaoEncontrado from './pages/naoEncontrado';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';
import RenderizacaoCondicional from './pages/rendoCon';
import Efeitos from './pages/efeitos';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/varEstado' element={<VarEstado/>} />
                <Route path='/comps' element={<Comps/>} />
                <Route path='/rendocon' element={<RenderizacaoCondicional/>} />
                <Route path='/efeitos' element={<Efeitos/>} />

 

                
                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}