
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <Cabecalho titulo='Estudando ReactJs!!!!!!' />


      <section className='secao'>
        <h1>Temas</h1>

        {/* <input type="text" placeholder='Digite aqui' /><br /><br />
        <select name="as" id="as">
          <option value="">Item 1</option>
          <option value="">Item 2</option>
        </select><br /><br />
        <button>Clique aqui</button> */}


        <ul className='Link'>
          <li>
            <Link to='/contato' >Ir para contato</Link>
          </li>
          <li>
            <Link to='/eventos' >Ir para eventos</Link>
          </li>
          <li>
            <Link to='/varEstado' >Ir para variavel de estado</Link>
          </li>
          <li>
            <Link to='/comps' >Ir para Componentes</Link>
          </li>
          <li>
            <Link to='/rendocon' >Ir para Renderização Condicional</Link>
          </li>
          <li>
            <Link to='/efeitos' >Ir para Efeitos</Link>
          </li>
        </ul>
      </section>

    </div>
  );
}


