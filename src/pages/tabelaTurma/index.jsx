
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function TabelaTurma() {

    const navigate = useNavigate();

    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/tabelaTurma/login');
    }

    return (
        <div className="pagina-app pagina">
            <Cabecalho titulo='Aplicando Fullstack utilizando "ReactJS - NodeJs - MySQL" 👌' />


            <section className='secao reactjs'>
                <h1>ADO - #05</h1>

                <ul className='Link'>
                    <li>
                        <Link to='/tabelaTurma/inserir' >Inserir Turmas</Link>
                    </li>
                    <li>
                        <Link to='/tabelaTurma/consultar' >Consultar Turmas</Link>
                    </li>
                </ul>

                <button onClick={logOff}>Logoff</button>
            </section>

        </div>
    );
}


