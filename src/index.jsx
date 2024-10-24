

   //regrg


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './pages/app';//Aqui se sobre entende que o arquivo index ela já considera 
import TabelaTurmaLogin from './pages/tabelaTurma/Login';
import TabelaTurma from './pages/tabelaTurma';
import TabelaTurmaInserir from './pages/tabelaTurma/Inserir';
import TabelaTurmaConsultar from './pages/tabelaTurma/consultar';

import { Routes, Route, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />

                <Route path='/tabelaTurma/login' element={<TabelaTurmaLogin />} />
                <Route path='/tabelaTurma' element={<TabelaTurma />} />
                <Route path='/tabelaTurma/inserir' element={<TabelaTurmaInserir />} />
                <Route path='/tabelaTurma/consultar' element={<TabelaTurmaConsultar />} />



            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);





