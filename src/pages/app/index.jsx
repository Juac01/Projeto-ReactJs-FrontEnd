
import './index.scss';
import { useNavigate } from 'react-router-dom';


import Cabecalho from '../../components/cabecalho';



export default function App() {

    const navigate = useNavigate();

  return (
    <div className="pagina-inicio pagina">
       <Cabecalho titulo='Bem-vindo Irmão' />
       <button onClick={() => navigate('/tabelaTurma/login')}>Ir para Login</button>
    </div>
  );
}



