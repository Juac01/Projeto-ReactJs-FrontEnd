import './index.scss';
// import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function Contato() {
    return (
        <div className='pagina-contato pagina'>
            <Cabecalho titulo="ReactJs | Contato" />

            <section className='secao'>
                <img className='icone-contato' src='/assets/images/contato.png' alt='icone' />
            </section>
        </div>
    )
}